import { Planet } from "./Planet"
import { World } from "./World"
import { Sun } from "./Sun";
import planetFactory from "../Factories/PlanetFactory"
import sunFactory from "../Factories/SunFactory"
import { SystemJson } from "../interfaces";
import { CelestialObject } from "./Celestial";

export class System {
    public name: string;
    public suns: Sun[];
    public planets: Planet[];

    public isSingleSun: boolean;
    public radius: number;

    constructor(data: SystemJson) {
        // this.suns = []
        this.suns = data.suns.map((d) => sunFactory(d))
        this.planets = data.planets.map((d) => planetFactory(d))
        this.name = data.name
        this.isSingleSun = data.isSingleSun
        this.radius = this.getRadius()
    }

    private getRadius() {
        return this.suns.concat(this.planets).reduce((acc, cur) => {
            const n = acc.dist > cur.dist ? acc : cur
            return n
        }).dist
    }

    public get allCelestialObjects(): CelestialObject[] {
        return this.suns.concat(this.planets);
    }

    public getById(id: string): Sun | Planet | undefined {
        const arr = (this.suns).concat(this.planets).filter(obj => obj.id === id)
        return !arr ? undefined : arr[0]
    }

    init() {
        this.planets.forEach((obj) => obj.init())
        this.radius = this.getRadius()
    }

    initWorld(world: World) {
        this.init();
        (this.suns as any).concat(this.planets).forEach((obj: Sun | Planet) => {
            if (obj.topGrp) {
                world.scene.add(obj.topGrp)
            }
        })
    }

    update(world: World) {
        (this.suns as any).concat(this.planets).forEach((obj: Sun | Planet) => {
            obj.update(world)
        })
    }
}