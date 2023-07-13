import { Component } from "../ecs/Component";
import { Store } from "../ecs/Store";
import { operand } from "../ecs/utils";
import { MeshData, RotGroupComponent, TransformGroupComponent } from "./MeshComponents";

export interface RotData {
  period: number;
  vel: number;
}
export class AxisRotComponent extends Component<RotData> {
  static typeID = crypto.randomUUID();

  static getDefaults(period: number, invert = false): RotData {
    period = invert ? period * -1 : period;
    const secsPerRotation = period * 60 * 60;
    const rotVel = (2 * Math.PI) / secsPerRotation;
    return {
      period: period,
      vel: rotVel
    };
  }
}

export class OrbitRotComponent extends Component<RotData> {
  static typeID = crypto.randomUUID();

  static getDefaults(period: number, invert = false): RotData {
    period = invert ? period * -1 : period;
    const secsPerRotation = period * 60 * 60;
    const rotVel = (2 * Math.PI) / secsPerRotation;
    return {
      period: period,
      vel: rotVel
    };
  }
}

export interface DistanceToParentData {
  x: number;
  y?: number;
  drawX: number;
  drawY?: number;
  shouldInit: boolean;
}
export class DistanceToParentComponent extends Component<DistanceToParentData> {
  static dependencies = [operand("self", TransformGroupComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(xy: number[] | number, shouldInit = true): DistanceToParentData {
    if (typeof xy === "number") xy = [xy];
    const [x, y] = xy.length === 1 ? [xy[0], undefined] : xy;
    const drawX = x * Store.getInstance().state.DISTANCE_SCALE;
    const drawY = y ? y * Store.getInstance().state.DISTANCE_SCALE : y;
    return {
      x,
      y,
      drawX,
      drawY,
      shouldInit
    };
  }

  public init() {
    if (!this.dependendQueries || !this.data.shouldInit) return;

    for (const entity of this.dependendQueries[0].entities) {
      const grp = entity.getComponent(TransformGroupComponent).data.group;
      grp.position.x += this.data.drawX;
      if (this.data.drawY) grp.position.y += this.data.drawY;
    }
  }
}

export interface RadiusData {
  radius: number;
  drawRadius: number;
}
export class RadiusComponent extends Component<RadiusData> {
  static dependencies = [operand("self", TransformGroupComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(radius: number): RadiusData {
    return {
      radius: radius,
      drawRadius: radius * Store.getInstance().state.SIZE_SCALE
    };
  }

  public init() {
    if (!this.dependendQueries) return;

    const objGrp = this.dependendQueries[0].entities[0];
    objGrp.getComponent(TransformGroupComponent).data.group.scale.multiplyScalar(this.data.drawRadius);
  }
}

export class OrbitLineComponent extends Component<MeshData> {
  static dependencies = [
    operand("self", TransformGroupComponent),
    operand("self", RotGroupComponent),
    operand("self", DistanceToParentComponent)
  ];
  static typeID = crypto.randomUUID();

  public init() {
    if (!this.dependendQueries) return;

    const self = this.dependendQueries[0].entities[0];
    const rot = self.getComponent(RotGroupComponent).data.group;
    const dist = self.getComponent(DistanceToParentComponent).data.drawX;

    this.data.mesh.scale.multiplyScalar(dist);
    rot.add(this.data.mesh);
  }
}
