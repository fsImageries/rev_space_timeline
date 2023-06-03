import * as THREE from "three"
import { World } from "./World";
import Constants from "../helpers/Constants";




export class satelliteParticles {
    private _topGrp: THREE.Points;
    private _orbitalPeriod: number;
    
    public angularOrbVel: number;

    constructor(points: THREE.Points, orbitalPeriod: number) {
        this._topGrp = points
        this._orbitalPeriod = orbitalPeriod
        
        const secsPerRotation = this.orbitalPeriod * 60 * 60;
        this.angularOrbVel = (2 * Math.PI) / secsPerRotation;
    }

    public get topGrp(): THREE.Points {
        return this._topGrp;
    }

    public get orbitalPeriod(): number {
        return this._orbitalPeriod;
    }

    public update(world:World) {
        // Distance calculation
        world.cam.active.getWorldPosition(Constants.__OUT_CAM_POS)
        this.topGrp.getWorldPosition(Constants.__OUT_WORLD__POS)
        const dist = Constants.__OUT_CAM_POS.distanceTo(Constants.__OUT_WORLD__POS);
        (this.topGrp.material as THREE.ShaderMaterial).uniforms.dist.value = dist;

        // Orbit Rot
        const axisVal = (world.delta * this.angularOrbVel) * Constants.ORB_SCALE;
        this.topGrp.rotation.y -= axisVal * 1.3793
    }
}