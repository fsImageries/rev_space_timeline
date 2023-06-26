import { Mesh, MeshNormalMaterial, SphereGeometry, BoxGeometry } from "three";
import { CameraComponent, MeshComponent, RenderComponent, SceneComponent } from "./baseclasses/CommonComponents";
import { RenderSystem } from "./baseclasses/CommonSystems";
import { World } from "./ecs/World";

const world = new World();

world.sysManager.registerSystem(RenderSystem);


const base = () => {
  const geometry = new SphereGeometry(15, 32, 16);
  const material = new MeshNormalMaterial();
  const sphere = new Mesh(geometry, material);

  // Sphere Entity
  world.ecManager.createEntity().addComponent(MeshComponent, { mesh: sphere as Mesh });
  
  // Renderer
  world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getData(world));
  
  // Renderer
  world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getData());
  
  // Camera
  world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getData(world));
  
  world.ecManager.load()
}

const base2 = () => {
  const geometry = new BoxGeometry(20, 20, 20);
  const material = new MeshNormalMaterial();
  const cube = new Mesh(geometry, material);

  // Sphere Entity
  world.ecManager.createEntity().addComponent(MeshComponent, { mesh: cube as Mesh });
  
  // Renderer
  world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getData(world));
  
  // Renderer
  world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getData());
  
  // Camera
  world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getData(world));
  
  world.ecManager.load()
}

world.lvlManager.openLevel("start", base)
world.lvlManager.openLevel("second", base2)

world.lvlManager.openLevel("start")
// world.lvlManager.openLevel("second")

console.log(world.sysManager.systems)

const scene = world.ecManager.entities.find((e) => e.getComponent(SceneComponent))?.components[SceneComponent.typeID].data.scene;
console.log(scene.children);


const max = 5;
let n = 0;
function run() {
  // Compute delta and elapsed time
  const time = performance.now();
  const delta = time - lastTime;

  // Run all the systems
  world.execute(delta, time);
  if (n > max) return;

  n++;

  lastTime = time;
  requestAnimationFrame(run);
}

let lastTime = performance.now();
run();
