import { World } from "../ecs/World";
import { buildSun } from "../Factories/SunFactory";
import { RenderComponent, SceneComponent, CameraComponent } from "../baseclasses/CommonComponents";

export function buildCosmicMap(world:World) {
    let sun = world.ecManager.createEntity()

    buildSun(sun, { 
        highTemp: 7000, lowTemp: 3000, 
        name: "sol", 
        rotationPeriod: 648, 
        radius: 508328.2,
    })
  
    // Renderer
    world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getDefaults(world));
  
    // Renderer
    world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getDefaults());
  
    // Camera
    world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getDefaults(world));
  
    world.load()
}