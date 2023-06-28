import { buildSun } from "../Factories/SunFactory";
import { CameraComponent, RenderComponent, SceneComponent } from "../baseclasses/CommonComponents";
import { BasicRingComponent, DiskLinesComponent, LineSegmentData } from "../baseclasses/MeshComponents";
import { World } from "../ecs/World";
import Constants from "../helpers/Constants";

export function registerCosmicMap(world: World) {

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
        distanceToParent: [Constants.LIGHTYEAR * 10.47, -(Constants.LIGHTYEAR * 3)],
        disableLight: true,
        draw: { initRot: Math.PI * 2.1 }
    })

    buildSun(world.ecManager.createEntity(), {
        highTemp: 5100, lowTemp: 1500,
        name: "p Eridani",
        rotationPeriod: 1000,
        radius: 2200,
        distanceToParent: [Constants.LIGHTYEAR * 12.47, -(Constants.LIGHTYEAR * 7)],
        disableLight: true,
        draw: { initRot: Math.PI * -1.9 * -1 }
    })

    world.ecManager.createEntity()
        .addComponent(BasicRingComponent, BasicRingComponent.getDefaults())

    world.ecManager.createEntity()
        .addComponent(BasicRingComponent, BasicRingComponent.getDefaults(5))

    world.ecManager.createEntity()
        .addComponent(BasicRingComponent, BasicRingComponent.getDefaults(15))

    world.ecManager.createEntity()
        .addComponent(DiskLinesComponent, {} as LineSegmentData)

    // Renderer
    world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getDefaults(world));

    // Renderer
    world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getDefaults());

    // Camera
    world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getDefaults(world));

    world.load()
}