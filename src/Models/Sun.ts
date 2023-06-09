import { Mesh, PointLight, ShaderMaterial } from "three";
import { SystemObjectParams } from "../interfaces";
import SystemObject from "../Classes/SystemObject";
import { World } from "../Classes/World";

export class Sun extends SystemObject {
  private light: PointLight;
  public lightRadius: number;

  constructor(data: SystemObjectParams) {
    super(data);

    // TODO implement coloring on yaml level
    this.lightRadius = 1;
    this.light = new PointLight("#ffffff", 1, this.lightRadius);
    this.light.castShadow = true;
    this.light.shadow.radius = 4;
    this.light.shadow.camera.near = 0.5;
    this.light.shadow.camera.far = 100000;
    this.light.shadow.mapSize.width = 2048;
    this.light.shadow.mapSize.height = 2048;
    this.object.masterGrp.add(this.light);
  }

  public init() {
    this.object.masterGrp.traverse((child) => (child.userData["id"] = this.data.id));
    this.light.distance = this.lightRadius;
    this.initSatellites(this);
  }

  public update(world: World) {
    ((this.object.mesh as Mesh).material as ShaderMaterial).uniforms.time.value += 0.05;
    this.updateSatellites(world, this);
  }
}
