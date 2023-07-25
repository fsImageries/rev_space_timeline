import { randFloat } from "three/src/math/MathUtils";
import { buildOortCloud } from "../Factories/OortFactory";
import { buildParticlering } from "../Factories/ParticleRingFactory";
import { buildPlanet } from "../Factories/PlanetFactory";
import { buildSun } from "../Factories/SunFactory";
import { SunData, SystemData } from "../dataInterfaces";
import { Store } from "../ecs/Store";
import { World } from "../ecs/World";
import GLOBALS from "../helpers/Constants";
import {
  AxisRotSystem,
  CSSMarkerSystem,
  CameraFocusSystem,
  InfoPanelCameraCoordSystem,
  MassComponent,
  OrbitRotSystem,
  RaycasterSystem,
  RenderSystem,
  SunUniformsUpdateSystem
} from "../templates/__init__";
import { BinaryStarSystem } from "../templates/systems/MeshSystems";
import { initCommonEntities } from "./Common";

const planetCheck = ["moon", "planet"];

export function initSystem(world: World, data: SystemData) {
  GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}`);

  // Store.getInstance().state.DISTANCE_SCALE = 3e-8;
  Store.getInstance().state.DISTANCE_SCALE = 3e-7;
  Store.getInstance().state.SIZE_SCALE = 1e-5;
  // Store.getInstance().state.ORB_SCALE = 10_000_000;

  initSystems(world, data);
  initEntities(world, data);
  initWorld(world, data);

  if (data.startTarget) {
    Store.getInstance().store.focusTarget = data.startTarget;
    const sys = world.sysManager.getSystem(CameraFocusSystem);
    if (sys) sys.enabled = true;
  }
  GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}`);
}

function initSystems(world: World, data: SystemData) {
  GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}_systems`);
  world.sysManager
    .registerSystem(RenderSystem)
    .registerSystem(AxisRotSystem)
    .registerSystem(OrbitRotSystem)
    .registerSystem(SunUniformsUpdateSystem)
    .registerSystem(CameraFocusSystem)
    .registerSystem(RaycasterSystem)
    .registerSystem(CSSMarkerSystem)
    .registerSystem(InfoPanelCameraCoordSystem);

  if (!data.isSingleSun) world.sysManager.registerSystem(BinaryStarSystem);
  GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}_systems`);
}

function initEntities(world: World, data: SystemData) {
  GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}_entities`);
  for (const d of data.objects) {
    if (d.type === "sun") {
      const entity = buildSun(world.ecManager.createEntity(), d as SunData);
      if (!data.isSingleSun && d.draw?.mass) {
        entity.addComponent(MassComponent, MassComponent.getDefaults(d.draw.mass, d.draw.vel, d.draw.acc));
      }
    }

    if (planetCheck.includes(d.type as string)) {
      d.draw = {
        ...d.draw,
        initRot: randFloat(-Math.PI, Math.PI)
      };
      buildPlanet(world.ecManager.createEntity(), d);
    }

    if (d.type === "particlering") {
      buildParticlering(world.ecManager.createEntity(), d);
    }

    if (d.type === "oortcloud") {
      buildOortCloud(world.ecManager.createEntity(), d);
    }
  }
  GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}_entities`);
}

function initWorld(world: World, data: SystemData) {
  GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}_world`);
  initCommonEntities(world);
  world.load();
  console.log(data.constellation)
  world.uiManager.infoPanel.init(data.texts, { name: data.name, constellation: data.constellation });
  GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}_world`);
}
