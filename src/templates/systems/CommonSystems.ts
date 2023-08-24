import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { System } from "../../ecs/System";
import { operand } from "../../ecs/utils";
import {
  CameraComponent,
  FollowCameraComponent,
  RenderComponent,
  SceneComponent
} from "../components/CommonComponents";
import { Store } from "../../ecs/Store";
import { FollowCameraSystem } from "./CameraSystems";

const requiredElapsed = 1000 / 60; // desired interval is 60fps
export class RenderSystem extends System {
  static queries = [
    [operand("exist", RenderComponent)],
    [operand("exist", SceneComponent)],
    [operand("exist", CameraComponent)],
    [operand("exist", FollowCameraComponent)]
  ];
  execute(delta: number): void {
    if (delta > requiredElapsed) {
      const [render, scene, camera, followcam] = [
        this.queries[0].entities[0],
        this.queries[1].entities[0],
        this.queries[2].entities[0],
        this.queries[3].entities[0]
      ];
      const rcomp = render.getComponent(RenderComponent) as RenderComponent;
      const scomp = scene.getComponent(SceneComponent) as SceneComponent;
      const ccomp = camera.getComponent(CameraComponent) as CameraComponent;
      
  
      const store = Store.getInstance()

      const renderer = rcomp.data.renderer3d;
      const renderer2d = rcomp.data.renderer2d;

      let cam;
      const sys = this.world.sysManager.getSystem(FollowCameraSystem)
      if (store.state.followCam) {
        const fcomp = followcam.getComponent(FollowCameraComponent);
        cam = fcomp.data.cam

        if (sys && !sys.enabled) sys.enabled = true
      } else {
        cam = ccomp.data.active
        if (sys && sys.enabled) sys.enabled = false
      }

      if (resizeRendererToDisplaySize(renderer, renderer2d)) {
        const canvas = renderer.domElement;
        cam.aspect = canvas.clientWidth / canvas.clientHeight;
        cam.updateProjectionMatrix();
      }

      ccomp.data.freeCtrl?.update();
      rcomp.data.renderer3d.clear();
      renderer.render(scomp.data.scene, cam);
      renderer2d.render(scomp.data.scene, cam);
    }
  }
}

export function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer, renderer2d: CSS2DRenderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
    renderer2d.setSize(width, height);
  }
  return needResize;
}
