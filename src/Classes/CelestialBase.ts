import Constants from "../helpers/Constants";
import { CelestialBaseParams } from "../interfaces";

export default class CelestialBase {
  public name: string;
  public type: string;
  public tilt: number;
  public parent?: string;
  public radius: number;
  public orbitalPeriod: number;
  public rotationPeriod: number;
  public distanceToParent: number;

  public angularRotVel: number;
  public angularOrbVel: number;

  public drawRadius: number;
  public texts?: string[];
  public id: string;

  constructor(data: CelestialBaseParams) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.texts = data.texts;
    this.radius = data.radius || 1;
    this.tilt = data.tilt || 0;
    this.parent = data.parent;
    this.orbitalPeriod = data.orbitalPeriod || 1;
    this.rotationPeriod = data.rotationPeriod || 1;
    this.distanceToParent = data.distanceToParent || 0;

    this.drawRadius = data.drawRadius;

    let secsPerRotation = this.rotationPeriod * 60 * 60;
    this.angularRotVel = (2 * Math.PI) / secsPerRotation;

    secsPerRotation = this.orbitalPeriod * 60 * 60;
    this.angularOrbVel = (2 * Math.PI) / secsPerRotation;
  }

  public invertAngularRotVel() {
    this.angularRotVel *= -1;
  }

  public invertAngularOrbVel() {
    this.angularOrbVel *= -1;
  }

  public get dist(): number | null {
    return this.distanceToParent ? this.distanceToParent / Constants.DISTANCE_SCALE : null;
  }
}
