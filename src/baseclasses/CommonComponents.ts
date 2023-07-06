import { Color, EquirectangularReflectionMapping, PCFSoftShadowMap, PerspectiveCamera, Scene, Vector3, WebGLRenderer, sRGBEncoding } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { Component, TypeComponent } from "../ecs/Component";
import { operand } from "../ecs/utils";
import { SystemObjectData } from "../dataInterfaces";
import { Store } from "../ecs/Store";
import Constants from "../helpers/Constants";

export interface RenderComponentData {
  // canvas: HTMLCanvasElement;
  renderer3d: WebGLRenderer;
  renderer2d: CSS2DRenderer;
}

export class RenderComponent extends Component<RenderComponentData> {
  static typeID = crypto.randomUUID();
  static getDefaults(): RenderComponentData {
    const renderer = new WebGLRenderer({
      canvas: Store.getInstance().store.canvas,
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setClearColor(0x000000);

    const renderer2d = new CSS2DRenderer();
    document.body.appendChild(renderer2d.domElement);
    renderer2d.setSize(window.innerWidth, window.innerHeight);
    renderer2d.domElement.style.position = "absolute";
    renderer2d.domElement.style.top = "0px";
    renderer2d.domElement.id = "renderer2d";

    // renderer2d.domElement.ondblclick = (e) => {
    //   console.log(e.target);
    //   (e.target as HTMLElement).dispatchEvent(new MouseEvent(e.type));
    // };

    return { renderer3d: renderer, renderer2d: renderer2d };
  }
}

export interface SceneComponentData {
  scene: Scene;
}
export class SceneComponent extends Component<SceneComponentData> {
  static typeID = crypto.randomUUID();
  static getDefaults(): SceneComponentData {
    const scene = new Scene();
    // Sky box
    const backgroundImage = Constants.TEX_LOAD("./starmap_8k.jpg");
    backgroundImage.mapping = EquirectangularReflectionMapping;
    backgroundImage.encoding = sRGBEncoding;
    scene.background = backgroundImage;
    return { scene };
  }
}

export interface CameraComponentData {
  active: PerspectiveCamera;
  freeCtrl?: OrbitControls;
  defaultPos?: Vector3;
}
export class CameraComponent extends Component<CameraComponentData> {
  static dependencies = [operand("exist", RenderComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(defaultPos?: Vector3): CameraComponentData {
    const cam = new PerspectiveCamera(
      55,
      Store.getInstance().store.canvas.clientWidth / Store.getInstance().store.canvas.clientHeight,
      0.001,
      1e12
    );
    cam.position.z = 1200;
    return {
      active: cam,
      defaultPos
    };
  }

  public init() {
    if (!this.dependendQueries) return;

    // TODO do something about this, like comon
    if (this.data.defaultPos) this.data.active.position.copy(this.data.defaultPos);
    this.data.freeCtrl?.update();

    const renderer = this.dependendQueries[0].entities[0].getComponent(RenderComponent).data.renderer3d;
    this.data.freeCtrl = new OrbitControls(this.data.active, renderer.domElement);
    this.data.freeCtrl.enableDamping = true;
    this.data.freeCtrl.dampingFactor = 0.5;
  }
}

export interface BaseDataData {
  name: string;
  uuid: string;
  parent?: string;
  texts?: string[];
}
export class BaseDataComponent extends Component<BaseDataData> {
  static typeID = crypto.randomUUID();
  static getDefaults(d: SystemObjectData): BaseDataData {
    return {
      name: d.name,
      uuid: crypto.randomUUID() as string,
      parent: d.parent,
      texts: d.texts
    };
  }
}

export interface UniformsData {
  [uniformName: string]: { value: number | Vector3 | Color | number[] };
}
export class UniformsComponent extends Component<UniformsData> {
  static typeID = crypto.randomUUID();
}

export class SunTypeComponent extends TypeComponent {
  static typeID = crypto.randomUUID();
}
export class PlanetTypeComponent extends TypeComponent {
  static typeID = crypto.randomUUID();
}

export class MoonTypeComponent extends TypeComponent {
  static typeID = crypto.randomUUID();
}

export class ParticleRingTypeComponent extends TypeComponent {
  static typeID = crypto.randomUUID();
}
