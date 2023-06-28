import { Component } from "../ecs/Component";
import { QueryOperand, operand } from "../ecs/QueryManager";
import Constants from "../helpers/Constants";
import { ObjectGroupComponent } from "./MeshComponents";


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

export interface DistanceToParentData { x: number, y?: number, drawX: number, drawY?: number }
export class DistanceToParentComponent extends Component<DistanceToParentData> {
    static dependencies = [operand("self", ObjectGroupComponent)]
    static typeID = crypto.randomUUID()

    static getDefaults(xy: number[]): DistanceToParentData {
        const [x, y] = xy.length === 1 ? [xy[0], undefined] : xy
        const drawX = x * Constants.DISTANCE_SCALE
        const drawY = y ? y * Constants.DISTANCE_SCALE : y
        return {
            x, y, drawX, drawY
        };
    }

    public init() {
        if (!this.dependendQueries) return

        for (const entity of this.dependendQueries[0].entities) {
            const grp = (entity.getComponent(ObjectGroupComponent) as ObjectGroupComponent).data.group
            grp.position.x += this.data.drawX
            if (this.data.drawY) grp.position.y += this.data.drawY
        }
    }
}