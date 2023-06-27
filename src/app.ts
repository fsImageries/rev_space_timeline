import { BoxGeometry, Mesh, MeshNormalMaterial, SphereGeometry } from "three";
import { CameraComponent, RenderComponent, SceneComponent, UniformsComponent } from "./baseclasses/CommonComponents";
import { RenderSystem } from "./baseclasses/CommonSystems";
import { MeshComponent, ObjectGroupComponent, RotGroupComponent } from "./baseclasses/MeshComponents";
import { World } from "./ecs/World";
import { buildSun } from "./Factories/SunFactory";

const world = new World();

world.sysManager.registerSystem(RenderSystem);


const base = () => {
  const geometry = new SphereGeometry(1, 32, 16);
  const material = new MeshNormalMaterial();

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

const _base = () => {
  const sun = world.ecManager.createEntity()

  buildSun(sun, { highTemp: 7000, lowTemp: 3000, name: "sol", rotationPeriod: 1000, radius: 1, parent: "", orbitalPeriod: NaN, type: "sun", tilt: 0, distanceToParent: 0, draw: { radius: 1 } })

  // Renderer
  world.ecManager.createEntity().addComponent(RenderComponent, RenderComponent.getData(world));

  // Renderer
  world.ecManager.createEntity().addComponent(SceneComponent, SceneComponent.getData());

  // Camera
  world.ecManager.createEntity().addComponent(CameraComponent, CameraComponent.getData(world));

  world.load()
}

// world.lvlManager.openLevel("start", base)
world.lvlManager.openLevel("second", _base)

// world.lvlManager.openLevel("start")
// world.lvlManager.openLevel("second")


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