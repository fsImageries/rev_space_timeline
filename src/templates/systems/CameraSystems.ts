import { Camera, Raycaster, Vector3 } from "three";
import { Entity } from "../../ecs/Entity";
import { Store } from "../../ecs/Store";
import { System } from "../../ecs/System";
import { World } from "../../ecs/World";
import { operand } from "../../ecs/utils";
import GLOBALS from "../../helpers/Constants";
import { OrbitLineComponent, RadiusComponent } from "../components/CelestialComponents";
import {
    BaseDataComponent,
    CameraComponent, 
    ParticleRingTypeComponent,
    FollowCameraComponent,
    FollowCameraComponentData,
    SunTypeComponent
} from "../components/CommonComponents";
import {
    CosmicMapSunTextComponent,
    MeshComponent,
    RotGroupComponent,
    TransformGroupComponent
} from "../components/MeshComponents";


export class CameraFocusSystem extends System {
    static queries = [
        [operand("exist", TransformGroupComponent), operand("exist", BaseDataComponent), operand("exist", RadiusComponent)],
        [operand("exist", CameraComponent)],
        [operand("exist", FollowCameraComponent)]
    ];

    constructor(world: World) {
        super(world);
        this.enabled = false;
    }

    execute(): void {
        const tar = Store.getInstance().store.focusTarget.toLowerCase();
        if (!this.queries || !tar) return;

        const ccomp = this.queries[1].entities[0].getComponent(CameraComponent);
        const fcomp = this.queries[2].entities[0].getComponent(FollowCameraComponent);

        if (Store.getInstance().state.camPos) {
            ccomp.data.active.position.copy(Store.getInstance().state.camPos);
        }

        for (const entity of this.queries[0].entities) {
            if (tar === entity.getComponent(BaseDataComponent).data.name.toLowerCase()) {
                const tcomp = entity.getComponent(TransformGroupComponent);
                tcomp.data.group.getWorldPosition(GLOBALS.WORLD_POS);
                const rad = entity.getComponent(RadiusComponent).data.drawRadius * 2;

                let mult = 14;
                if (entity.getComponent(ParticleRingTypeComponent)) {
                    GLOBALS.WORLD_POS.z -= rad;
                    // GLOBALS.WORLD_POS.x += rad * 14
                    mult = 4;
                }

                // TODO calculate view vector from object to light (nearest)
                ccomp.data.active.position.copy(GLOBALS.WORLD_POS).x -= rad * mult;
                ccomp.data.freeCtrl?.target.copy(GLOBALS.WORLD_POS.clone());
                ccomp.data.freeCtrl?.update();

                fcomp.data.target = [entity, rad * mult]
            }
        }
        this.enabled = false;
    }
}

export class RaycasterSystem extends System {
    static queries = [
        [operand("exist", MeshComponent), operand("exist", BaseDataComponent)],
        [operand("exist", CameraComponent)]
    ];

    public forceSwtich = false;

    constructor(world: World) {
        super(world);
        this.enabled = false;
    }

    execute(): void {
        if (!this.queries) return;

        const cam = this.queries[1].entities[0].getComponent(CameraComponent).data.active;
        const raycaster = Store.getInstance().store.raycaster as Raycaster;
        raycaster.setFromCamera(Store.getInstance().store.raypointer, cam);

        for (const entity of this.queries[0].entities) {
            const mesh = entity.getComponent(MeshComponent).data.mesh;
            let intersects = raycaster.intersectObject(mesh);
            if (intersects.length === 0) {
                // TODO build general text component, check for that and get texts if necessary
                const hasTxt = entity.getComponent(CosmicMapSunTextComponent);
                if (hasTxt) {
                    intersects = raycaster.intersectObjects([hasTxt.data.title, hasTxt.data.texts]);
                }

                const hasOrbit = entity.getComponent(OrbitLineComponent)
                if (hasOrbit) {
                    intersects = raycaster.intersectObject(hasOrbit.data.mesh)
                }
            }

            if (intersects.length > 0) {
                react2intersect(entity, cam, this.world, this.forceSwtich);
                this.forceSwtich = false;
                break;
            }
        }
        this.enabled = false;
    }
}

function react2intersect(entity: Entity, cam: Camera, world: World, forceSwtich = false) {    
    const base = entity.getComponent(BaseDataComponent);
    const rcomp = entity.getComponent(RadiusComponent);
    const tcomp = entity.getComponent(TransformGroupComponent);

    if (forceSwtich) {
        world.lvlManager.openLevel(base.data.name);
        return;
    }

    // we hit a sun in the cosmic map
    if (rcomp && world.lvlManager.currentLvl === world.lvlManager.levelsNames[0]) {
        tcomp.data.group.getWorldPosition(GLOBALS.WORLD_POS);
        const dist = cam.position.distanceTo(GLOBALS.WORLD_POS);
        if (dist < rcomp.data.drawRadius * 40) {
            world.lvlManager.openLevel(base.data.name);
            return;
        }
    }

    Store.getInstance().store.focusTarget = base.data.name;
    const sys = world.sysManager.getSystem(CameraFocusSystem);
    if (!sys) return;
    sys.enabled = true;
}

export class FollowCameraSystem extends System {
    static queries = [
        [operand("exist", FollowCameraComponent)],
    ];

    constructor(world: World) {
        super(world);
        this.enabled = false;
    }

    private calculateIdealOffset(radius:number, tcomp?: TransformGroupComponent) {
        // const idealOffset = new Vector3(-15, 20, -30);
        const idealOffset = new Vector3(0, 0, -radius * 2);
        if (!tcomp) return idealOffset
        idealOffset.applyQuaternion(tcomp.data.group.quaternion);
        idealOffset.add(tcomp.data.group.getWorldPosition(GLOBALS.WORLD_POS));
        return idealOffset;
      }
    
    private calculateIdealLookat(radius:number, tcomp?: TransformGroupComponent) {
        // const idealLookat = new Vector3(0, 10, 50);
        const idealLookat = new Vector3(0, 0, 0);
        if (!tcomp) return idealLookat
        idealLookat.applyQuaternion(tcomp.data.group.quaternion);
        idealLookat.add(tcomp.data.group.getWorldPosition(GLOBALS.WORLD_POS));
        return idealLookat;
      }

    execute(delta:number): void {
        if (!this.queries) return;

        const ccomp = this.queries[0].entities[0].getComponent(FollowCameraComponent);

        if (!ccomp.data.target) {
            const ftar = Store.getInstance().state.focusTarget
            const tar = this.world.ecManager.getEntityByBaseName(ftar)
            if (tar) {
                ccomp.data.target = [tar, 0]
            }
            else {
                this.world.ecManager.entities.find((entity) => {
                    const scomp = entity.getComponent(SunTypeComponent)
                    if (scomp) {
                        ccomp.data.target = [entity,0]
                    }
                })
            }

        }

        const tcomp = ccomp.data.target?.[0].getComponent(TransformGroupComponent) as TransformGroupComponent
        const rad = ccomp.data.target?.[1] as number * 5

        // console.log(ccomp.data.target?.[0].components)
        const idealOffset = this.calculateIdealOffset(rad, tcomp);
        const idealLookat = this.calculateIdealLookat(rad, tcomp);
        
        const t = 1.0 - Math.pow(0.001, delta);
        ccomp.data.currentPosition.lerp(idealOffset, t);
        ccomp.data.currentLookat.lerp(idealLookat, t);

        ccomp.data.cam.position.copy(ccomp.data.currentPosition);
        ccomp.data.cam.lookAt(ccomp.data.currentLookat);

        // this.enabled = false;
    }
}