import * as THREE from "three"
import { Planet } from "./Planet"
import { World } from "./World"
import { Sun } from "./Sun";
import { CelestialObject } from "./Celestial";
import Oort from "./Oort";

interface Params {
    suns: Sun[];
    planets: Planet[];
    oort: Oort;
    name: string;
    isSingleSun: boolean;
}

export class System {
    public name: string;

    public group: THREE.Group;
    public planets: Planet[];
    public suns: Sun[];
    public oort: Oort;

    public isSingleSun: boolean;
    public radius: number;

    constructor(data: Params) {
        this.suns = data.suns
        this.planets = data.planets
        this.oort = data.oort

        this.group = new THREE.Group()
        this.allCelestialObjects.forEach(obj => this.group.add(obj.topGrp))
        this.group.add(this.oort.points)

        this.name = data.name
        this.isSingleSun = data.isSingleSun
        this.radius = this.getRadius()

        // this.allCelestialObjects.forEach(obj => obj.visible = false)
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
        this.oort.init()
        this.radius = this.getRadius()
    }

    initWorld(world: World) {
        this.init();
        world.scene.add(this.group)
    }

    update(world: World) {
        (this.suns as any).concat(this.planets).forEach((obj: Sun | Planet) => {
            obj.update(world)
        })

        this.oort.update(world)
    }
}