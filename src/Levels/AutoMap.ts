import { randFloat } from "three/src/math/MathUtils";
import { buildOortCloud } from "../Factories/OortFactory";
import { buildParticlering } from "../Factories/ParticleRingFactory";
import { buildPlanet } from "../Factories/PlanetFactory";
import { buildSun } from "../Factories/SunFactory";
import {
  AxisRotSystem,
  CSSMarkerSystem,
  CameraFocusSystem,
  RaycasterSystem,
  OrbitRotSystem,
  RenderSystem,
  SunUniformsUpdateSystem,
  InfoPanelCameraCoordSystem
} from "../baseclasses/imports";
import { SunData, SystemData } from "../dataInterfaces";
import { Store } from "../ecs/Store";
import { World } from "../ecs/World";
import { initCommonEntities } from "./Common";
import GLOBALS from "../helpers/Constants";

const planetCheck = ["moon", "planet"];

export function initSystem(world: World, data: SystemData) {
  GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}`);

  Store.getInstance().state.DISTANCE_SCALE = 3e-8;
  Store.getInstance().state.SIZE_SCALE = 1e-5;

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
  GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}_systems`);

  GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}_entities`);
  for (const d of data.objects) {
    if (d.type === "sun") {
      buildSun(world.ecManager.createEntity(), d as SunData);
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

  GLOBALS.LOAD_MANAGER.itemStart(`://${data.name}_world`);
  initCommonEntities(world);
  world.load();
  world.uiManager.infoPanel.init(data.texts, { name: data.name, constellation: data.constellation });
  GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}_world`);

  if (data.startTarget) {
    Store.getInstance().store.focusTarget = data.startTarget;
    const sys = world.sysManager.getSystem(CameraFocusSystem);
    if (sys) sys.enabled = true;
  }
  GLOBALS.LOAD_MANAGER.itemEnd(`://${data.name}`);
}
