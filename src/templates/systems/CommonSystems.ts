import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { System } from "../../ecs/System";
import { operand } from "../../ecs/utils";
import {
  CameraComponent,
  RenderComponent,
  SceneComponent
} from "../components/CommonComponents";

const requiredElapsed = 1000 / 60; // desired interval is 60fps
export class RenderSystem extends System {
  static queries = [
    [operand("exist", RenderComponent)],
    [operand("exist", SceneComponent)],
    [operand("exist", CameraComponent)]
  ];
  execute(delta: number): void {
    const [render, scene, camera] = [
      this.queries[0].entities[0],
      this.queries[1].entities[0],
      this.queries[2].entities[0]
    ];
    const rcomp = render.getComponent(RenderComponent) as RenderComponent;
    const scomp = scene.getComponent(SceneComponent) as SceneComponent;
    const ccomp = camera.getComponent(CameraComponent) as CameraComponent;

    if (delta > requiredElapsed) {
      const renderer = rcomp.data.renderer3d;
      const renderer2d = rcomp.data.renderer2d;
      const cameraa = ccomp.data.active;

      if (resizeRendererToDisplaySize(renderer, renderer2d)) {
        const canvas = renderer.domElement;
        cameraa.aspect = canvas.clientWidth / canvas.clientHeight;
        cameraa.updateProjectionMatrix();
      }

      ccomp.data.freeCtrl?.update();
      rcomp.data.renderer3d.clear();
      renderer.render(scomp.data.scene, ccomp.data.active);
      renderer2d.render(scomp.data.scene, ccomp.data.active);
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