import { AmbientLight, Camera, Mesh, PCFSoftShadowMap, PerspectiveCamera, PointLight, Scene, WebGLRenderer } from "three";
import { Component } from "../ecs/Component";
import { World } from "../ecs/World";

export interface RenderComponentData {
    // canvas: HTMLCanvasElement;
    renderer: WebGLRenderer;
};

export class RenderComponent extends Component<RenderComponentData> {

    static setup(world:World):RenderComponentData {
        const renderer = new WebGLRenderer({
            canvas: world.canvas,
            antialias: true,
            alpha: true,
            logarithmicDepthBuffer: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = PCFSoftShadowMap;
        renderer.setClearColor(0x000000);

        return { renderer}
    }
}
RenderComponent.typeID = crypto.randomUUID()


export interface SceneComponentData {scene: Scene};
export class SceneComponent extends Component<SceneComponentData> { 

    static setup(): SceneComponentData {
        const scene = new Scene()
        const l = new AmbientLight("#ffffff",1)
        l.position.y = 100
        scene.add(l)
        return { scene }
    }
}
SceneComponent.typeID = crypto.randomUUID()


export interface MeshComponentData {mesh: Mesh};
export class MeshComponent extends Component<MeshComponentData> { }
MeshComponent.typeID = crypto.randomUUID()


export interface CameraComponentData {active: Camera, /*freeCtrl: OrbitControls */};
export class CameraComponent extends Component<CameraComponentData> {

    static setup(world:World): CameraComponentData {
        const cam = new PerspectiveCamera(30, world.canvas.clientWidth / world.canvas.clientHeight, 0.1, 1e12)
        cam.position.z =  100
        return {
            active: cam,
            // freeCtrl: new OrbitControls(new PerspectiveCamera(), )
        }
    }
 }
 CameraComponent.typeID = crypto.randomUUID()