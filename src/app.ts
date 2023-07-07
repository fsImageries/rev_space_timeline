import { SceneComponent } from "./baseclasses/imports";
import { World } from "./ecs/World";


window.onload = () => {
  const world = new World();

  world.lvlManager.openLevel("Cosmic Map");
  // world.lvlManager.openLevel("epsilonEridani", (w) => initSystem(w, DATA.systems[0]));
  // world.lvlManager.openLevel("cosmicMap");
  // world.lvlManager.openLevel("epsilonEridani");

  const scene = world.ecManager.entities.find((e) => e.getComponent(SceneComponent))?.components[SceneComponent.typeID]
    .data.scene;
  console.log(scene.children);
  // const sys = world.sysManager.getSystem(CameraFocusSystem);
  // if (sys) sys.enabled = true;

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
