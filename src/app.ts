import { CosmicMap } from "./Classes/CosmicMap";
import { World } from "./Classes/World";
import Constants from "./helpers/Constants";

document.title = `${document.title} (${APP_VERSION})`
document.getElementById("version").innerText = `v${APP_VERSION}`

window.onload = () => {
  const progress = Constants.UIMANAGER.progressPanel

  Constants.LOAD_MANAGER.onLoad = () => {
    progress.visible = false;
    progress.value = 0;
    (world.curSystem as CosmicMap).textOpacity = 1
    world.initGui();
    world.cam.initListeners();
    world.clickManager.initListeners()
    World.eventLoop(0, world)
    // Constants.UIMANAGER.cornerButton.forwardVisible = true
  };

  Constants.LOAD_MANAGER.onStart = () => {
    progress.visible = true;
  }

  Constants.LOAD_MANAGER.onProgress = (url, itemsLoaded, itemsTotal) => {
    const val = (itemsLoaded / itemsTotal) * 100;
    console.debug(url, " ", val);
    progress.value = val;
  };

  Constants.LOAD_MANAGER.itemStart(`://startup`);
  const world = new World();
  const sys = CosmicMap.build()
  world.initSys(sys, { freeCam: true, texts: [] })
  world.scene.add(sys.topGrp)
  Constants.LOAD_MANAGER.itemEnd(`://startup`);
}