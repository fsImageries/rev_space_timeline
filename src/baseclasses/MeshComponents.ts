import { BufferGeometry, Group, Line, LineBasicMaterial, LineSegments, Mesh, Object3D, PointLight, Vector3 } from "three";
import { Component } from "../ecs/Component";
import { operand } from "../ecs/QueryManager";
import { SceneComponent, SunTypeComponent } from "./CommonComponents";
import { DEG2RAD } from "three/src/math/MathUtils";
import Constants from "../helpers/Constants";


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

    static getDefaults(g?: Group): GroupData {
        return {
            group: g ? g : new Group()
        };
    }

    public init() {
        if (!this.dependendQueries) return
        const mesh = this.dependendQueries[0].entities[0]
        this.data.group.add((mesh.getComponent(MeshComponent) as MeshComponent).data.mesh);
    }
}


export interface RotGroupData { group: Object3D, initRot: number }
export class RotGroupComponent extends Component<RotGroupData> {
    static dependencies = [operand("self", ObjectGroupComponent), operand("exist", SceneComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(g?: Group, initRot= 0): RotGroupData {
        return {
            group: g ? g : new Group(),
            initRot
        };
    }

    public init() {
        if (!this.dependendQueries) return
        // this.dependendQueries[0] <-- all groups
        // this.dependendQueries[1] <-- all scenes

        const scene = (this.dependendQueries[1].entities[0].getComponent(SceneComponent) as SceneComponent).data.scene;
        for (let i = 0; i < this.dependendQueries[0].entities.length; i++) {
            const grp = this.dependendQueries[0].entities[i]    //<-- this index needs to change    
            const g = (grp.getComponent(ObjectGroupComponent) as ObjectGroupComponent).data.group;
            // console.log(g.children)
            this.data.group.add(g);
            this.data.group.rotateY(this.data.initRot)
            scene.add(this.data.group)
        }
    }
}


export interface PointLightData { light: PointLight; }
export class PointLightComponent extends Component<PointLightData> {
    static dependencies = [operand("self", ObjectGroupComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(color: string, intensity: number, distance: number): PointLightData {
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


const RINGMAT = new LineBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.45
});
const GEOM = new BufferGeometry();
export interface BasicRingData { line: Line }
export class BasicRingComponent extends Component<BasicRingData> {
    static dependencies = [operand("exist", SceneComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(mult = 1, radius = Constants.LIGHTYEAR): BasicRingData {
        const points = [];
        radius = radius * Constants.DISTANCE_SCALE
        for (let i = 0; i <= 360; i++) {
            points.push(new Vector3(radius * Math.sin(i * DEG2RAD), 0, radius * Math.cos(i * DEG2RAD)));
        }
        GEOM.setFromPoints(points);
        GEOM.scale(mult, 1, mult)

        return {
            line: new Line(GEOM.clone(), RINGMAT)
        };
    }

    public init() {
        if (!this.dependendQueries) return
        const scene = this.dependendQueries[0].entities[0].getComponent(SceneComponent) as SceneComponent
        scene.data.scene.add(this.data.line)
    }
}

const LEN_MAT = new LineBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.2
  });
  
  const OBJ_MAT = new LineBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.09
  });

export interface LineSegmentData { line: LineSegments }
export class DiskLinesComponent extends Component<LineSegmentData> {
    static dependencies = [operand("exist", SceneComponent), operand("exist", ObjectGroupComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(linePoints: Vector3[], obj=false): LineSegmentData {
        GEOM.setFromPoints(linePoints)
        return {
            line: new LineSegments(GEOM.clone(), obj ? OBJ_MAT : LEN_MAT)
        };
    }

    public init() {
        if (!this.dependendQueries) return

        const linepnts = []
        for (const entity of this.dependendQueries[1].entities) {
            const p1 = (entity.getComponent(ObjectGroupComponent) as ObjectGroupComponent).data.group.getWorldPosition(Constants.WORLD_POS).clone()
            if (p1.y === 0) continue
            const p2 = p1.clone()
            p2.y = 0
            linepnts.push(p1, p2)
        }

        GEOM.setFromPoints(linepnts)
        this.data.line = new LineSegments(GEOM.clone(), OBJ_MAT)


        const scene = this.dependendQueries[0].entities[0].getComponent(SceneComponent) as SceneComponent
        scene.data.scene.add(this.data.line)
    }
}