import { World } from "./Models/World";
import { System } from "./Models/System";

import * as cameraUtils from "./helpers/cameraUtils"

import celestialData from "./object_data.json"
import './style.css'

const sys = new System(celestialData.system1)
const world = new World(sys)
console.table(sys.planets)
sys.initWorld(world)

// const obj = world.scene.getObjectByName("tangerineDream")
const obj = world.scene.getObjectByName("yellowstone")
if (obj) {
    // const vec = ((objAtmo as Mesh).material as ShaderMaterial).uniforms.viewVector.value
    // const wu = vec.subVectors(this.camera.position, obj.getWorldPosition(obj.position));

    cameraUtils.setCameraTarget(obj, world.cameraCtrl)
    // cameraUtils.jumpCloseToTarget(obj, world.cameraCtrl)
    console.info("Hall", obj)
    // console.log(world.camera.position)
    cameraUtils.jumpToTarget(obj, world.cameraCtrl)
}

requestAnimationFrame((n) => World.eventLoop(n, world))