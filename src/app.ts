import { World } from "./Models/World";
import { SystemsData } from "./jsonInterfaces";
import systemFactory from "./Factories/SystemFactory";
import celestialData from "./object_data.yaml"
import './styles/baseStyle.css'
import './styles/infoPanel.css'


new Promise((resolve) => {resolve(null)}).then(async () => {
    const data = celestialData as SystemsData;

    const sys = await systemFactory(data.systems[0])
    const world = new World(sys)
    sys.initWorld(world)

    // const obj = world.scene.getObjectByName("tangerineDream_masterGrp")
    // const obj = world.scene.getObjectByName("yellowstone_masterGrp")
    // // const obj:any = null
    // const target = sys.getById(obj.userData["id"])
    // console.log(target)
    // world.cam.setFollowTarget(target)
    // world.cam.activateThird()

    requestAnimationFrame((n) => World.eventLoop(n, world))
})
