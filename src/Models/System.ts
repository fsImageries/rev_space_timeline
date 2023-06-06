import * as THREE from "three"
import { Planet } from "./Planet"
import { World } from "./World"
import { Sun } from "./Sun";
import { CelestialObject } from "./Celestial";
import Oort from "./Oort";
import Constants from "../helpers/Constants";
import SystemObject from "./SystemObject";
import { SystemParams } from "../interfaces";


export class System {
    public name: string;

    public topGrp: THREE.Group;
    public objects: SystemObject[];
    public oort: Oort;

    public isSingleSun: boolean;
    public radius: number;

    constructor(data: SystemParams) {
        this.objects = data.objects
        this.oort = data.oort

        this.name = data.name
        this.isSingleSun = data.isSingleSun
        // this.radius = this.getRadius()
    }

    // public get allCelestialObjects(): CelestialObject[] {
    //     return this._allCelestialObjects;
    // }

    // private getRadius() {
    //     return this.allCelestialObjects.reduce((acc, cur) => {
    //         const n = acc.dist > cur.dist ? acc : cur
    //         return n
    //     }).dist
    // }

    // public traverse(f:any) {
    //     let ret;

    //     const traversePlanet = (planet:Planet, f:any) => {
    //         planet.satellites?.children.forEach(child => {
    //             ret = f(child)
    //             if (ret) return
    //             if (child instanceof Planet) traversePlanet(child, f)
    //         })
    //     }
    //     this.allCelestialObjects.forEach(cel => {
    //         ret = f(cel)
    //         if (ret) return
    //         if (cel instanceof Planet) {
    //             traversePlanet(cel, f)
    //         }
    //     })
    // }

    // public getById(id: string): (Sun | Planet | undefined) {
    //     let found;
    //     this.traverse((obj:any) => {
    //         if (obj.id && obj.id === id) {
    //             found = obj
    //             return true
    //         }
    //         return false
    //     })
    //     return found
    // }

    public init() {
        // this.radius = this.getRadius();
        this.objects.forEach(obj => obj.init())
        this.oort.init()
    }

    public initWorld(world: World) {
        this.init();
        world.scene.add(this.topGrp)
    }

    public update(world: World) {
        this.objects.forEach(obj=>obj.update(world))
        this.oort.update(world)
    }
}