import { System } from "../ecs/System";
import { CameraComponent, RenderComponent, SceneComponent } from "./CommonComponents";

const requiredElapsed = 1000 / 60; // desired interval is 60fps
export class RenderSystem extends System {
  // TODO need to determine if combined entity or entity per component
  static queries = [
    [RenderComponent],
    [SceneComponent],
    [CameraComponent]
  ];
  execute(delta: number): void {
    const [render, scene, camera] = [this.queries[0].entities[0], this.queries[1].entities[0], this.queries[2].entities[0]];
    const rcomp = render.getComponent(RenderComponent) as RenderComponent;
    const scomp = scene.getComponent(SceneComponent) as SceneComponent;
    const ccomp = camera.getComponent(CameraComponent) as CameraComponent;
    if (delta > requiredElapsed) {
      console.log(scomp.data.scene.children);
      rcomp.data.renderer.clear();
      rcomp.data.renderer.render(scomp.data.scene, ccomp.data.active);
    }
  }
}
