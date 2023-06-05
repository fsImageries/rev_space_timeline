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
    private _isSatellite?: boolean;
    private _parent?: CelestialObject;
    
    public angularRotVel: number;
    public angularOrbVel: number;

    public id: string;
    

    constructor(data:CelestialParams) {
        this._radius = data.radius;
        this._rotationPeriod = data.rotationPeriod;
        this._orbitalPeriod = data.orbitalPeriod;
        this._tilt = data.tilt;
        this._name = data.name;
        this._distanceToParent = data.distanceToParent;
        this._object = data.object;
        this._isSatellite = data.isSatellite;
        this._parent = data.parent;
        this.id = data.id;

        let secsPerRotation = this.rotationPeriod * 60 * 60;
        this.angularRotVel = (2 * Math.PI) / secsPerRotation;

        secsPerRotation = this.orbitalPeriod * 60 * 60;
        this.angularOrbVel = (2 * Math.PI) / secsPerRotation;
     }

    public invertAngularRotVel() {
        this.angularRotVel *= -1
    }

    public invertAngularOrbVel() {
        this.angularOrbVel *= -1
    }

    public get isSatellite(): boolean {
        return this._isSatellite;
    }
    
    public set visible(val:boolean) {
        this.topGrp.visible = val
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

    public get markerSprite(): THREE.Object3D | undefined {
        return this._object.markerSprite;
    }

    public get infoSprite(): THREE.Object3D | undefined {
        return this._object.infoSprite;
    }

    public get parent(): CelestialObject | undefined {
        return this._parent
    }

    public set parent(val: CelestialObject) {
        this._parent = val
    }

    public get radius(): number {
        return this._radius;
    }

    public get rotationPeriod(): number {
        return this._rotationPeriod;
    }

    public get orbitalPeriod(): number {
        return this._orbitalPeriod;
    }

    public get tilt(): number {
        return this._tilt;
    }

    public get name(): string {
        return this._name;
    }

    public get distanceToParent(): number {
        return this._distanceToParent;
    }

    public get dist(): number | null {
        return this.distanceToParent ? this._distanceToParent / Constants.DISTANCE_SCALE : null;
    }
}