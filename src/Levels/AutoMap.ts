import { buildPlanet } from "../Factories/PlanetFactory";
import { buildSun } from "../Factories/SunFactory";
import { World } from "../ecs/World";
import { SunData, SystemData } from "../jsonInterfaces";
import { initCommon } from "./Common";

const planetCheck = ["moon", "planet"];

export function initSystem(world: World, data: SystemData) {
  for (const d of data.objects) {
    if (d.type === "sun") {
      buildSun(world.ecManager.createEntity(), d as SunData);
    }
    if (planetCheck.includes(d.type as string)) {
      buildPlanet(world.ecManager.createEntity(), d);
    }
  }

  initCommon(world);
  world.load();
}
