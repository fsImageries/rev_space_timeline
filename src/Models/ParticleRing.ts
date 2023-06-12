import * as THREE from "three";
import SystemObject from "../Classes/SystemObject";
import { World } from "../Classes/World";
import Constants from "../helpers/Constants";
import { SystemObjectParams } from "../interfaces";

export class ParticleRing extends SystemObject {
  // private _count: number;
  // private _height: number;

  constructor(data: SystemObjectParams, _count: number, _height: number) {
    super(data);
    // this._count = count
    // this._height = height
  }

  public init(parent: SystemObject): void {
    // TODO really don't like this, but need help nonetheless
    // const radius = this.data.distanceToParent / Constants.DISTANCE_SCALE;
    // let vertexs = [];
    // const base = 360 / this._count;
    // for (let i = 0; i < this._count; i++) {
    //   const n = base * i;
    //   // const [x, y, z] = [Math.sin(n * (Math.PI / 180)), 0, Math.cos(n * (Math.PI / 180))];
    //   const [x, y, z] = [Math.sin(n * (Math.PI / 180)) * radius, 0, Math.cos(n * (Math.PI / 180)) * radius];
    //   vertexs.push(x, y, z);
    // }

    // vertexs = relaxRingPoints(vertexs, this._height);
    // (this.object.masterGrp as THREE.Points).geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertexs, 3));

    this.initSatellites(parent);
  }

  public update(world: World, parent: SystemObject) {
    // Distance calculation
    world.cam.active.getWorldPosition(Constants.CAM_POS);
    this.object.parentGrp.getWorldPosition(Constants.WORLD_POS);
    const dist = Constants.CAM_POS.distanceTo(Constants.WORLD_POS);
    const m = ((this.object.masterGrp as THREE.Mesh).material as THREE.ShaderMaterial)
    if ("uniforms" in m && "dist" in m.uniforms) m.uniforms.dist.value = dist;

    // Orbit Rot
    const axisVal = world.delta * this.data.angularOrbVel * Constants.ORB_SCALE;
    this.object.masterGrp.rotation.y -= axisVal * 1.3793;

    this.updateSatellites(world, parent);
  }
}
