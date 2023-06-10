import { Object3D } from "three";
import { Internal3DObjectParams } from "../interfaces";

export default class Internal3DObject {
  public parentGrp: Object3D;
  public masterGrp: Object3D;
  public meshGrp: Object3D;

  public atmo: Object3D;
  public mesh: Object3D;
  public orbit: Object3D;

  public markerSprite: Object3D;

  constructor(data: Internal3DObjectParams) {
    this.parentGrp = data.parentGrp;
    this.masterGrp = data.masterGrp;
    this.meshGrp = data.meshGrp;

    this.atmo = data.atmo;
    this.mesh = data.mesh;
    this.orbit = data.orbit;

    this.markerSprite = data.markerSprite;
  }
}
