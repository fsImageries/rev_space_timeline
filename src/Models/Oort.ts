import * as THREE from "three"
import { CelestialObject } from "./Celestial";
import importRocks from "../helpers/rockImporter";
import Constants from "../helpers/Constants";
import { randFloat } from "three/src/math/MathUtils";
import { OortParams } from "../interfaces";

// avg distance between objects
const DIST = 50_000_000 / Constants.DISTANCE_SCALE
const COUNT = 1000



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


interface RandStats {
    distanceStart: number;
    distanceEnd: number;
    radius: number;
}

const randomizeMatrix = function () {

    const position = new THREE.Vector3();
    const rotation = new THREE.Euler();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();

    return function (matrix: THREE.Matrix4, stats: RandStats) {

        position.x = randFloat(stats.distanceStart, stats.distanceEnd);
        position.y = randFloat(stats.distanceStart, stats.distanceEnd);
        position.z = randFloat(stats.distanceStart, stats.distanceEnd);

        rotation.x = Math.random() * 2 * Math.PI;
        rotation.y = Math.random() * 2 * Math.PI;
        rotation.z = Math.random() * 2 * Math.PI;

        quaternion.setFromEuler(rotation);

        scale.x = scale.y = scale.z = randFloat(1000, 10000);

        matrix.compose(position, quaternion, scale);

    };

}();