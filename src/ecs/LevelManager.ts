import { Entity } from "./Entity";
import { Query } from "./QueryManager";
import { World } from "./World";


export class LevelManager {
    /**
     * We're basically just taking a snapshot and saving it under the levelname
     * When a new level is loaded we either get the saved snapshot or init() a new one and save it
     */

    public levelMap: {[propName: string]: [Entity[], Query]}
    public world: World

    constructor(world:World) {
        this.levelMap = {} 
        this.world = world       
    }

    public openLevel(lvlName: string, init?:(world:World)=>void) {
        this.world.enabled = false
        if (!(lvlName in this.levelMap)) {
            this.world.queryManager.queries = {}
            this.world.sysManager.requery()
            this.world.ecManager.entities = []

            if (!init) throw new Error("Level is not in map and no init-function was given")
            init(this.world)
            this.levelMap[lvlName] = [this.world.ecManager.entities, this.world.queryManager.queries]
        } 

        this.world.ecManager.entities = this.levelMap[lvlName][0]
        this.world.queryManager.queries = this.levelMap[lvlName][1]
        this.world.sysManager.requery()


        this.world.enabled = true
    }
}