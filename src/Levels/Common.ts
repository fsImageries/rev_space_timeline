import { Vector3 } from "three";
import { RenderComponent, SceneComponent, CameraComponent } from "../baseclasses/imports";
import { World } from "../ecs/World";

export function initCommon(world: World, camPos?: Vector3) {
  // Renderer
  world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getDefaults(world));

  // Renderer
  world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getDefaults());

  // Camera
  world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getDefaults(world, camPos));
}
