import { World } from "./Models/World";
import celestialData from "./object_data.json"
import { SystemJsonData } from "./jsonInterfaces";
import './style.css'
import systemFactory from "./Factories/SystemFactory";


const data:SystemJsonData = celestialData;


const sys = await systemFactory(data.systems[0])
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