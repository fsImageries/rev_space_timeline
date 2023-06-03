export interface CelestialChildrenJson {
    name: string,
    type: string,
    objectType: string,
    data?: PlanetJson | SunJson
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

export interface SunJson {
    name: string,
    diameter: number,
    radius: number,
    rotationPeriod: number,
    orbitalPeriod?: number,
    parent?: string,
    tilt: number,
    distanceToParent?: number,
    draw: DrawData
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