import * as THREE from "three"
import { CelestialObject } from "./Celestial";
import Constants from "../helpers/Constants";
import { World } from "./World";
import { PlanetParams, CelestialParams } from "../interfaces";


let outWorldPosition = new THREE.Vector3();
const virtual_d = .1;

export class Planet extends CelestialObject {
    constructor(data: CelestialParams & PlanetParams) {
        super(data);
    }

    public update(world: World) {
        // Atmo direction
        const vec = (this.atmo?.material as THREE.ShaderMaterial).uniforms.viewVector.value
        this.atmo?.getWorldPosition(outWorldPosition)
        vec.subVectors(world.camera.position.clone(), outWorldPosition);
        
        // Axis Rotation
        let val = (world.delta * this.angularRotVel) * Constants.ROT_SCALE;
        this.meshGrp.rotation.y += val;

        // Orbital Rotation
        val = (world.delta * this.angularOrbVel) * Constants.ORB_SCALE;
        this.topGrp.rotation.y += val;

        // // Sprite scaling
        // var dist = this.sprite.position.distanceTo(world.camera.position)
        // this.sprite.scale.addScalar(1 / (dist / 200));
        
        // var scale = this.sprite.position.distanceTo(world.camera.position) / virtual_d;
        // scale = Math.min(100, Math.max(1000, scale));
        // this.sprite.scale.setScalar(scale);

        // const maxScale = 100000
        // const minScale = 100

        // const scaleFactor = maxScale - minScale  // (1 - 0.2)
        // const dist = this.sprite.position.distanceTo(world.camera.position)
        // const minDist = 10;

        // if(dist < minDist) //minDist is the min distance needed to not be scaling
        // {
        //     const scale = (dist/minDist) * scaleFactor; 
        //     this.sprite.scale.setScalar(scale)
        // }
    }
}