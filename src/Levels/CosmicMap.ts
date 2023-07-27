import {
  RenderSystem,
  AxisRotSystem,
  SunUniformsUpdateSystem,
  CameraFocusSystem,
  RaycasterSystem,
  CosmicMapStartTextSystem,
  InfoPanelCameraCoordSystem
} from "../templates/__init__";
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
} from "../templates/__init__";
import { World } from "../ecs/World";
import { initCommonEntities } from "./Common";
import { Store } from "../ecs/Store";
import { SunData, TextObject } from "../dataInterfaces";
import { Entity } from "../ecs/Entity";
import GLOBALS from "../helpers/Constants";

export function initCosmicMap(world: World) {
  GLOBALS.LOAD_MANAGER.itemStart("://CosmicMap");
  Store.getInstance().state.DISTANCE_SCALE = 1e-11;
  Store.getInstance().state.SIZE_SCALE = 1.5e-3;

  world.sysManager
    .registerSystem(RenderSystem)
    .registerSystem(AxisRotSystem)
    .registerSystem(SunUniformsUpdateSystem)
    .registerSystem(CameraFocusSystem)
    .registerSystem(RaycasterSystem)
    .registerSystem(CosmicMapStartTextSystem)
    .registerSystem(InfoPanelCameraCoordSystem);

  GLOBALS.LOAD_MANAGER.itemStart("://CosmicMap_suns");
  initSuns(world);
  GLOBALS.LOAD_MANAGER.itemEnd("://CosmicMap_suns");

  GLOBALS.LOAD_MANAGER.itemStart("://CosmicMap_world");
  initLines(world);
  Store.getInstance().state.camPos = new Vector3(0, 2118 * 0.5, 10175 * 0.65);
  initCommonEntities(world, Store.getInstance().state.camPos);
  world.load();

  const textObjs: TextObject[] = [
    {
      name: "txt",
      all: true,
      info: `<div class="year">Unknown Locations:</div>
        <br>•Aertha (Galactic North) [Nestbuilders]
        <br>•Bloater (Revelation Space)
        <br>•Golgotha (Diamond Dogs) [Blood Spire Civilisation]
        <br>•Grand Teton (Multiple)
        <br>•Hope (Galactic North)
        <br>•Lascaille's Shroud (Muliple) [Shrouder Civilisation, Amarantin]
        <br>•Shiva-Parvarti (Galactic North)
        <br>•Spindrift (Revelation Space) [Pattern Jugglers]
        <br>
        <br><div class="year">Distant Locations:</div>
        <br>•Hyades Cluster (Galactic North)
        <br>•Pleiades Cluster (Galactic North)
        <br>
        <br>
        Original Map produced by Richard Terrett`
    }
  ];
  world.uiManager.infoPanel.init(textObjs, { name: "Cosmic Map", constellation: "" });
  GLOBALS.LOAD_MANAGER.itemEnd("://CosmicMap_world");

  const sys = world.sysManager.getSystem(CameraFocusSystem);
  if (sys) sys.enabled = true;
  GLOBALS.LOAD_MANAGER.itemEnd("://CosmicMap");
}

