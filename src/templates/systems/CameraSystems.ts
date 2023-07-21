import { Camera, Raycaster } from "three";
import { Store } from "../../ecs/Store";
import { System } from "../../ecs/System";
import { World } from "../../ecs/World";
import { operand } from "../../ecs/utils";
import GLOBALS from "../../helpers/Constants";
import { RadiusComponent } from "../components/CelestialComponents";
import {
    BaseDataComponent,
    CameraComponent, ParticleRingTypeComponent
} from "../components/CommonComponents";
import {
    CosmicMapSunTextComponent,
    MeshComponent,
    TransformGroupComponent
} from "../components/MeshComponents";
import { Entity } from "../../ecs/Entity";


export class CameraFocusSystem extends System {
    static queries = [
        [operand("exist", TransformGroupComponent), operand("exist", BaseDataComponent), operand("exist", RadiusComponent)],
        [operand("exist", CameraComponent)]
    ];

    constructor(world: World) {
        super(world);
        this.enabled = false;
    }

    execute(): void {
        const tar = Store.getInstance().store.focusTarget.toLowerCase();
        if (!this.queries || !tar) return;

        const ccomp = this.queries[1].entities[0].getComponent(CameraComponent);

        if (Store.getInstance().state.camPos) {
            ccomp.data.active.position.copy(Store.getInstance().state.camPos);
        }

        for (const entity of this.queries[0].entities) {
            if (tar === entity.getComponent(BaseDataComponent).data.name.toLowerCase()) {
                entity.getComponent(TransformGroupComponent).data.group.getWorldPosition(GLOBALS.WORLD_POS);
                const rad = entity.getComponent(RadiusComponent).data.drawRadius;

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
            }

            if (intersects.length > 0) {
                react2intersect(entity, cam, this.world, this.forceSwtich);
                this.forceSwtich = false;
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

    if (rcomp && world.lvlManager.currentLvl === world.lvlManager.levelsNames[0]) {
        tcomp.data.group.getWorldPosition(GLOBALS.WORLD_POS);
        const dist = cam.position.distanceTo(GLOBALS.WORLD_POS);
        if (dist < rcomp.data.drawRadius * 20) {
            world.lvlManager.openLevel(base.data.name);
            return;
        }
    }

    Store.getInstance().store.focusTarget = base.data.name;
    const sys = world.sysManager.getSystem(CameraFocusSystem);
    if (!sys) return;
    sys.enabled = true;
}