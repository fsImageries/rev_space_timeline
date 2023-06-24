import { EntityComponentManager } from "./EntityComponentManager";
import { SystemManager } from "./SystemManager";

export class World {
    public ecManager: EntityComponentManager;
    public sysManager: SystemManager

    public enabled = true

    constructor() {
        this.ecManager = new EntityComponentManager()
        this.sysManager = new SystemManager(this)
    }

    execute(delta:number, time: number) {
        if (this.enabled) this.sysManager.execute(delta, time)
    }
}