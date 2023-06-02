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

    public topGrp: THREE.Group;
    public planets: Planet[];
    public suns: Sun[];
    public oort: Oort;

    public isSingleSun: boolean;
    public radius: number;

    constructor(data: Params) {
        this.suns = data.suns
        this.planets = data.planets
        this.oort = data.oort

        // Add all meshes to topGrp
        this.topGrp = new THREE.Group()
        this.topGrp.add(this.oort.points)
        this.allCelestialObjects.forEach(obj => {
            this.topGrp.add(obj.topGrp)
            // if (obj instanceof Planet && obj.children) {
            //     obj.children.forEach(child=>console.log(child.topGrp.position))
            //     obj.children.forEach(child => this.topGrp.add(child.topGrp))
            // }
        })

        this.name = data.name
        this.isSingleSun = data.isSingleSun
        this.radius = this.getRadius()

        // this.allCelestialObjects.forEach(obj => obj.visible = false)
    }
    
    public get allCelestialObjects(): CelestialObject[] {
        return this.suns.concat(this.planets);
    }

    private getRadius() {
        return this.suns.concat(this.planets).reduce((acc, cur) => {
            const n = acc.dist > cur.dist ? acc : cur
            return n
        }).dist
    }

    public getById(id: string): Sun | Planet | undefined {
        const arr = (this.suns).concat(this.planets).filter(obj => obj.id === id)
        return !arr ? undefined : arr[0]
    }

    public init() {
        this.planets.forEach((obj) => obj.init())
        this.oort.init()
        this.radius = this.getRadius()
    }

    public initWorld(world: World) {
        this.init();
        world.scene.add(this.topGrp)
    }

    public update(world: World) {
        (this.suns as any).concat(this.planets).forEach((obj: Sun | Planet) => {
            obj.update(world)
        })

        this.oort.update(world)
    }
}