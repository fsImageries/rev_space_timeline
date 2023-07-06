import { SceneComponent } from "./baseclasses/CommonComponents";
import { initSystem } from "./Levels/AutoMap";
import objectData from "./data/object_data.yaml";
import { World } from "./ecs/World";
import { SystemsData } from "./dataInterfaces";
import { initCosmicMap } from "./Levels/CosmicMap";

const DATA = objectData as SystemsData;

window.onload = () => {
  const world = new World();

  world.lvlManager.openLevel("cosmicMap", initCosmicMap);
  world.lvlManager.openLevel("epsilonEridani", (w) => initSystem(w, DATA.systems[0]));
  // world.lvlManager.openLevel("cosmicMap");
  // world.lvlManager.openLevel("epsilonEridani");

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
