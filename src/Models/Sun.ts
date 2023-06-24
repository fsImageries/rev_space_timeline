import { Mesh, PointLight, ShaderMaterial } from "three";
import { SystemObjectParams } from "../interfaces";
import SystemObject from "../Classes/SystemObject";
import { World } from "../Classes/World";

export class Sun extends SystemObject {
  private light: PointLight;
  public lightRadius: number;
  private disableLight: boolean;

  constructor(data: SystemObjectParams, disableLight?: boolean) {
    super(data);

    // TODO implement coloring on yaml level
    this.disableLight = disableLight;
    if (!disableLight) {
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
  }

  public init() {
    this.object.masterGrp.traverse((child) => (child.userData["id"] = this.data.id));
    if (!this.disableLight) this.light.distance = this.lightRadius;
    this.initSatellites(this);
  }

  public update(world: World) {
    if ("uniforms" in ((this.object.mesh as Mesh).material as ShaderMaterial))
      ((this.object.mesh as Mesh).material as ShaderMaterial).uniforms.time.value += 0.001; // 0.05 TODO build property per object
    this.updateSatellites(world, this);
  }
}