function initSuns(world: World) {
  const buildSun2 = (e: Entity, d: SunData) => {
    d = {
      ...d,
      draw: {
        ...d.draw,
        disableMarker: true
      }
    };
    return buildSun(e, d);
  };

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 7100,
    lowTemp: 3100,
    name: "Sol",
    rotationPeriod: 648,
    radius: 3000,
    disableLight: true,
    texts: ["Earth", "- Moon", "Mars", "- Phobos", "Europa"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults());

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 5500,
    lowTemp: 3500,
    name: "Epsilon Eridani",
    rotationPeriod: 1000,
    radius: 2200,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 10.47, -(Store.getInstance().store.LIGHTYEAR * 3)],
    disableLight: true,
    draw: { initRot: Math.PI * 2.1 },
    texts: ["Yellowstone [GRUBS]", "- Marcos Eye", "Tangerine Dream", "Conjoiner Nest", "- Conjoiner Comet"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 6000,
    lowTemp: 3000,
    name: "p Eridani",
    rotationPeriod: 1000,
    radius: 2200,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 12.47, -(Store.getInstance().store.LIGHTYEAR * 17)],
    disableLight: true,
    draw: { initRot: Math.PI * -1.9 * -1 },
    texts: ["Ararat [PATTERN JUGGLERS, NESTBUILDERS]"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 7000,
    lowTemp: 3000,
    name: "Delta Pavonis",
    rotationPeriod: 1356,
    radius: 3300,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 7.5, -(Store.getInstance().store.LIGHTYEAR * 20)],
    disableLight: true,
    draw: { initRot: (Math.PI / 2) * -1 },
    texts: [
      "Resurgam [AMARATIN]",
      "Hades [HADES MATRIX CIVILISATION]",
      "- Cerberus [INHIBITORS, AMARATIN, CERBERUS CIVILISATION]",
      "ROC"
    ]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 4000,
    lowTemp: 3000,
    name: "Lacaille 9352",
    rotationPeriod: 1156,
    radius: 2000,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 10.47, -(Store.getInstance().store.LIGHTYEAR * 5)],
    disableLight: true,
    draw: { initRot: Math.PI * 1.65 },
    texts: ["Fand"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 2000,
    lowTemp: 900,
    name: "Luyten 726-8",
    rotationPeriod: 956,
    radius: 1200,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 8, -(Store.getInstance().store.LIGHTYEAR * 4)],
    disableLight: true,
    draw: { initRot: Math.PI * 1.9 },
    texts: ["Luyten 726-8 Cometary Halo"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 4000,
    lowTemp: 3000,
    name: "Ross 248",
    rotationPeriod: 1256,
    radius: 1000,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 8.65, Store.getInstance().store.LIGHTYEAR * 5],
    disableLight: true,
    draw: { initRot: Math.PI * 1.72 },
    texts: ["Diadem"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 4000,
    lowTemp: 3000,
    name: "61 Cygni",
    rotationPeriod: 1256,
    radius: 2000,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 7.65, Store.getInstance().store.LIGHTYEAR * 6],
    disableLight: true,
    draw: { initRot: Math.PI * 1.558 },
    texts: ["Sky's Edge"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 3000,
    lowTemp: 500,
    name: "Lalande 21185",
    rotationPeriod: 1256,
    radius: 1225,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 6, Store.getInstance().store.LIGHTYEAR * 4.5],
    disableLight: true,
    draw: { initRot: Math.PI * 0.75 },
    texts: ["Zion"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 3000,
    lowTemp: 500,
    name: "Gliese 687",
    rotationPeriod: 756,
    radius: 1560,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 4, Store.getInstance().store.LIGHTYEAR * 10],
    disableLight: true,
    draw: { initRot: Math.PI * 1.3 },
    texts: ["Haven"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 5000,
    lowTemp: 500,
    name: "Groombridge 1618",
    rotationPeriod: 756,
    radius: 1450,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 8.65, Store.getInstance().store.LIGHTYEAR * 9.5],
    disableLight: true,
    draw: { initRot: Math.PI * 0.72 },
    texts: ["Turquoise [PATTERN JUGGLERS]"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults());

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 10000,
    lowTemp: 500,
    name: "107 Piscium",
    rotationPeriod: 856,
    radius: 3000,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 20.47, Store.getInstance().store.LIGHTYEAR * 7.5],
    disableLight: true,
    draw: { initRot: Math.PI * -0.1 },
    texts: ["Haldora [SHADOWS]", "- Hela [SCUTTLERS, NESTBUILDERS(?)]"]
  }).addComponent(CosmicMapSunTextComponent, CosmicMapSunTextComponent.getDefaults(true));

  buildSun2(world.ecManager.createEntity(), {
    highTemp: 3800,
    lowTemp: 500,
    name: "AU Microscopii",
    rotationPeriod: 856,
    radius: 2800,
    distanceToParent: [Store.getInstance().store.LIGHTYEAR * 28.69, Store.getInstance().store.LIGHTYEAR * -26.4],
    disableLight: true,
    draw: { initRot: Math.PI * -.8 },
    texts: ["MichaelMas [Sun Hollow]"]
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

  world.ecManager
    .createEntity()
    .addComponent(BasicRingComponent, BasicRingComponent.getDefaults(25))
    .addComponent(BasicRingTextComponent, BasicRingTextComponent.getDefaults("25LY", 25));

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
    "Sol",
    "Epsilon Eridani",
    "AU Microscopii",
  ];
  world.ecManager.createEntity().addComponent(ObjectLineComponent, { pairs: linepairs } as unknown as ObjectLineData);
}
