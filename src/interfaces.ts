import { CelestialObject } from "./Models/Celestial";
import { Satellites } from "./Models/Satellites";

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
    satellites?: Satellites;
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
}

export interface Internal3DObject {
    topGrp: THREE.Group;
    masterGrp: THREE.Group;
    meshGrp: THREE.Group;
    mesh: THREE.Mesh;
    atmo?: THREE.Mesh;
    orbit?: THREE.Object3D;
    texts?: THREE.Mesh[];
    sprite?: THREE.Object3D;
}