import { BufferGeometry, Group, Line, LineBasicMaterial, LineSegments, Mesh, Object3D, PointLight, Vector3 } from "three";
import { DEG2RAD } from "three/src/math/MathUtils";
import { Text as TText } from "troika-three-text";
import { Component } from "../ecs/Component";
import { operand } from "../ecs/QueryManager";
import Constants from "../helpers/Constants";
import { RadiusComponent } from "./CelestialComponents";
import { BaseDataComponent, SceneComponent } from "./CommonComponents";


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

    static getDefaults(g?: Group, initRot = 0): RotGroupData {
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
export interface BasicRingData { line: Line, radius: number }
export class BasicRingComponent extends Component<BasicRingData> {
    static dependencies = [operand("exist", SceneComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(mult: number, radius = Constants.LIGHTYEAR): BasicRingData {
        const points = [];
        radius = radius * Constants.DISTANCE_SCALE
        for (let i = 0; i <= 360; i++) {
            points.push(new Vector3(radius * Math.sin(i * DEG2RAD), 0, radius * Math.cos(i * DEG2RAD)));
        }
        GEOM.setFromPoints(points);
        GEOM.scale(mult, 1, mult)

        return {
            line: new Line(GEOM.clone(), RINGMAT),
            radius: mult * radius
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
        this.data.line = new LineSegments(GEOM.clone(), LEN_MAT)

        const scene = this.dependendQueries[0].entities[0].getComponent(SceneComponent) as SceneComponent
        scene.data.scene.add(this.data.line)
    }
}


export interface TextData { title: typeof TText, texts: typeof TText, up:boolean }
export class CosmicMapSunTextComponent extends Component<TextData> {
    static dependencies = [operand("self", ObjectGroupComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(up=false): TextData {
        const t = new TText()
        t.color = 0xffffff;
        t.font = "./Open_Sans/static/OpenSans-Light.ttf";
        const t2 = new TText()
        t2.font = "./Open_Sans/static/OpenSans-Light.ttf";
        t2.color = 0xffffff;
        return {
            title: t,
            texts: t2,
            up
        };
    }

    public init() {
        if (!this.dependendQueries) return
        const dcomp = this.dependendQueries[0].entities[0].getComponent(BaseDataComponent) as BaseDataComponent
        if (!dcomp.data.texts) return
        this.data.title.text = dcomp.data.name
        this.data.title.name = `${dcomp.data.name}_text`;
        this.data.texts.text = dcomp.data.texts.join("\n")
        this.data.texts.fillOpacity = .4

        const rrcomp = this.dependendQueries[0].entities[0].getComponent(RotGroupComponent) as RotGroupComponent
        const rotY = rrcomp.data.group.rotation.y
        this.data.title.rotation.y -= rotY + (Math.PI * .1)
        this.data.texts.rotation.y -= rotY

        const rcomp = this.dependendQueries[0].entities[0].getComponent(RadiusComponent) as RadiusComponent
        const rad = rcomp.data.drawRadius
        this.data.title.fontSize = rad * 2
        this.data.title.position.x = rad * 1.5
        this.data.title.position.y = rad * 2
        
        this.data.texts.fontSize = rad
        this.data.texts.position.y = rad * ( this.data.up ? dcomp.data.texts.length * rad + 1 : -1.1)

        const ocomp = this.dependendQueries[0].entities[0].getComponent(ObjectGroupComponent) as ObjectGroupComponent
        ocomp.data.group.add(this.data.title)
        ocomp.data.group.add(this.data.texts)
    }
}

export interface TitleData { title: typeof TText}
export class BasicRingTextComponent extends Component<TitleData> {
    static dependencies = [operand("self", BasicRingComponent)];
    static typeID = crypto.randomUUID()

    static getDefaults(txt: string, size = 1): TitleData {
        const t = new TText()
        t.text = txt
        t.fontSize = size
        t.position.x -= size * 1.5
        t.position.y += size * 1.1
        t.color = 0xffffff;
        t.font = "./Open_Sans/static/OpenSans-Light.ttf";
        return {
            title: t
        };
    }

    public init() {
        if (!this.dependendQueries) return
        const rcomp = this.dependendQueries[0].entities[0].getComponent(BasicRingComponent) as BasicRingComponent
        this.data.title.position.x -= rcomp.data.radius
        rcomp.data.line.add(this.data.title)
    }
}