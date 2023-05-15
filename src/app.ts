import { World } from "./Models/World";
import { System } from "./Models/System";

import celestialData from "./object_data.json"
import { SystemJsonData } from "./interfaces";
import './style.css'


const data:SystemJsonData = celestialData;


const sys = new System(data.systems[0])
const world = new World(sys)
sys.initWorld(world)

// const obj = world.scene.getObjectByName("tangerineDream_masterGrp")
const obj = world.scene.getObjectByName("yellowstone_masterGrp")
// const obj:any = null
const target = sys.getById(obj.userData["id"])
console.log(target)
world.cam.setFollowTarget(target)
world.cam.activateThird()

requestAnimationFrame((n) => World.eventLoop(n, world))