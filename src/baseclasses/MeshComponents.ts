import {
  BufferGeometry,
  Group,
  Line,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  Object3D,
  PointLight,
  Vector3
} from "three";
import { DEG2RAD } from "three/src/math/MathUtils";
import { Text as TText } from "troika-three-text";
import { Component } from "../ecs/Component";
import Constants from "../helpers/Constants";
import { BaseDataComponent, DistanceToParentComponent, ParticleRingTypeComponent, RadiusComponent, SceneComponent, UniformsComponent } from "./imports";
import { Entity } from "../ecs/Entity";
import { operand } from "../ecs/utils";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { World } from "../ecs/World";
import { CameraFocusSystem } from "./imports";

export interface MeshData {
  mesh: Mesh;
}
export class MeshComponent extends Component<MeshData> {
  static dependencies = [];
  static typeID = crypto.randomUUID();
}

export interface GroupData {
  group: Object3D;
}
export class TransformGroupComponent extends Component<GroupData> {
  static dependencies = [operand("self", MeshComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(g?: Group): GroupData {
    return {
      group: g ? g : new Group()
    };
  }

  public init() {
    if (!this.dependendQueries) return;
    const mesh = this.dependendQueries[0].entities[0];
    this.data.group.add((mesh.getComponent(MeshComponent) as MeshComponent).data.mesh);
  }
}

export interface RotGroupData {
  group: Object3D;
  initRot: number;
}
export class RotGroupComponent extends Component<RotGroupData> {
  static dependencies = [operand("self", TransformGroupComponent), operand("exist", SceneComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(g?: Group, initRot = 0): RotGroupData {
    return {
      group: g ? g : new Group(),
      initRot
    };
  }

  public init() {
    if (!this.dependendQueries) return;
    // this.dependendQueries[0] <-- all groups
    // this.dependendQueries[1] <-- all scenes

    const scene = this.dependendQueries[1].entities[0].getComponent(SceneComponent).data.scene;
    for (let i = 0; i < this.dependendQueries[0].entities.length; i++) {
      const entity = this.dependendQueries[0].entities[i]; //<-- this index needs to change

      const g = entity.getComponent(TransformGroupComponent).data.group;
      this.data.group.add(g);
      this.data.group.rotateY(this.data.initRot);

      const pcomp = entity.getComponent(ParentComponent);
      if (pcomp && pcomp.data.parent) continue;
      scene.add(this.data.group);
    }
  }
}

export class AtmoComponent extends Component<MeshData> {
  static dependencies = [operand("self", TransformGroupComponent)];
  static typeID = crypto.randomUUID();

  public init() {
    if (!this.dependendQueries) return;
    const grp = this.dependendQueries[0].entities[0].getComponent(TransformGroupComponent).data.group;
    grp.add(this.data.mesh);
  }
}

export interface PointLightData {
  light: PointLight;
}
export class PointLightComponent extends Component<PointLightData> {
  static dependencies = [operand("self", TransformGroupComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(color: string, intensity: number, distance: number): PointLightData {
    return {
      light: new PointLight(color, intensity, distance)
    };
  }

  public init() {
    if (!this.dependendQueries) return;
    const grp = this.dependendQueries[0].entities[0].getComponent(TransformGroupComponent) as TransformGroupComponent;
    this.data.light.position.copy(grp.data.group.position);
    grp.data.group.add(this.data.light);
  }
}

const RINGMAT = new LineBasicMaterial({
  color: "#ffffff",
  transparent: true,
  opacity: 0.45
});

const GEOM = new BufferGeometry();
export interface BasicRingData {
  line: Line;
  radius: number;
}
export class BasicRingComponent extends Component<BasicRingData> {
  static dependencies = [operand("exist", SceneComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(mult: number, radius = Constants.LIGHTYEAR): BasicRingData {
    const points = [];
    radius = radius * Constants.DISTANCE_SCALE;
    for (let i = 0; i <= 360; i++) {
      points.push(new Vector3(radius * Math.sin(i * DEG2RAD), 0, radius * Math.cos(i * DEG2RAD)));
    }
    GEOM.setFromPoints(points);
    GEOM.scale(mult, 1, mult);

    return {
      line: new Line(GEOM.clone(), RINGMAT),
      radius: mult * radius
    };
  }

  public init() {
    if (!this.dependendQueries) return;
    const scene = this.dependendQueries[0].entities[0].getComponent(SceneComponent) as SceneComponent;
    scene.data.scene.add(this.data.line);
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
  opacity: 0.075
});

export interface TextData {
  title: typeof TText;
  texts: typeof TText;
  up: boolean;
}
export class CosmicMapSunTextComponent extends Component<TextData> {
  static dependencies = [operand("self", TransformGroupComponent), operand("exist", SceneComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(up = false, fontSize = 30): TextData {
    const t = new TText();
    t.color = 0xffffff;
    t.fontSize = fontSize;
    t.font = "./Open_Sans/static/OpenSans-Light.ttf";
    const t2 = new TText();
    t2.font = "./Open_Sans/static/OpenSans-Light.ttf";
    t2.color = 0xffffff;
    t2.fontSize = fontSize * 0.5;
    return {
      title: t,
      texts: t2,
      up
    };
  }

  public init() {
    if (!this.dependendQueries) return;
    const dcomp = this.dependendQueries[0].entities[0].getComponent(BaseDataComponent) as BaseDataComponent;
    if (!dcomp.data.texts) return;
    this.data.title.text = dcomp.data.name;
    this.data.title.name = `${dcomp.data.name}_text`;
    this.data.texts.text = dcomp.data.texts.join("\n");
    this.data.texts.fillOpacity = 0.4;

    const tgrp = this.dependendQueries[0].entities[0].getComponent(TransformGroupComponent).data.group;
    tgrp.getWorldPosition(Constants.WORLD_POS);
    this.data.title.position.copy(Constants.WORLD_POS);
    this.data.texts.position.copy(Constants.WORLD_POS);

    const fs = this.data.title.fontSize;
    this.data.title.position.x += fs;
    this.data.title.position.y += fs;
    this.data.title.rotateY(Math.PI * -0.1);

    if (this.data.up) {
      this.data.texts.position.y += fs * dcomp.data.texts.length * (dcomp.data.texts.length == 1 ? 2 : 1);
    } else {
      this.data.texts.position.y += fs * -1;
    }

    const scene = this.dependendQueries[1].entities[0].getComponent(SceneComponent).data.scene;
    scene.add(this.data.title);
    scene.add(this.data.texts);
  }
}

export interface TitleData {
  title: typeof TText;
}
export class BasicRingTextComponent extends Component<TitleData> {
  static dependencies = [operand("self", BasicRingComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(txt: string, size = 1): TitleData {
    const t = new TText();
    t.text = txt;
    t.fontSize = size;
    t.position.x -= size * 1.5;
    t.position.y += size * 1.1;
    t.color = 0xffffff;
    t.font = "./Open_Sans/static/OpenSans-Light.ttf";
    return {
      title: t
    };
  }

  public init() {
    if (!this.dependendQueries) return;
    const rcomp = this.dependendQueries[0].entities[0].getComponent(BasicRingComponent) as BasicRingComponent;
    this.data.title.position.x -= rcomp.data.radius;
    rcomp.data.line.add(this.data.title);
  }
}

export interface LineSegmentData {
  line: LineSegments;
}
export class DiskLinesComponent extends Component<LineSegmentData> {
  static dependencies = [operand("exist", SceneComponent), operand("exist", TransformGroupComponent)];
  static typeID = crypto.randomUUID();

  public init() {
    if (!this.dependendQueries) return;

    const linepnts = [];
    for (const entity of this.dependendQueries[1].entities) {
      const p1 = (entity.getComponent(TransformGroupComponent) as TransformGroupComponent).data.group
        .getWorldPosition(Constants.WORLD_POS)
        .clone();
      if (p1.y === 0) continue;
      const p2 = p1.clone();
      p2.y = 0;
      linepnts.push(p1, p2);
    }

    GEOM.setFromPoints(linepnts);
    this.data.line = new LineSegments(GEOM.clone(), LEN_MAT);

    const scene = this.dependendQueries[0].entities[0].getComponent(SceneComponent) as SceneComponent;
    scene.data.scene.add(this.data.line);
  }
}

export interface ObjectLineData {
  line: LineSegments;
  pairs: string[];
}
export class ObjectLineComponent extends Component<ObjectLineData> {
  static dependencies = [operand("exist", SceneComponent), operand("exist", BaseDataComponent)];
  static typeID = crypto.randomUUID();

  public init() {
    if (!this.dependendQueries) return;
    if (this.data.pairs.length % 2 !== 0) {
      console.warn(`${ObjectLineComponent.name} was called with an uneven amount of pair entries. Skipping`);
      return;
    }

    const entities: { [k: string]: Entity } = {};

    this.dependendQueries[1].entities.forEach((e) => {
      const d = e.getComponent(BaseDataComponent);
      if (this.data.pairs.includes(d.data.name) && !(d.data.name in entities)) entities[d.data.name] = e;
    });

    const linepnts = [];
    for (let i = 0; i < this.data.pairs.length; i += 2) {
      const [n1, n2] = [this.data.pairs[i], this.data.pairs[i + 1]];
      const [e1, e2] = [entities[n1], entities[n2]];
      const [g1, g2] = [
        e1.getComponent(TransformGroupComponent).data.group,
        e2.getComponent(TransformGroupComponent).data.group
      ];
      const [p1, p2] = [
        g1.getWorldPosition(Constants.WORLD_POS).clone(),
        g2.getWorldPosition(Constants.WORLD_POS).clone()
      ];
      linepnts.push(p1, p2);
    }
    GEOM.setFromPoints(linepnts);
    this.data.line = new LineSegments(GEOM.clone(), OBJ_MAT);

    const scene = this.dependendQueries[0].entities[0].getComponent(SceneComponent);
    scene.data.scene.add(this.data.line);
  }
}

export interface CSSMarkerData {
  mesh: CSS2DObject;
  containerDiv: HTMLDivElement;
  diamondDiv: HTMLDivElement;
  txtDiv: HTMLDivElement;
}
export class CSSMarkerComponent extends Component<CSSMarkerData> {
  static dependencies = [
    operand("self", TransformGroupComponent), operand("self", BaseDataComponent)
  ];
  static typeID = crypto.randomUUID();

  public init(world: World) {
    if (!this.dependendQueries) return;
    const tcomp = this.dependendQueries[0].entities[0].getComponent(TransformGroupComponent);
    const bcomp = this.dependendQueries[0].entities[0].getComponent(BaseDataComponent);

    const containerDiv = document.createElement("div");
    const markerDiv = document.createElement("div");
    const txtDiv = document.createElement("div");
    containerDiv.appendChild(markerDiv);
    containerDiv.appendChild(txtDiv);
    containerDiv.className = "markerContainer";
    markerDiv.className = "markerDiamond";
    txtDiv.className = "markerText";
    txtDiv.textContent = bcomp.data.name.toUpperCase();

    const f = (e: MouseEvent) => {
      e.stopImmediatePropagation();
      e.preventDefault();
      world.store.focusTarget = bcomp.data.name.toLowerCase();
      const sys = world.sysManager.getSystem(CameraFocusSystem);
      if (!sys) return;
      sys.enabled = true;
    };

    containerDiv.ondblclick = markerDiv.ondblclick = txtDiv.ondblclick = f;

    const markerLabel = new CSS2DObject(containerDiv);
    tcomp.data.group.add(markerLabel);
    this.data = {
      mesh: markerLabel,
      containerDiv,
      diamondDiv: markerDiv,
      txtDiv
    }

    const entity = this.dependendQueries[0].entities[0]
    if (entity.getComponent(ParticleRingTypeComponent)) {
      const rad = entity.getComponent(RadiusComponent).data.drawRadius
      // markerLabel.position.x += rad
      markerLabel.position.z -= rad
    }
  }
}

export interface ParentComponentData {
  parent: Entity;
  dyn: boolean;
}
export class ParentComponent extends Component<ParentComponentData> {
  static dependencies = [
    operand("self", BaseDataComponent),
    operand("self", TransformGroupComponent),
    operand("self", RotGroupComponent)
  ];
  static typeID = crypto.randomUUID();

  static getDefaults(dyn = false) {
    // dynamic means we're skipping the parenting step
    return { dyn };
  }

  public init(world: World) {
    if (!this.dependendQueries) return;

    const self = this.dependendQueries[0].entities[0];
    const name = self.getComponent(BaseDataComponent).data.parent?.toLowerCase();

    const parent = world.ecManager.entities.find((e) => {
      const c = e.getComponent(BaseDataComponent);
      if (!c) return false;
      return c.data.name.toLowerCase() === name;
    });
    if (!parent) {
      console.warn("No parent was found.");
      return;
    }
    this.data.parent = parent;

    if (this.data.dyn) {
      return;
    }

    const rgrp = self.getComponent(RotGroupComponent).data.group;
    const ptgrp = parent.getComponent(TransformGroupComponent).data.group;
    const prgrp = parent.getComponent(RotGroupComponent).data.group;

    ptgrp.getWorldPosition(Constants.WORLD_POS);
    rgrp.position.add(Constants.WORLD_POS);
    prgrp.add(rgrp);
  }
}

export class ParticleRingComponent extends Component<object> {
  static dependencies = [
    operand("self", ParticleRingTypeComponent),
    operand("self", ParentComponent),
    operand("self", UniformsComponent)
  ];
  static typeID = crypto.randomUUID();

  public init() {
    if (!this.dependendQueries) return;

    const self = this.dependendQueries[0].entities[0];
    const trans = self.getComponent(ParentComponent).data.parent.getComponent(TransformGroupComponent).data.group;
    const ucomp = self.getComponent(UniformsComponent);
    trans.getWorldPosition(Constants.WORLD_POS);
    console.log(Constants.WORLD_POS);
    ucomp.data.basePos.value = Constants.WORLD_POS.clone();
    console.log(self.getComponent(MeshComponent).data.mesh);
  }
}
