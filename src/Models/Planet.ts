import * as THREE from "three"
import { CelestialObject } from "./Celestial";
import Constants from "../helpers/Constants";
import { World } from "./World";
import { PlanetParams, CelestialParams } from "../interfaces";


let outWorldPosition = new THREE.Vector3();

export class Planet extends CelestialObject {
    constructor(data: CelestialParams & PlanetParams) {
        super(data);
    }

    public update(world: World) {
        const vec = (this.atmo?.material as THREE.ShaderMaterial).uniforms.viewVector.value
        this.atmo?.getWorldPosition(outWorldPosition)
        vec.subVectors(world.camera.position.clone(), outWorldPosition);
        
        let val = (world.delta * this.angularRotVel) * Constants.ROT_SCALE;
        this.meshGrp.rotation.y += val;

        val = (world.delta * this.angularOrbVel) * Constants.ORB_SCALE;
        this.topGrp.rotation.y += val;
    }
}