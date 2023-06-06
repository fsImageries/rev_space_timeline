import Constants from "../helpers/Constants";
import { SystemObjectParams } from "../interfaces";
import CelestialBase from "./CelestialBase"
import Internal3DObject from "./Internal3DObject";
import { Satellites } from "./Satellites";
import { World } from "./World";

export default abstract class SystemObject {
    public data: CelestialBase;
    public object: Internal3DObject;
    public satellites?: Satellites;

    constructor(data: SystemObjectParams) {
        this.data = data.data;
        this.object = data.object;
        this.satellites = data.satellites;
    }

    abstract init(parent?:SystemObject): void;
    abstract update(world:World, parent?:SystemObject): void;

    public get dist(): number {
        return this.data.distanceToParent ? this.data.distanceToParent / Constants.DISTANCE_SCALE : undefined;
    }
}