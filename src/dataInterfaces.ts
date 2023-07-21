import { ColorRepresentation } from "three";

export interface DrawData {
  radius?: number;
  cache?: string;
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
  genColor?: boolean;
  pointShader?: boolean;
  end?: number;
  initRot?: number;
  mass?: number;
}

export interface SunData extends SystemObjectData {
  highTemp: number;
  lowTemp: number;
  isSimple?: boolean;
  color?: ColorRepresentation;
  disableLight?: boolean;
}

export interface SystemsData {
  systems: SystemData[];
}

export interface TextObject {
  name: string;
  all?: boolean;
  timeline?: string[];
  info?: string;
}

export interface SystemData {
  name: string;
  isSingleSun: boolean;
  objects: SystemObjectData[];
  texts: TextObject[];

  startTarget: string;
  freeCam: boolean;
  constellation: string;
}

export interface SystemObjectData {
  name: string;
  radius: number;
  type?: string;
  rotationPeriod?: number;
  orbitalPeriod?: number;
  parent?: string;
  tilt?: number;
  distanceToParent?: number | [number, number];
  // highTemp: 5100 # TODO implement into new interfaces
  // lowTemp: 1700 # TODO implement into new interfaces
  draw?: DrawData;
  texts?: string[];
  displayInfo?: boolean;
}
