import * as THREE from "three";
import { World } from "./World";
import Constants from "../helpers/Constants";
import SystemObject from "./SystemObject";
import { SystemObjectParams } from "../interfaces";

export class ParticleRing extends SystemObject {
  constructor(data: SystemObjectParams) {
    super(data);
  }

  public init(parent: SystemObject): void {
    this.initSatellites(parent);
  }

  public update(world: World, parent: SystemObject) {
    // Distance calculation
    world.cam.active.getWorldPosition(Constants.CAM_POS);
    this.object.parentGrp.getWorldPosition(Constants.WORLD_POS);
    const dist = Constants.CAM_POS.distanceTo(Constants.WORLD_POS);
    ((this.object.masterGrp as THREE.Mesh).material as THREE.ShaderMaterial).uniforms.dist.value = dist;

    // Orbit Rot
    const axisVal = world.delta * this.data.angularOrbVel * Constants.ORB_SCALE;
    this.object.masterGrp.rotation.y -= axisVal * 1.3793;

    this.updateSatellites(world, parent);
  }
}
