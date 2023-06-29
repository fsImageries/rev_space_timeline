import { Mesh, MeshNormalMaterial, SphereGeometry } from "three";

import { CameraComponent, RenderComponent, SceneComponent, UniformsComponent } from "./baseclasses/CommonComponents";
import { registerCosmicMap as initCosmicMap } from "./Levels/CosmicMap"; // TODO reordering imports kills references
import { AxisRotSystem, RenderSystem } from "./baseclasses/CommonSystems";
import { MeshComponent, RotGroupComponent, TransformGroupComponent } from "./baseclasses/MeshComponents";
import { World } from "./ecs/World";

const world = new World();

world.sysManager
.registerSystem(RenderSystem)
.registerSystem(AxisRotSystem);


const base = () => {
  const geometry = new SphereGeometry(1, 32, 16);
  const material = new MeshNormalMaterial();

  for (let i = 0; i < 2; i++) {
    // Sphere Entity
    world.ecManager.createEntity()
      .addComponent(MeshComponent, { mesh: new Mesh(geometry, material) as Mesh })
      .addComponent(TransformGroupComponent, TransformGroupComponent.getDefaults())
      .addComponent(RotGroupComponent, RotGroupComponent.getDefaults())
  }

  // Renderer
  world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getDefaults(world));

  // Renderer
  world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getDefaults());

  // Camera
  world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getDefaults(world));

  world.load()

  console.log(world.ecManager.entities[0].components)
}

world.lvlManager.openLevel("cosmicMap", initCosmicMap)
// world.lvlManager.openLevel("start", base) // TODO levelmanager doesn't watch out for systems which need current components

// world.lvlManager.openLevel("start")


const scene = world.ecManager.entities.find((e) => e.getComponent(SceneComponent))?.components[SceneComponent.typeID].data.scene;
const uniforms = world.ecManager.entities.find((e) => e.getComponent(UniformsComponent))?.components[UniformsComponent.typeID].data;
console.log(scene.children);



const max = 5;
let n = 0;
let prev: number;

function eventLoop(timestamp: number) {
  if (!prev) prev = timestamp
  const delta = timestamp - prev;

  // Run all the systems
  world.execute(delta, timestamp)
  uniforms.time.value = timestamp * 0.0001
  // console.log(uniforms)

  // if (n > max) return
  n++

  prev = timestamp
  requestAnimationFrame(eventLoop)
}

eventLoop(0)