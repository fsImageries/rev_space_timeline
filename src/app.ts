import { BoxGeometry, Mesh, MeshNormalMaterial, SphereGeometry } from "three";
import { CameraComponent, MeshComponent, ObjectGroupComponent, RenderComponent, RotGroupComponent, SceneComponent } from "./baseclasses/CommonComponents";
import { RenderSystem } from "./baseclasses/CommonSystems";
import { World } from "./ecs/World";

const world = new World();

world.sysManager.registerSystem(RenderSystem);


const base = () => {
  const geometry = new SphereGeometry(1, 32, 16);
  const material = new MeshNormalMaterial();
  const sphere = new Mesh(geometry, material);

  for (let i = 0; i < 2; i++) {
    // Sphere Entity
    world.ecManager.createEntity()
    .addComponent(MeshComponent, { mesh: new Mesh(geometry, material) as Mesh })
    .addComponent(ObjectGroupComponent, ObjectGroupComponent.getData())
    .addComponent(RotGroupComponent, RotGroupComponent.getData())
  }
  
  // Renderer
  world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getData(world));
  
  // Renderer
  world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getData());
  
  // Camera
  world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getData(world));
  
  world.load()

  console.log(world.ecManager.entities[0].components)
}

const base2 = () => {
  const geometry = new BoxGeometry(20, 20, 20);
  const material = new MeshNormalMaterial();
  const cube = new Mesh(geometry, material);

  // Cube Entity
  world.ecManager.createEntity()
  .addComponent(MeshComponent, { mesh: cube as Mesh })
  .addComponent(ObjectGroupComponent, ObjectGroupComponent.getData())
  .addComponent(RotGroupComponent, RotGroupComponent.getData())
  
  // Renderer
  world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getData(world));
  
  // Renderer
  world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getData());
  
  // Camera
  world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getData(world));
  
  world.load()
}

world.lvlManager.openLevel("start", base)
// world.lvlManager.openLevel("second", base2)

// world.lvlManager.openLevel("start")
// world.lvlManager.openLevel("second")


const scene = world.ecManager.entities.find((e) => e.getComponent(SceneComponent))?.components[SceneComponent.typeID].data.scene;
console.log(scene.children);



const max = 5;
let n = 0;
let prev:number;

function eventLoop(timestamp:number) {
  if (!prev) prev = timestamp
  const delta = timestamp - prev;

  // Run all the systems
  world.execute(delta, timestamp)

  // if (n > max) return
  n++

  prev = timestamp
  requestAnimationFrame(eventLoop)
}

eventLoop(0)