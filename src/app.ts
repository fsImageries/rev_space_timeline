import { SceneComponent } from "./baseclasses/imports";
import { World } from "./ecs/World";

document.title = `${document.title} (${APP_VERSION})`;
const v = document.getElementById("version")
if (v) v.innerText = `v${APP_VERSION}`;

window.onload = async () => {
  const world = new World();

  await world.lvlManager.openLevel("Cosmic Map");

  const scene = world.ecManager.entities.find((e) => e.getComponent(SceneComponent))?.components[SceneComponent.typeID]
    .data.scene;
  console.log(scene.children);

  let prev: number;

  function eventLoop(timestamp: number) {
    if (!prev) prev = timestamp;
    const delta = timestamp - prev;

    // Run all the systems
    world.execute(delta, timestamp);

    prev = timestamp;
    requestAnimationFrame(eventLoop);
  }
  eventLoop(0);
};
