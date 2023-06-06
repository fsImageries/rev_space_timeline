import { CelestialObject } from "./Models/Celestial";
import CelestialBase from "./Models/CelestialBase";
import Internal3DObject2 from "./Models/Internal3DObject";
import SystemObject from "./Models/SystemObject";
import Oort from "./Models/Oort";

export interface RandStats {
    range: number;
    distanceStart: number;
    distanceEnd: number;
    radius: number;
}

export interface OortParams {
    distanceToParent: number;
    distanceEnd: number;
    radius: number;
    parent?: CelestialObject;
}

export interface PlanetParams {
    glowColor: string;
    glowIntesity: number;
    satellites?: any;
}

export interface CelestialParams {
    // all times are given in hours
    // all lengths are given in km

    radius: number
    rotationPeriod: number
    orbitalPeriod: number
    tilt: number
    name: string;
    distanceToParent: number;
    object: Internal3DObject;
    parent?: CelestialObject;
    id: string;
    isSatellite?: boolean;
    texts?: string[]
}

export interface Internal3DObject {
    topGrp: THREE.Group;
    masterGrp: THREE.Group;
    meshGrp: THREE.Group;
    mesh: THREE.Mesh;
    atmo?: THREE.Mesh;
    orbit?: THREE.Object3D;
    texts?: THREE.Mesh[];
    markerSprite?: THREE.Object3D;
    infoSprite?: THREE.Object3D;
}

export interface CelestialBaseParams {
    // all times are given in hours
    // all lengths are given in km
    id: string;
    name: string;
    type: string;
    tilt?: number;
    parent?: string;
    radius?: number;
    texts?: string[];
    orbitalPeriod?: number;
    rotationPeriod?: number;
    distanceToParent?: number;
}

export interface Internal3DObjectParams {
    parentGrp: THREE.Object3D;
    masterGrp: THREE.Object3D;
    meshGrp?: THREE.Object3D;
    mesh?: THREE.Object3D;
    atmo?: THREE.Object3D;
    orbit?: THREE.Object3D;
    markerSprite?: THREE.Object3D;
    infoSprite?: THREE.Object3D;
}

export interface SystemObjectParams {
    data: CelestialBase;
    object: Internal3DObject2;
    satellites?: SystemObject[];
}

export interface SystemParams {
    tree: SystemObject[];
    flat: SystemObject[];
    name: string;
    isSingleSun: boolean;
}