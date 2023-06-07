import { Mesh, ShaderMaterial, Vector3 } from "three";
import Constants from "../helpers/Constants";
import { SystemObjectParams } from "../interfaces";
import SystemObject from "./SystemObject";
import { World } from "./World";


export class Planet extends SystemObject {

    constructor(data: SystemObjectParams) {
        super(data);
    }

    public init(parent?: SystemObject) {
        const base = parent ? parent.object.masterGrp.position.clone() : new Vector3()
        base.z = -this.dist

        this.object.masterGrp.position.set(base.x, base.y, base.z)
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
        const vec = ((this.object.atmo as Mesh).material as ShaderMaterial).uniforms.viewVector.value
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