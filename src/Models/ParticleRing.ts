import * as THREE from "three"
import { World } from "./World";
import Constants from "../helpers/Constants";
import SystemObject from "./SystemObject";
import { SystemObjectParams } from "../interfaces";



export class ParticleRing extends SystemObject {

    constructor(data: SystemObjectParams) {
        super(data)
    }

    public init(_parent?: SystemObject): void {}

    public update(world: World) {
        // Distance calculation
        world.cam.active.getWorldPosition(Constants.__OUT_CAM_POS)
        this.object.parentGrp.getWorldPosition(Constants.__OUT_WORLD__POS)
        const dist = Constants.__OUT_CAM_POS.distanceTo(Constants.__OUT_WORLD__POS);
        ((this.object.masterGrp as THREE.Mesh).material as THREE.ShaderMaterial).uniforms.dist.value = dist;

        // Orbit Rot
        const axisVal = (world.delta * this.data.angularOrbVel) * Constants.ORB_SCALE;
        this.object.masterGrp.rotation.y -= axisVal * 1.3793
    }
}