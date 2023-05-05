import * as THREE from "three";
import { Internal3DObject, CelestialParams } from "../interfaces";
import Constants from "../helpers/Constants";


export class CelestialObject {
    private _radius: number;
    private _rotationPeriod: number;
    private _orbitalPeriod: number;
    private _tilt: number;
    private _name: string;
    private _distanceToParent: number;
    private _object: Internal3DObject;
    private _parent?: CelestialObject;
    
    public angularRotVel: number;
    public angularOrbVel: number;
    

    constructor(data:CelestialParams) {
        this._radius = data.radius;
        this._rotationPeriod = data.rotationPeriod;
        this._orbitalPeriod = data.orbitalPeriod;
        this._tilt = data.tilt;
        this._name = data.name;
        this._distanceToParent = data.distanceToParent;
        this._object = data.object;
        this._parent = data.parent;

        let secsPerRotation = this.rotationPeriod * 60 * 60;
        this.angularRotVel = (2 * Math.PI) / secsPerRotation;

        secsPerRotation = this.orbitalPeriod * 60 * 60;
        this.angularOrbVel = (2 * Math.PI) / secsPerRotation;
     }

    public get topGrp(): THREE.Group {
        return this._object.topGrp
    }

    public get masterGrp(): THREE.Group {
        return this._object?.masterGrp;
    }

    public get meshGrp(): THREE.Group {
        return this._object?.meshGrp;
    }

    public get mesh(): THREE.Mesh {
        return this._object?.mesh;
    }

    public get atmo(): THREE.Mesh | undefined {
        return this._object.atmo;
    }

    public get orbit(): THREE.Object3D | undefined {
        return this._object.orbit;
    }

    public get texts(): THREE.Mesh[] | undefined {
        return this._object.texts;
    }

    public get sprite(): THREE.Object3D | undefined {
        return this._object.sprite;
    }

    public get parent(): CelestialObject | undefined {
        return this._parent
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    public get rotationPeriod(): number {
        return this._rotationPeriod;
    }
    public set rotationPeriod(value: number) {
        this._rotationPeriod = value;
    }

    public get orbitalPeriod(): number {
        return this._orbitalPeriod;
    }
    public set orbitalPeriod(value: number) {
        this._orbitalPeriod = value;
    }

    public get tilt(): number {
        return this._tilt;
    }
    public set tilt(value: number) {
        this._tilt = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get distanceToParent(): number {
        return this._distanceToParent;
    }

    public get dist(): number {
        return this.distanceToParent ? this._distanceToParent / Constants.DISTANCE_SCALE : null;
    }
}