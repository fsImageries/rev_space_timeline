// import systemFactory from "../Factories/SystemFactory";
import Constants from "../helpers/Constants";
import { SystemData } from "../jsonInterfaces";
import { CosmicMap } from "./CosmicMap";
import { InfoPanel } from "./InfoPanel";
import { ProgressPanel } from "./ProgressPanel";
import { World } from "./World";

export class Startup {
  world: World;

  constructor() {
    const progress = new ProgressPanel();

    // progress.onclick = () => {
    //   progress.visible = false;
    //   this.world.initGui();
    //   this.world.initListeners();
    //   requestAnimationFrame((n) => World.eventLoop(n, this.world));
    // };

    Constants.LOAD_MANAGER.onLoad = () => {
      progress.visible = false;
      (this.world.curSystem as CosmicMap).textOpacity = 1
      this.world.initGui();
      this.world.initListeners();
      requestAnimationFrame((n) => World.eventLoop(n, this.world));
    };

    Constants.LOAD_MANAGER.onProgress = (url, itemsLoaded, itemsTotal) => {
      const val = (itemsLoaded / itemsTotal) * 100;
      console.debug(url, " ", val);
      progress.progress = val;
    };
  }

  public async start(_data: SystemData) {
    // const infoPanel = new InfoPanel(data.texts);
    const infoPanel = new InfoPanel([]);
    // const sys = await systemFactory(data);
    this.world = new World(infoPanel);
    const sys = CosmicMap.build()
    this.world.initSys(sys)

    // // const obj = world.scene.getObjectByName("tangerineDream_masterGrp")
    // const obj = this.world.scene.getObjectByName("yellowstone_masterGrp");
    // // const obj:any = null
    // const target = sys.getById(obj.userData["id"]);
    // // // console.log(target)
    // this.world.cam.setFollowTarget(target);
    // this.world.cam.activateThird();
    // this.world.cam.activateFree()
  }
}
