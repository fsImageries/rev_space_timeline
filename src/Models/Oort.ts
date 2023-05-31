import * as THREE from "three"
import { OortParams } from "../interfaces";
import Constants from "../helpers/Constants";
import { CelestialObject } from "./Celestial";
import { randSpherePoint, randSpherePointExcludes, randomizeMatrix } from "../helpers/numericUtils";
import { World } from "./World";

// avg distance between objects
const DIST = 50_000_000 / Constants.DISTANCE_SCALE
const COUNT = 50_000
const PNTCOUNT = 100_000


export default class Oort {
    private _distanceStart: number;
    private _distanceEnd: number;
    private _radius: number;
    private _points: THREE.Points;
    private _parent?: CelestialObject;

    constructor(data: OortParams) {
        this._distanceStart = data.distanceToParent
        this._distanceEnd = data.distanceEnd
        this._radius = data.radius
        this._parent = data.parent

        const material = new THREE.PointsMaterial({
            color: "white",
            opacity: 0.2,
            transparent: true
        })
        const geometry = new THREE.BufferGeometry()
        this._points = new THREE.Points(geometry,material)
    }

    public get distanceStart(): number {
        return this._distanceStart;
    }

    public get distanceEnd(): number {
        return this._distanceEnd;
    }

    public get points(): THREE.Points {
        return this._points;
    }

    init() {
        const range= (this._distanceEnd - this._distanceStart) / Constants.DISTANCE_SCALE
        // const distanceStart= this._distanceStart / Constants.DISTANCE_SCALE
        const distanceEnd= this._distanceEnd / Constants.DISTANCE_SCALE

        const vertexs = []
        for(let i = 0;i<PNTCOUNT;i++){
            const [x,y,z] = randSpherePointExcludes(distanceEnd, distanceEnd + range)
            vertexs.push(x,y,z)
        }
        
        this._points.geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertexs,3))
    }

    update(world:World) {
        // const d = world.cam.active.position.distanceTo(this._parent ? this._parent.masterGrp.position : new THREE.Vector3(0,0,0))
        // const d2 = this.distanceStart / Constants.DISTANCE_SCALE
        
        // const v = d > d2 / 2
        // if (v != this.enable) this.enable = v
    }
}