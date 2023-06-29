import { SceneComponent, UniformsComponent } from "./baseclasses/CommonComponents";
import { registerCosmicMap as initCosmicMap } from "./Levels/CosmicMap"; // TODO reordering imports kills references
import { AxisRotSystem, RenderSystem, SunUniformsUpdateSystem } from "./baseclasses/CommonSystems";
import { World } from "./ecs/World";

window.onload = () => {
  const world = new World();

  world.sysManager.registerSystem(RenderSystem).registerSystem(AxisRotSystem).registerSystem(SunUniformsUpdateSystem);

  world.lvlManager.openLevel("cosmicMap", initCosmicMap);
  // world.lvlManager.openLevel("start", base) // TODO levelmanager doesn't watch out for systems which need current components

  const scene = world.ecManager.entities.find((e) => e.getComponent(SceneComponent))?.components[SceneComponent.typeID]
    .data.scene;
  const uniforms = world.ecManager.entities.find((e) => e.getComponent(UniformsComponent))?.components[
    UniformsComponent.typeID
  ].data;
  console.log(scene.children);

  // const max = 5;
  // let n = 0;
  let prev: number;

  function eventLoop(timestamp: number) {
    if (!prev) prev = timestamp;
    const delta = timestamp - prev;

    // Run all the systems
    world.execute(delta, timestamp);
    uniforms.time.value = timestamp * 0.0001;
    // console.log(uniforms)

    // if (n > max) return
    // n++;

    prev = timestamp;
    requestAnimationFrame(eventLoop);
  }

  eventLoop(0);
};
