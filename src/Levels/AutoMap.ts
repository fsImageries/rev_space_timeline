import {
  AxisRotSystem,
  CSSMarkerSystem,
  CameraFocusSystem,
  OrbitRotSystem,
  RaycasterSystem,
  RenderSystem,
  SunUniformsUpdateSystem
} from "../baseclasses/imports";
import { buildOortCloud } from "../Factories/OortFactory";
import { buildParticlering } from "../Factories/ParticleRingFactory";
import { buildPlanet } from "../Factories/PlanetFactory";
import { buildSun } from "../Factories/SunFactory";
import { World } from "../ecs/World";
import { SunData, SystemData } from "../dataInterfaces";
import { initCommon } from "./Common";
import { Store } from "../ecs/Store";

const planetCheck = ["moon", "planet"];

export function initSystem(world: World, data: SystemData) {
  Store.getInstance().state.DISTANCE_SCALE = 3e-8;
  Store.getInstance().state.SIZE_SCALE = 1e-5;

  world.sysManager
    .registerSystem(RenderSystem)
    .registerSystem(AxisRotSystem)
    .registerSystem(OrbitRotSystem)
    .registerSystem(SunUniformsUpdateSystem)
    .registerSystem(CameraFocusSystem)
    .registerSystem(RaycasterSystem)
    .registerSystem(CSSMarkerSystem);

  for (const d of data.objects) {
    if (d.type === "sun") {
      buildSun(world.ecManager.createEntity(), d as SunData);
    }

    if (planetCheck.includes(d.type as string)) {
      buildPlanet(world.ecManager.createEntity(), d);
    }

    if (d.type === "particlering") {
      buildParticlering(world.ecManager.createEntity(), d);
    }

    if (d.type === "oortcloud") {
      buildOortCloud(world.ecManager.createEntity(), d);
    }
  }

  initCommon(world);
  world.load();
  world.uiManager.infoPanel.init(data.texts)

  if (data.startTarget) {
    Store.getInstance().store.focusTarget = data.startTarget;
    const sys = world.sysManager.getSystem(CameraFocusSystem);
    if (!sys) return;
    sys.enabled = true;
  }
}
