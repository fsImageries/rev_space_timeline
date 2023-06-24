import { Mesh, MeshBasicMaterial, SphereGeometry } from "three";
import { CameraComponent, MeshComponent, RenderComponent, SceneComponent } from "./baseclasses/CommonComponents";
import { RenderSystem } from "./baseclasses/CommonSystems";
import { World } from "./ecs/World";


const world = new World()

world.sysManager.registerSystem(RenderSystem)

const geometry = new SphereGeometry( 15, 32, 16 ); 
const material = new MeshBasicMaterial( { color: 0xffff00 } ); 
const sphere = new Mesh( geometry, material ); 

// Sphere Entity
world.ecManager
.createEntity()
.addComponent(MeshComponent, {mesh: sphere as Mesh})

// Renderer
world.ecManager
.createEntity()
.addComponent(RenderComponent, RenderComponent.setup(world))

// Renderer
world.ecManager
.createEntity()
.addComponent(SceneComponent, SceneComponent.setup())

// Camera
world.ecManager
.createEntity()
.addComponent(CameraComponent, CameraComponent.setup(world))

// world.ecManager.entities.find(e => e.getComponent())
console.log(world)

// scene.add( sphere );