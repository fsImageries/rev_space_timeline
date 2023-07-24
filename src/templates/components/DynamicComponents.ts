import { Vector3 } from "three";
import { Component } from "../../ecs/Component";
import { operand } from "../../ecs/utils";
import { TransformGroupComponent } from "./MeshComponents";
import { RadiusComponent } from "./CelestialComponents";


export interface GravitationalObjectData {
    mass: number,
    r: number,
    pos?: Vector3,
    vel: Vector3,
    acc: Vector3,
}
export class GravitationalObjectComponent extends Component<GravitationalObjectData> {
    static dependencies = [(operand("self", TransformGroupComponent))];
    static typeID = crypto.randomUUID();

    static getDefaults(mass: number, vel?: string | Vector3, acc?: string | Vector3): GravitationalObjectData {
        let v: Vector3;
        if (!vel || typeof vel === "string") {
            v = !vel ? new Vector3(0, 0, 0) : new Vector3(...vel.split(",").map(s => parseFloat(s)))
        } else { v = vel as Vector3 }

        let a: Vector3;
        if (!acc || typeof acc === "string") {
            a = !acc ? new Vector3(0, 0, 0) : new Vector3(...acc.split(",").map(s => parseFloat(s)))
        } else { a = acc as Vector3 }
        

        return { mass, vel:v, acc: a, r: Math.sqrt(mass) * 2 };
    }

    public async init() {
        if (!this.dependendQueries) return;
        const tcomp = this.dependendQueries[0].entities[0].getComponent(TransformGroupComponent)
        if (!tcomp) return
        const rcomp = this.dependendQueries[0].entities[0].getComponent(RadiusComponent)
        this.data.pos = tcomp.data.group.position
        this.data.r = rcomp.data.drawRadius
    }
}