import * as THREE from "three"
import { OortParams } from "../interfaces";
import Constants from "../helpers/Constants";
import { CelestialObject } from "./Celestial";
import { randomizeMatrix } from "../helpers/numericUtils";

// avg distance between objects
const DIST = 50_000_000 / Constants.DISTANCE_SCALE
const COUNT = 50000


export default class Oort {
    private _distanceStart: number;
    private _distanceEnd: number;
    private _radius: number;
    private _meshes: THREE.InstancedMesh[];
    private _parent?: CelestialObject;

    constructor(data: OortParams) {
        this._distanceStart = data.distanceToParent
        this._distanceEnd = data.distanceEnd
        this._radius = data.radius
        this._parent = data.parent
        this._meshes = data.meshes.map((mesh) => new THREE.InstancedMesh(mesh.geometry, mesh.material, COUNT))
    }

    public get meshes(): THREE.InstancedMesh[] {
        return this._meshes;
    }

    init() {
        const stats = {
            range: (this._distanceEnd - this._distanceStart) / Constants.DISTANCE_SCALE,
            distanceStart: this._distanceStart / Constants.DISTANCE_SCALE,
            distanceEnd: this._distanceEnd / Constants.DISTANCE_SCALE,
            radius: this._radius
        }

        this._meshes.forEach((mesh) => {
            const matrix = new THREE.Matrix4()

            for (let i = 0; i < COUNT; i++) {
                randomizeMatrix(matrix, stats)
                mesh.setMatrixAt(i, matrix)
            }
        })
    }
}