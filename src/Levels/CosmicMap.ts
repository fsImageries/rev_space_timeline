import { World } from "../ecs/World";
import { buildSun } from "../Factories/SunFactory";
import { RenderComponent, SceneComponent, CameraComponent } from "../baseclasses/CommonComponents";

export function registerCosmicMap(world:World) {

    buildSun(world.ecManager.createEntity(), { 
        highTemp: 7100, lowTemp: 3100, 
        name: "Sol", 
        rotationPeriod: 648, 
        radius: 3000,
        disableLight: true
    })

    buildSun(world.ecManager.createEntity(), { 
        highTemp: 4500, lowTemp: 3500, 
        name: "Epsilon Eridani", 
        rotationPeriod: 1000, 
        radius: 2200,
        distanceToParent: [1000000, 300000],
        disableLight: true
    })
  
    // Renderer
    world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getDefaults(world));
  
    // Renderer
    world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getDefaults());
  
    // Camera
    world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getDefaults(world));
  
    world.load()
}