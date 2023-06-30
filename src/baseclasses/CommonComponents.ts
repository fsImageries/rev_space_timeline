import { Color, PCFSoftShadowMap, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Component, TypeComponent } from "../ecs/Component";
import { World } from "../ecs/World";
import { operand } from "../ecs/utils";

export interface RenderComponentData {
  // canvas: HTMLCanvasElement;
  renderer: WebGLRenderer;
}

export class RenderComponent extends Component<RenderComponentData> {
  static typeID = crypto.randomUUID();
  static getDefaults(world: World): RenderComponentData {
    const renderer = new WebGLRenderer({
      canvas: world.store["canvas"],
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setClearColor(0x000000);

    return { renderer };
  }
}

export interface SceneComponentData {
  scene: Scene;
}
export class SceneComponent extends Component<SceneComponentData> {
  static typeID = crypto.randomUUID();
  static getDefaults(): SceneComponentData {
    const scene = new Scene();
    return { scene };
  }
}

export interface CameraComponentData {
  active: PerspectiveCamera;
  freeCtrl?: OrbitControls;
  defaultPos?: Vector3,
}
export class CameraComponent extends Component<CameraComponentData> {
  static dependencies = [operand("exist", RenderComponent)];
  static typeID = crypto.randomUUID();

  static getDefaults(world: World, defaultPos?:Vector3): CameraComponentData {
    const cam = new PerspectiveCamera(55, world.store["canvas"].clientWidth / world.store["canvas"].clientHeight, 0.001, 1e12);
    cam.position.z = 1200;
    return {
      active: cam,
      defaultPos
    };
  }

  public init() {
    if (!this.dependendQueries) return;

    // TODO do something about this, like comon
    if (this.data.defaultPos)
    this.data.active.position.copy(this.data.defaultPos)
    this.data.freeCtrl?.update();

    const renderer = (this.dependendQueries[0].entities[0].getComponent(RenderComponent) as RenderComponent).data
      .renderer;
    this.data.freeCtrl = new OrbitControls(this.data.active, renderer.domElement);
  }
}

export interface BaseDataData {
  name: string;
  uuid: string;
  texts?: string[];
}
export class BaseDataComponent extends Component<BaseDataData> {
  static typeID = crypto.randomUUID();
}

export interface UniformsData {
  [uniformName: string]: { value: number|Vector3|Color };
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
