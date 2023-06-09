import { World } from "./Models/World";
import { SystemsData } from "./jsonInterfaces";
import systemFactory from "./Factories/SystemFactory";
import celestialData from "./object_data.yaml";
import Constants from "./helpers/Constants";

import * as THREE from "three"

import "./styles/baseStyle.css";
import "./styles/infoPanel.css";
import "./styles/progressBar.css";

let world:World;
let sys;
new Promise((resolve) => {
  resolve(null);
}).then(async () => {
  const data = celestialData as SystemsData;

  sys = await systemFactory(data.systems[0]);
  world = new World(sys);
  sys.initWorld(world);

  // const obj = world.scene.getObjectByName("tangerineDream_masterGrp")
  const obj = world.scene.getObjectByName("yellowstone_masterGrp");
  // // const obj:any = null
  const target = sys.getById(obj.userData["id"]);
  // console.log(target)
  world.cam.setFollowTarget(target);
  world.cam.activateThird();

  // requestAnimationFrame((n) => World.eventLoop(n, world));
});

Constants.LOAD_MANAGER.onLoad = () => {
  requestAnimationFrame((n) => World.eventLoop(n, world));
}

// const progress = document.getElementById("progress") as HTMLProgressElement;
// Constants.LOAD_MANAGER.onProgress = ( url, itemsLoaded, itemsTotal ) => {
//   const val = (itemsLoaded / itemsTotal) * 100
//   console.log(val)
//   progress.value = val
// 	// console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
// };
