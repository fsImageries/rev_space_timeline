import { World } from "./Models/World";
import { System } from "./Models/System";

import * as cameraUtils from "./helpers/cameraUtils"

import celestialData from "./object_data.json"
import './style.css'

const sys = new System(celestialData.system1)
const world = new World(sys)
sys.initWorld(world)

const obj = world.scene.getObjectByName("tangerineDream")
// const obj = world.scene.getObjectByName("yellowstone")
if (obj) {
    cameraUtils.setCameraTarget(obj, world.cameraCtrl)
    cameraUtils.jumpToTarget(obj, world.cameraCtrl)
    world.followTarget = obj
}


requestAnimationFrame((n) => World.eventLoop(n, world))