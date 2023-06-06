export interface CelestialChildrenJson {
    name: string,
    type: string,
    objectType: string,
    data?: CelestialData
    draw?: DrawData,
}

export interface DrawData {
    radius: number,
    albedoPath?: string,
    normalPath?: string,
    glowColor?: string,
    glowIntensity?: number,
    count?:number,
    radiusMult?: number,
    distDiv?: number,
    height?: number,
    orbInvert?: boolean,
    orbLen?: number,
}

export interface CelestialData {
    diameter?: number,
    radius?: number,
    rotationPeriod?: number,
    orbitalPeriod?: number,
    parent?: string,
    tilt?: number,
    distanceToParent?: number,
}

export interface SunData extends SystemObjectData {
    highTemp: number,
    lowTemp: number
}

export interface PlanetJson extends CelestialData {
    name: string,
    diameter: number,
    radius: number,
    rotationPeriod: number,
    orbitalPeriod: number,
    parent: string,
    tilt: number,
    distanceToParent: number,
    draw: DrawData,
    texts: string[],
    children?: CelestialChildrenJson[],
}

export interface OortCloudJson {
    parent: string,
    distanceToParent: number,
    distanceEnd: number,
    draw: DrawData
}


export interface SystemsData {
    systems: SystemData[]
}

export interface SystemData {
    name: string,
    isSingleSun: boolean,
    objects: SystemObjectData[]
}

export interface SystemObjectData {
    name: string;
    type: string;
    radius: number;
    rotationPeriod: number;
    orbitalPeriod: number;
    parent: string;
    tilt: number;
    distanceToParent: number;
    // highTemp: 5100 # TODO implement into new interfaces
    // lowTemp: 1700 # TODO implement into new interfaces
    draw: DrawData;
    texts?: string[];
}
