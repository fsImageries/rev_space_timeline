import systemFactory from "../Factories/SystemFactory";
import Constants from "../helpers/Constants";
import { SystemData } from "../jsonInterfaces";
import { World } from "./World";

export class Startup {
    world: World

    constructor() {
        
        Constants.LOAD_MANAGER.onLoad = () => {
            requestAnimationFrame((n) => World.eventLoop(n, this.world));
            progress.style.display = "none"
          }
          
        const progress = document.getElementById("progress") as HTMLProgressElement
        Constants.LOAD_MANAGER.onProgress = ( url, itemsLoaded, itemsTotal ) => {
            const val = (itemsLoaded / itemsTotal) * 100
            console.log(url, " ", val)
            // console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
            progress.value = val
        };
    }
    
    public async start(data:SystemData) {
        const sys = await systemFactory(data);
        this.world = new World(sys);
        sys.initWorld(this.world);

        // const obj = world.scene.getObjectByName("tangerineDream_masterGrp")
        const obj = this.world.scene.getObjectByName("yellowstone_masterGrp");
        // // const obj:any = null
        const target = sys.getById(obj.userData["id"]);
        // console.log(target)
        this.world.cam.setFollowTarget(target);
        this.world.cam.activateThird();
    }
}