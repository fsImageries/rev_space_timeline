import { buildSun } from "../Factories/SunFactory";
import { CameraComponent, RenderComponent, SceneComponent } from "../baseclasses/CommonComponents";
import { BasicRingComponent, BasicRingTextComponent, CosmicMapSunTextComponent, DiskLinesComponent, LineSegmentData, ObjectLineComponent, ObjectLineData } from "../baseclasses/MeshComponents";
import { World } from "../ecs/World";
import Constants from "../helpers/Constants";

export function registerCosmicMap(world: World) {
    initSuns(world)
    initLines(world)
    initCommon(world)
    world.load()
}

function initSuns(world: World) {
    buildSun(world.ecManager.createEntity(), {
        highTemp: 7100, lowTemp: 3100,
        name: "Sol",
        rotationPeriod: 648,
        radius: 3000,
        disableLight: true,
        texts: ["Earth", "- Moon", "Mars", "- Phobos", "Europa"]
    })
        .addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults())

    buildSun(world.ecManager.createEntity(), {
        highTemp: 5500, lowTemp: 3500,
        name: "Epsilon Eridani",
        rotationPeriod: 1000,
        radius: 2200,
        distanceToParent: [Constants.LIGHTYEAR * 10.47, -(Constants.LIGHTYEAR * 3)],
        disableLight: true,
        draw: { initRot: Math.PI * 2.1 },
        texts: ["Yellowstone [GRUBS]", "- Marcos Eye", "Tangerine Dream", "Conjoiner Nest", "- Conjoiner Comet"]
    })
        .addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true))

    buildSun(world.ecManager.createEntity(), {
        highTemp: 6000, lowTemp: 3000,
        name: "p Eridani",
        rotationPeriod: 1000,
        radius: 2200,
        distanceToParent: [Constants.LIGHTYEAR * 12.47, -(Constants.LIGHTYEAR * 7)],
        disableLight: true,
        draw: { initRot: Math.PI * -1.9 * -1 },
        texts: ["Ararat [PATTERN JUGGLERS, NESTBUILDERS]"]
    })
        .addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true))
}

function initLines(world: World) {
    world.ecManager.createEntity()
        .addComponent(BasicRingComponent, BasicRingComponent.getDefaults(1))
        .addComponent(BasicRingTextComponent, BasicRingTextComponent.getDefaults("1LY", 15))

    world.ecManager.createEntity()
        .addComponent(BasicRingComponent, BasicRingComponent.getDefaults(5))
        .addComponent(BasicRingTextComponent, BasicRingTextComponent.getDefaults("5LY", 15))

    world.ecManager.createEntity()
        .addComponent(BasicRingComponent, BasicRingComponent.getDefaults(15))
        .addComponent(BasicRingTextComponent, BasicRingTextComponent.getDefaults("15LY", 15))

    world.ecManager.createEntity()
        .addComponent(DiskLinesComponent, {} as LineSegmentData)

    const linepairs = [
        "Epsilon Eridani", "p Eridani",
    ]
    world.ecManager.createEntity()
        .addComponent(ObjectLineComponent, { pairs: linepairs } as unknown as ObjectLineData);
}


function initCommon(world: World) {
    // Renderer
    world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getDefaults(world));

    // Renderer
    world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getDefaults());

    // Camera
    world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getDefaults(world));
}