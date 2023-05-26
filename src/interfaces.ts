import { CelestialObject } from "./Models/Celestial";

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
    meshes: THREE.Mesh[];
    parent?: CelestialObject;
}

export interface PlanetParams {
    glowColor: string;
    glowIntesity: number;
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

export interface SunJson {
    name: string,
    diameter: number,
    radius: number,
    rotationPeriod: number,
    orbitalPeriod?: number,
    parent?: string,
    tilt: number,
    distanceToParent?: number,
    draw: {
        radius: number
    }
}

export interface PlanetJson {
    name: string,
    diameter: number,
    radius: number,
    rotationPeriod: number,
    orbitalPeriod: number,
    parent: string,
    tilt: number,
    distanceToParent: number,
    draw: {
        albedoPath: string,
        normalPath: string,
        glowColor: string,
        glowIntensity: number,
        radius: number
    },
    texts: string[]
}

export interface OortCloudJson {
    parent: string,
    distanceToParent: number,
    distanceEnd: number,
    draw: {
        radius: number;
    }
}

export interface SystemJson {
    name: string,
    isSingleSun: boolean,
    suns: SunJson[],
    planets: PlanetJson[],
    oortCloud: OortCloudJson
}

export interface SystemJsonData {
    systems: SystemJson[]
}