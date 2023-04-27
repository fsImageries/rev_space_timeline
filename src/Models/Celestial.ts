export interface CelestialParams {
    // all times are given in hours
    // all lengths are given in km

    radius: number
    rotationPeriod: number
    orbitalPeriod: number
    tilt: number
    name: string;
    distanceToParent: number
}

export class CelestiaObject {
    private _radius: number;
    private _rotationPeriod: number;
    private _orbitalPeriod: number;
    private _tilt: number;
    private _name: string;
    private _distanceToParent: number;

    constructor(data:CelestialParams) {
        this._radius = data.radius;
        this._rotationPeriod = data.rotationPeriod;
        this._orbitalPeriod = data.orbitalPeriod;
        this._tilt = data.tilt;
        this._name = data.name;
        this._distanceToParent = data.distanceToParent;
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