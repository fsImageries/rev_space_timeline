import * as THREE from "three"
import { CelestialObject } from "./Celestial";
import Constants from "../helpers/Constants";
import { World } from "./World";
import { PlanetParams, CelestialParams, SystemObjectParams } from "../interfaces";
import CelestialBase from "./CelestialBase";
import SystemObject from "./SystemObject";


let outWorldPos = new THREE.Vector3();

export class Planet extends SystemObject {

    constructor(data: SystemObjectParams) {
        super(data);
    }

    public init(parent?: SystemObject) {
        const base = parent ? parent.object.masterGrp.position.clone() : new THREE.Vector3()
        // const idlePos = new THREE.Vector3(0, 0, -this.dist + this.data.radius * 6)
        // const idlePosAdd = new THREE.Vector3(0, 0, this.data.radius * 6)

        base.z = -this.dist

        this.object.masterGrp.position.set(base.x, base.y, base.z)
        // this.object.masterGrp.userData["idlePosition"] = idlePos;
        // this.object.masterGrp.userData["idleAdd"] = idlePosAdd;
        // this.object.masterGrp.userData["dist"] = this.dist;
        this.object.masterGrp.userData["id"] = this.data.id;
        this.object.masterGrp.traverse(child => child.userData["id"] = this.data.id)

        this.object.orbit.scale.multiplyScalar(this.dist)
        this.object.orbit.position.set(
            -base.x,
            -base.y,
            -base.z
        )

        if (this.object.infoSprite) {
            const side = this.object.orbit.scale.x > 0 ? -1 : 1
            const scale = this.data.drawRadius / 10
            this.object.infoSprite.scale.setScalar(scale)
            this.object.infoSprite.position.copy(base).x += (this.data.drawRadius + scale) * side
        }

        this.initSatellites(parent)

        this.object.meshGrp.updateMatrixWorld()
        this.object.masterGrp.updateMatrixWorld()
        this.object.parentGrp.updateMatrixWorld()
    }

    public update(world: World, parent?: SystemObject) {
        // // Update topGrp
        // if (this.parent) {
        //     this.parent.masterGrp.getWorldPosition(outWorldPos)
        //     this.topGrp.position.copy(outWorldPos)
        // }

        // Atmo direction
        // We assume that a planet has a atmo/mesh object
        const vec = ((this.object.atmo as THREE.Mesh).material as THREE.ShaderMaterial).uniforms.viewVector.value
        this.object.atmo?.getWorldPosition(Constants.__OUT_WORLD__POS)
        vec.subVectors(world.cam.active.position.clone(), Constants.__OUT_WORLD__POS);

        // Axis Rotation
        const axisVal = (world.delta * this.data.angularRotVel) * Constants.ROT_SCALE;
        this.object.meshGrp.rotation.y -= axisVal;


        if (Constants.CELESTIAL_ORB || this.data.type.includes("moon")) {
            // Orbital Rotation
            // Needs deactivation if main planets should not move
            const orbVal = (world.delta * this.data.angularOrbVel) * Constants.ORB_SCALE;
            this.object.parentGrp.rotation.y += orbVal;
        }
        this.object.masterGrp.getWorldPosition(Constants.__OUT_WORLD__POS)
        world.cam.active.getWorldPosition(Constants.__OUT_CAM_POS)
        const dist = Constants.__OUT_WORLD__POS.distanceTo(Constants.__OUT_CAM_POS)

        if (!this.data.type.includes("moon")) {
            // Sprite scaling
            this.object.markerSprite.scale.setScalar(dist / 50)
            // Distance visibility
            this.object.markerSprite.visible = dist > 10000 ? true : false
        }
        this.object.meshGrp.visible = dist < 20000 ? true : false

        // Satellites Updates
        this.updateSatellites(world, parent)

    }
}