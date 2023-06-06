import * as THREE from "three"
import { OortParams, SystemObjectParams } from "../interfaces";
import Constants from "../helpers/Constants";
import { randSpherePointExcludes } from "../helpers/numericUtils";
import { World } from "./World";
import SystemObject from "./SystemObject";

const PNTCOUNT = 100_000
const RANGE = 6731900000000


export default class Oort extends SystemObject {
    public distanceEnd : number;

    constructor(data: SystemObjectParams) {
        super(data)
        this.distanceEnd = this.data.distanceToParent + RANGE
    }

    public init() {
        const range = (this.distanceEnd - this.data.distanceToParent) / Constants.DISTANCE_SCALE
        const distanceEnd = this.distanceEnd / Constants.DISTANCE_SCALE

        const vertexs = []
        for (let i = 0; i < PNTCOUNT; i++) {
            const [x, y, z] = randSpherePointExcludes(distanceEnd, distanceEnd + range)
            vertexs.push(x, y, z)
        }

        (this.object.masterGrp as THREE.Points).geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertexs, 3))
    }

    public update(_world: World) {
        // const d = world.cam.active.position.distanceTo(this._parent ? this._parent.masterGrp.position : new THREE.Vector3(0,0,0))
        // const d2 = this.distanceStart / Constants.DISTANCE_SCALE

        // const v = d > d2 / 2
        // if (v != this.enable) this.enable = v
    }
}