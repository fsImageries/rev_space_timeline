import { RenderSystem, AxisRotSystem, SunUniformsUpdateSystem, CameraFocusSystem, RaycasterSystem } from "../baseclasses/CommonSystems";
import { Vector3 } from "three";
import { buildSun } from "../Factories/SunFactory";
import {
  BasicRingComponent,
  BasicRingTextComponent,
  CosmicMapSunTextComponent,
  DiskLinesComponent,
  LineSegmentData,
  ObjectLineComponent,
  ObjectLineData
} from "../baseclasses/imports";
import { World } from "../ecs/World";
import Constants from "../helpers/Constants";
import { initCommon } from "./Common";

export function initCosmicMap(world: World) {
  Constants.DISTANCE_SCALE = 1e-11
  Constants.SIZE_SCALE = 1.5e-3

  world.sysManager
    .registerSystem(RenderSystem)
    .registerSystem(AxisRotSystem)
    .registerSystem(SunUniformsUpdateSystem)
    .registerSystem(CameraFocusSystem)
    .registerSystem(RaycasterSystem)

  initSuns(world);
  initLines(world);
  initCommon(world, new Vector3(0, 2118 * 0.5, 10175 * 0.5));
  world.load();
}

function initSuns(world: World) {
  buildSun(world.ecManager.createEntity(), {
    highTemp: 7100,
    lowTemp: 3100,
    name: "Sol",
    rotationPeriod: 648,
    radius: 3000,
    disableLight: true,
    texts: ["Earth", "- Moon", "Mars", "- Phobos", "Europa"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults());

  buildSun(world.ecManager.createEntity(), {
    highTemp: 5500,
    lowTemp: 3500,
    name: "Epsilon Eridani",
    rotationPeriod: 1000,
    radius: 2200,
    distanceToParent: [Constants.LIGHTYEAR * 10.47, -(Constants.LIGHTYEAR * 3)],
    disableLight: true,
    draw: { initRot: Math.PI * 2.1 },
    texts: ["Yellowstone [GRUBS]", "- Marcos Eye", "Tangerine Dream", "Conjoiner Nest", "- Conjoiner Comet"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun(world.ecManager.createEntity(), {
    highTemp: 6000,
    lowTemp: 3000,
    name: "p Eridani",
    rotationPeriod: 1000,
    radius: 2200,
    distanceToParent: [Constants.LIGHTYEAR * 12.47, -(Constants.LIGHTYEAR * 17)],
    disableLight: true,
    draw: { initRot: Math.PI * -1.9 * -1 },
    texts: ["Ararat [PATTERN JUGGLERS, NESTBUILDERS]"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun(world.ecManager.createEntity(), {
    highTemp: 7000,
    lowTemp: 3000,
    name: "Delta Pavonis",
    rotationPeriod: 1356,
    radius: 3300,
    distanceToParent: [Constants.LIGHTYEAR * 7.5, -(Constants.LIGHTYEAR * 20)],
    disableLight: true,
    draw: { initRot: (Math.PI / 2) * -1 },
    texts: [
      "Resurgam [AMARATIN]",
      "Hades [HADES MATRIX CIVILISATION]",
      "- Cerberus [INHIBITORS, AMARATIN, CERBERUS CIVILISATION]",
      "ROC"
    ]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun(world.ecManager.createEntity(), {
    highTemp: 4000,
    lowTemp: 3000,
    name: "Lacaille 9352",
    rotationPeriod: 1156,
    radius: 2000,
    distanceToParent: [Constants.LIGHTYEAR * 10.47, -(Constants.LIGHTYEAR * 5)],
    disableLight: true,
    draw: { initRot: Math.PI * 1.65 },
    texts: ["Fand"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun(world.ecManager.createEntity(), {
    highTemp: 2000,
    lowTemp: 900,
    name: "Luyten 726-8",
    rotationPeriod: 956,
    radius: 1200,
    distanceToParent: [Constants.LIGHTYEAR * 8, -(Constants.LIGHTYEAR * 4)],
    disableLight: true,
    draw: { initRot: Math.PI * 1.9 },
    texts: ["Luyten 726-8 Cometary Halo"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun(world.ecManager.createEntity(), {
    highTemp: 4000,
    lowTemp: 3000,
    name: "Ross 248",
    rotationPeriod: 1256,
    radius: 1000,
    distanceToParent: [Constants.LIGHTYEAR * 8.65, Constants.LIGHTYEAR * 5],
    disableLight: true,
    draw: { initRot: Math.PI * 1.72 },
    texts: ["Diadem"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun(world.ecManager.createEntity(), {
    highTemp: 4000,
    lowTemp: 3000,
    name: "61 Cygni",
    rotationPeriod: 1256,
    radius: 2000,
    distanceToParent: [Constants.LIGHTYEAR * 7.65, Constants.LIGHTYEAR * 6],
    disableLight: true,
    draw: { initRot: Math.PI * 1.558 },
    texts: ["Sky's Edge"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun(world.ecManager.createEntity(), {
    highTemp: 3000,
    lowTemp: 500,
    name: "Lalande 21185",
    rotationPeriod: 1256,
    radius: 1225,
    distanceToParent: [Constants.LIGHTYEAR * 6, Constants.LIGHTYEAR * 4.5],
    disableLight: true,
    draw: { initRot: Math.PI * 0.75 },
    texts: ["Zion"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun(world.ecManager.createEntity(), {
    highTemp: 3000,
    lowTemp: 500,
    name: "Gliese 687",
    rotationPeriod: 756,
    radius: 1560,
    distanceToParent: [Constants.LIGHTYEAR * 4, Constants.LIGHTYEAR * 10],
    disableLight: true,
    draw: { initRot: Math.PI * 1.3 },
    texts: ["Haven"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun(world.ecManager.createEntity(), {
    highTemp: 5000,
    lowTemp: 500,
    name: "Groombridge 1618",
    rotationPeriod: 756,
    radius: 1450,
    distanceToParent: [Constants.LIGHTYEAR * 8.65, Constants.LIGHTYEAR * 9.5],
    disableLight: true,
    draw: { initRot: Math.PI * 0.72 },
    texts: ["Turquoise [PATTERN JUGGLERS]"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults());

  buildSun(world.ecManager.createEntity(), {
    highTemp: 10000,
    lowTemp: 500,
    name: "107 Piscium",
    rotationPeriod: 856,
    radius: 3000,
    distanceToParent: [Constants.LIGHTYEAR * 20.47, Constants.LIGHTYEAR * 7.5],
    disableLight: true,
    draw: { initRot: Math.PI * -0.1 },
    texts: ["Haldora [SHADOWS]", "- Hela [SCUTTLERS, NESTBUILDERS(?)]"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));
}

function initLines(world: World) {
  world.ecManager
    .createEntity()
    .addComponent(BasicRingComponent, BasicRingComponent.getDefaults(1))
    .addComponent(BasicRingTextComponent, BasicRingTextComponent.getDefaults("1LY", 15));

  world.ecManager
    .createEntity()
    .addComponent(BasicRingComponent, BasicRingComponent.getDefaults(5))
    .addComponent(BasicRingTextComponent, BasicRingTextComponent.getDefaults("5LY", 15));

  world.ecManager
    .createEntity()
    .addComponent(BasicRingComponent, BasicRingComponent.getDefaults(15))
    .addComponent(BasicRingTextComponent, BasicRingTextComponent.getDefaults("15LY", 15));

  world.ecManager.createEntity().addComponent(DiskLinesComponent, {} as LineSegmentData);

  const linepairs = [
    "Epsilon Eridani",
    "p Eridani",
    "Epsilon Eridani",
    "Delta Pavonis",
    "Epsilon Eridani",
    "107 Piscium",
    "Epsilon Eridani",
    "61 Cygni",
    "p Eridani",
    "Delta Pavonis",
    "61 Cygni",
    "Sol",
    "Ross 248",
    "Sol"
  ];
  world.ecManager.createEntity().addComponent(ObjectLineComponent, { pairs: linepairs } as unknown as ObjectLineData);
}
