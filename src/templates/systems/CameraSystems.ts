import { Camera, Raycaster, Vector3 } from "three";
import { lerp } from "three/src/math/MathUtils";
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
    FollowCameraComponent,
    ParticleRingTypeComponent,
    SunTypeComponent
} from "../components/CommonComponents";
import {
    CosmicMapSunTextComponent,
    MeshComponent,
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
        [operand("exist", CameraComponent)],
        [operand("exist", FollowCameraComponent)]
    ];

    public forceSwtich = false;

    constructor(world: World) {
        super(world);
        this.enabled = false;
    }

    execute(): void {
        if (!this.queries) return;

        const cam = this.queries[1].entities[0].getComponent(CameraComponent).data.active;
        const fcam = this.queries[2].entities[0].getComponent(FollowCameraComponent).data.cam;
        const store = Store.getInstance()
        const raycaster = store.store.raycaster as Raycaster;
        raycaster.setFromCamera(Store.getInstance().store.raypointer, store.state.followCam ? fcam : cam);

        let closest: [number, Entity] | undefined = undefined;

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
                const dist = intersects[0].distance
                if (!closest || dist < closest[0]) {
                    closest = [dist, entity]
                }
            }
        }

        if (closest) {
            react2intersect(closest[1], cam, this.world, this.forceSwtich);
            this.forceSwtich = false;
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
    
    private calculateIdealLookat(tcomp?: TransformGroupComponent) {
        const idealLookat = new Vector3(0, 0, 0);
        if (!tcomp) return idealLookat
        idealLookat.applyQuaternion(tcomp.data.group.quaternion);
        idealLookat.add(GLOBALS.WORLD_POS);
        return idealLookat;
      }

    execute(delta:number): void {
        if (!this.queries) return;

        const ccomp = this.queries[0].entities[0].getComponent(FollowCameraComponent);

        const store = Store.getInstance();
        if (!ccomp.data.target) {
            const ftar = store.state.focusTarget
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
        tcomp.data.group.getWorldPosition(GLOBALS.WORLD_POS)

        const idealLookat = this.calculateIdealLookat(tcomp);
        const idealOffset = new Vector3(0, 0, -rad * 2);

        const t = 1.0 - Math.pow(0.001, delta);
        const pivot = ccomp.data.camPivot;

        if (store.store.rotateCamPivotDepth != 0) {
            idealOffset.z += store.store.rotateCamPivotDepth
        }
        
        if (store.store.rotateCamPivotY != 0) {
            const n = lerp(store.store.rotateCamPivotY, 0, 0.25 * t)
            pivot.rotateY(n)
            store.store.rotateCamPivotY = Math.abs(n) < 0.00000001 ? 0 : n
        }

        if (store.store.rotateCamPivotX != 0) {
            const n = lerp(store.store.rotateCamPivotX, 0, 0.25 * t)
            pivot.rotateX(n)
            store.store.rotateCamPivotX = Math.abs(n) < 0.00000001 ? 0 : n
        }

        pivot.position.copy(GLOBALS.WORLD_POS)
        
        // const t = 1.0 - Math.pow(0.001, delta);
        ccomp.data.currentPosition.lerp(idealOffset, t);
        ccomp.data.currentLookat.lerp(idealLookat, t);

        ccomp.data.cam.position.copy(ccomp.data.currentPosition);
        ccomp.data.cam.lookAt(ccomp.data.currentLookat);

        // ccomp.data.camPivot.rotateX(store.state.rotateCamPivot)
        // console.log(store.store.rotateCamPivot)
        // ccomp.data.camPivot.rotation.y += store.state.rotateCamPivot

        // this.enabled = false;
    }
}