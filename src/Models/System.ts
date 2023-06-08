import { Group } from "three";
import Constants from "../helpers/Constants";
import { SystemParams } from "../interfaces";
import Oort from "./Oort";
import { Planet } from "./Planet";
import { Sun } from "./Sun";
import SystemObject from "./SystemObject";
import { World } from "./World";

export class System {
  public name: string;

  public topGrp: Group;
  public tree: SystemObject[];
  private _flat: SystemObject[];

  public isSingleSun: boolean;
  public radius: number;

  constructor(data: SystemParams) {
    this.tree = data.tree;

    this.name = data.name;
    this.isSingleSun = data.isSingleSun;

    this.topGrp = new Group();
    this.tree.forEach((obj) => this.topGrp.add(obj.object.parentGrp));
    this._flat = data.flat;
    this.radius = this.getRadius();
    console.log(this.radius);
  }

  // public get allCelestialObjects(): CelestialObject[] {
  //     return this._allCelestialObjects;
  // }

  private getRadius() {
    return this.mainSequenceObjects().reduce((acc, cur) => {
      const n = acc.dist > cur.dist ? acc : cur;
      return n;
    }).dist;
  }

  public getById(id: string): Sun | Planet | undefined {
    return this._flat.reduce((acc, cur) => (acc.data.id === id ? acc : cur));
  }

  public get flat() { return this._flat }

  public oortCloud() {
    return this._flat.reduce((acc, cur) => (acc.data.type === "oortcloud" ? acc : cur));
  }

  public suns() {
    return this._flat.filter((obj) => obj.data.type.includes("sun"));
  }

  public mainSequenceObjects() {
    return this._flat.filter(
      (obj) => obj.data.type.includes("sun") || obj.data.type.includes("planet") || obj.data.type.includes("moon")
    );
  }

  public init() {
    this.radius = this.getRadius();
    const lightRadius = (this.oortCloud() as Oort).distanceEnd / Constants.DISTANCE_SCALE;
    (this.suns() as Sun[]).forEach((sun) => (sun.lightRadius = lightRadius));
    this.tree.forEach((obj) => obj.init());
  }

  public initWorld(world: World) {
    this.init();
    world.scene.add(this.topGrp);
  }

  public update(world: World) {
    this.tree.forEach((obj) => obj.update(world));
  }
}
