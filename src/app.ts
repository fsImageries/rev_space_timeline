import {
  AxisRotSystem,
  CSSMarkerSystem,
  CameraFocusSystem,
  RaycasterSystem,
  RenderSystem,
  SceneComponent,
  SunUniformsUpdateSystem
} from "./baseclasses/imports";
import { initSystem } from "./Levels/AutoMap";
import objectData from "./data/object_data.yaml";
import { World } from "./ecs/World";
import { SystemsData } from "./jsonInterfaces";

const DATA = objectData as SystemsData;

window.onload = () => {
  const world = new World();

  world.sysManager
    .registerSystem(RenderSystem)
    .registerSystem(AxisRotSystem)
    // .registerSystem(OrbitRotSystem)
    .registerSystem(SunUniformsUpdateSystem)
    .registerSystem(CameraFocusSystem)
    .registerSystem(RaycasterSystem)
    .registerSystem(CSSMarkerSystem);
  // .registerSystem(PlanetUniformsUpdateSystem);

  // world.lvlManager.openLevel("cosmicMap", initCosmicMap);
  world.lvlManager.openLevel("epsilonEridani", (w) => initSystem(w, DATA.systems[0]));
  // world.lvlManager.openLevel("start", base) // TODO levelmanager doesn't watch out for systems which need current components

  const scene = world.ecManager.entities.find((e) => e.getComponent(SceneComponent))?.components[SceneComponent.typeID]
    .data.scene;
  console.log(scene.children);

  // const max = 5;
  // let n = 0;
  let prev: number;

  function eventLoop(timestamp: number) {
    if (!prev) prev = timestamp;
    const delta = timestamp - prev;

    // Run all the systems
    world.execute(delta, timestamp);
    // console.log(uniforms)

    // if (n > max) return
    // n++;

    prev = timestamp;
    requestAnimationFrame(eventLoop);
  }

  eventLoop(0);
};
