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

    public init() {
        const base = this.parent ? this.parent.masterGrp.position.clone() : new THREE.Vector3()
        const idlePos = new THREE.Vector3(0, 0, -this.dist + this.radius * 6)
        const idlePosAdd = new THREE.Vector3(0, 0, this.radius * 6)
        base.z = (-this.dist)
    
        this.masterGrp.position.set(base.x, base.y, base.z)
        this.masterGrp.userData["idlePosition"] = idlePos;
        this.masterGrp.userData["idleAdd"] = idlePosAdd;
        this.masterGrp.userData["dist"] = this.dist;
    
        if (this.orbit) {
            this.orbit.scale.setScalar(this.dist)
            this.orbit.position.set(
                0 - base.x,
                0 - base.y,
                0 - base.z
            )
        }
    
        if (this.texts) {
            const l = this.texts.length
            this.texts.forEach((txt) => {
                const i = txt.userData["idx"]
                txt.position.x = base.x + (this.radius) + (i / l)
                txt.position.y = (base.y - 3) + 15 * (i / l)
                txt.position.z = (base.z + this.dist - 5) + 3 * i
            })
        }

        this.meshGrp.updateMatrixWorld()
        this.masterGrp.updateMatrixWorld()
        this.topGrp.updateMatrixWorld()
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

        // Sprite scaling
        world.camera.getWorldPosition(outWorldPosition)
        const c = outWorldPosition.clone()
        this.masterGrp.getWorldPosition(outWorldPosition)
        const dist = outWorldPosition.distanceTo(c)
        this.sprite.scale.setScalar(dist/50)

        // Distance visibility
        this.sprite.visible = dist > 5000 ? true: false
        this.meshGrp.visible = dist < 10000 ? true: false
        this.texts.map(t => t.visible = dist < 10000 ? true: false)

    }
}