import { Group, Mesh, Object3D, PointLight } from "three";
import { Component } from "../ecs/Component";
import { SceneComponent } from "./CommonComponents";
import { operand } from "../ecs/QueryManager";


export interface MeshData { mesh: Mesh; }
export class MeshComponent extends Component<MeshData> {
    static dependencies = [];
    static typeID = crypto.randomUUID()

    public init() {
        if (!this.dependendQueries) return
        for (const entity of this.dependendQueries[0].entities) {
            (entity.getComponent(SceneComponent) as SceneComponent).data.scene.add(this.data.mesh)
        }
    }
}


export interface GroupData { group: Object3D }
export class ObjectGroupComponent extends Component<GroupData> {
    static dependencies = [operand("self", MeshComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(): GroupData {
        const g = new Group()
        g.position.set(Math.random() * 10, Math.random() * 10, Math.random() * 10)
        return {
            group: g
        };
    }

    public init() {
        if (!this.dependendQueries) return
        const mesh = this.dependendQueries[0].entities[0]
        this.data.group.add((mesh.getComponent(MeshComponent) as MeshComponent).data.mesh);
    }
}


export class RotGroupComponent extends Component<GroupData> {
    static dependencies = [operand("self", ObjectGroupComponent), operand("exist", SceneComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(): GroupData {
        return {
            group: new Group()
        };
    }

    public init() {
        if (!this.dependendQueries) return
        // this.dependendQueries[0] <-- all groups
        // this.dependendQueries[1] <-- all scenes

        const scene = (this.dependendQueries[1].entities[0].getComponent(SceneComponent) as SceneComponent).data.scene;
        for (let i = 0; i < this.dependendQueries[0].entities.length; i++) {
            const grp = this.dependendQueries[0].entities[i]    //<-- this index needs to change    

            // console.log(grp, scene)
            this.data.group.add((grp.getComponent(ObjectGroupComponent) as ObjectGroupComponent).data.group);
            scene.add(this.data.group)
        }
    }
}


export interface PointLightData { light: PointLight; }
export class PointLightComponent extends Component<PointLightData> {
    static dependencies = [operand("self", ObjectGroupComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(color:string, intensity: number, distance:number): PointLightData {
        return {
            light: new PointLight(color, intensity, distance)
        };
    }

    public init() {
        if (!this.dependendQueries) return
        const grp = this.dependendQueries[0].entities[0].getComponent(ObjectGroupComponent) as ObjectGroupComponent
        this.data.light.position.copy(grp.data.group.position)
        grp.data.group.add(this.data.light)
    }
}