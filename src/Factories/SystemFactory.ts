import planetFactory from "../Factories/PlanetFactory";
import sunFactory from "../Factories/SunFactory";
import { SunData, SystemData } from "../jsonInterfaces";
import oortFactory from "../Factories/OortFactory";
import particleRingFactoryAsync from "../Factories/ParticleRingFactory";
import { System } from "../Models/System";
import SystemObject from "../Classes/SystemObject";
import Constants from "../helpers/Constants";

const map = {
  // TODO make to dynamic import on actual use
  sun: sunFactory,
  "planet;moon": planetFactory,
  particlering: particleRingFactoryAsync,
  oortcloud: oortFactory
};

export default async function buildAsync(data: SystemData) {
  Constants.LOAD_MANAGER.itemStart(`://${data.name}_planet`);

  const name = data.name;
  const isSingleSun = data.isSingleSun;
  const flat = await buildObjects(data);
  const tree = connectSatellites(flat);

  const sys = new System({ isSingleSun, name, tree, flat, startTarget: data.startTarget });

  Constants.LOAD_MANAGER.itemEnd(`://${data.name}_planet`);
  return sys;
}

async function buildObjects(data: SystemData) {
  const objects: SystemObject[] = [];
  for (const obj of data.objects) {
    let factory;
    for (const [k, v] of Object.entries(map)) {
      if (k.includes(obj.type)) {
        factory = v;
        break;
      }
    }
    if (!factory) {
      throw new Error(`Something horrible went wrong`);
    }
    objects.push(await factory(obj as SunData));
  }

  return objects;
}

function connectSatellites(objects: SystemObject[]) {
  objects.forEach((obj) => {
    const satellites = objects.filter((satellite) => {
      if (satellite.data.name === obj.data.name) return false;
      if (satellite.data.parent === obj.data.name) {
        obj.object.masterGrp.add(satellite.object.parentGrp);
        return true;
      }
      return false;
    });
    obj.satellites = satellites.length > 0 ? satellites : undefined;
  });

  return objects.filter((obj) => !obj.data.parent);
}
