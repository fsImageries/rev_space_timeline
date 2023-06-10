export interface DrawData {
  radius: number;
  cache?: string,
  albedoPath?: string;
  normalPath?: string;
  glowColor?: string;
  glowIntensity?: number;
  count?: number;
  radiusMult?: number;
  distDiv?: number;
  height?: number;
  orbInvert?: boolean;
  orbLen?: number;
}

export interface SunData extends SystemObjectData {
  highTemp: number;
  lowTemp: number;
}

export interface SystemsData {
  systems: SystemData[];
}

export interface TextObject {
  name:string;
  texts: string[];
}

export interface SystemData {
  name: string;
  isSingleSun: boolean;
  objects: SystemObjectData[];
  texts: TextObject[];
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
