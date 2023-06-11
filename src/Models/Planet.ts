import { Mesh, ShaderMaterial, Vector3 } from "three";
import Constants from "../helpers/Constants";
import { SystemObjectParams } from "../interfaces";
import SystemObject from "../Classes/SystemObject";
import { World } from "../Classes/World";

export class Planet extends SystemObject {
  constructor(data: SystemObjectParams) {
    super(data);
  }

  public init(parent?: SystemObject) {
    const base = parent ? parent.object.masterGrp.position.clone() : new Vector3();
    base.z = -this.dist;

    this.object.masterGrp.position.set(base.x, base.y, base.z);
    this.object.masterGrp.userData["id"] = this.data.id;
    this.object.masterGrp.traverse((child) => (child.userData["id"] = this.data.id));

    this.object.orbit.scale.multiplyScalar(this.dist);
    this.object.orbit.position.set(-base.x, -base.y, -base.z);

    this.initSatellites(parent);

    this.object.meshGrp.updateMatrixWorld();
    this.object.masterGrp.updateMatrixWorld();
    this.object.parentGrp.updateMatrixWorld();
  }

  public update(world: World, parent?: SystemObject) {
    // // Update topGrp
    // if (this.parent) {
    //     this.parent.masterGrp.getWorldPosition(outWorldPos)
    //     this.topGrp.position.copy(outWorldPos)
    // }

    // Atmo direction
    // We assume that a planet has a atmo/mesh object
    const vec = ((this.object.atmo as Mesh).material as ShaderMaterial).uniforms.viewVector.value;
    this.object.atmo?.getWorldPosition(Constants.WORLD_POS);
    vec.subVectors(world.cam.active.position.clone(), Constants.WORLD_POS);

    // Axis Rotation
    const axisVal = world.delta * this.data.angularRotVel * Constants.ROT_SCALE;
    this.object.meshGrp.rotation.y -= axisVal;

    if (Constants.CELESTIAL_ORB || Constants.MAN_CELESTIAL_ORB || this.data.type.includes("moon")) {
      // Orbital Rotation
      // Needs deactivation if main planets should not move
      const orbVal = world.delta * this.data.angularOrbVel * Constants.ORB_SCALE;
      this.object.parentGrp.rotation.y += orbVal;
    }
    this.object.masterGrp.getWorldPosition(Constants.WORLD_POS);
    world.cam.active.getWorldPosition(Constants.CAM_POS);
    const dist = Constants.WORLD_POS.distanceTo(Constants.CAM_POS);
    const thresh = 100_000_000_00 / Constants.DISTANCE_SCALE;

    if (!this.data.type.includes("moon")) {
      // Sprite scaling
      this.object.markerSprite.scale.setScalar(dist / 50);
      // Distance visibility
      this.object.markerSprite.visible = dist > thresh;
    }
    this.object.meshGrp.visible = dist < thresh * 2;

    // Satellites Updates
    this.updateSatellites(world, parent);
  }
}
