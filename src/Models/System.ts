import { Planet } from "./Planet"
import { World } from "./World"
import { Sun } from "./Sun";
import planetFactory from "../Factories/PlanetFactory"
import sunFactory from "../Factories/SunFactory"
import { SystemJson } from "../interfaces";

export class System {
    public name: string;
    public suns: Sun[];
    public planets: Planet[];

    private _isSingleSun: boolean;

    constructor(data: SystemJson) {
        this.name = data.name
        this._isSingleSun = data.isSingleSun
        this.suns = data.suns.map((d) => sunFactory(d))
        this.planets = data.planets.map((d) => planetFactory(d))
    }

    initWorld(world: World) {
        (this.suns as any).concat(this.planets).forEach((obj:Sun | Planet) => {
            if (obj.topGrp) {
                world.scene.add(obj.topGrp)
            }
        })
    }

    update(world: World) {
        (this.suns as any).concat(this.planets).forEach((obj:Sun | Planet) => {
            obj.update(world)
        })
    }
}