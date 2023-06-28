import { Component } from "../ecs/Component";


export interface AxisRotData { axisPeriod: number, rotVel: number }
export class AxisRotComponent extends Component<AxisRotData> {
  static typeID = crypto.randomUUID()

  static getDefaults(period: number): AxisRotData {
    let secsPerRotation = period * 60 * 60;
    const rotVel = (2 * Math.PI) / secsPerRotation;
    return {
      axisPeriod: period,
      rotVel: rotVel
    };
  }
}