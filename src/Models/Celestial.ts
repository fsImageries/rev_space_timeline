import * as THREE from "three";
import { Internal3DObject } from "../interfaces";

export interface CelestialParams {
    // all times are given in hours
    // all lengths are given in km

    radius: number
    rotationPeriod: number
    orbitalPeriod: number
    tilt: number
    name: string;
    distanceToParent: number;
    parent?: CelestiaObject;
}

export class CelestiaObject {
    private _radius: number;
    private _rotationPeriod: number;
    private _orbitalPeriod: number;
    private _tilt: number;
    private _name: string;
    private _distanceToParent: number;
    
    public object?: Internal3DObject;
    public parent?: CelestiaObject;
    public angularRotVel: number;
    public angularOrbVel: number;
    

    constructor(data:CelestialParams) {
        this._radius = data.radius;
        this._rotationPeriod = data.rotationPeriod;
        this._orbitalPeriod = data.orbitalPeriod;
        this._tilt = data.tilt;
        this._name = data.name;
        this._distanceToParent = data.distanceToParent;
        this.parent = data.parent;

        let secsPerRotation = this.rotationPeriod * 60 * 60;
        this.angularRotVel = (2 * Math.PI) / secsPerRotation;

        secsPerRotation = this.orbitalPeriod * 60 * 60;
        this.angularOrbVel = (2 * Math.PI) / secsPerRotation;
     }

    public get masterGrp(): THREE.Group | undefined {
        return this.object?.masterGrp;
    }

    public get meshGrp(): THREE.Group | undefined {
        return this.object?.meshGrp;
    }

    public get mesh(): THREE.Mesh | undefined {
        return this.object?.mesh;
    }

    public get atmo(): THREE.Mesh | undefined {
        return this.object?.atmo;
    }

    public get texts(): THREE.Mesh[] | undefined {
        return this.object?.texts;
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
    public set distanceToParent(value: number) {
        this._distanceToParent = value;
    }
}