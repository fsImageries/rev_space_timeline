import { EntityComponentManager } from "./EntityComponentManager";

export class World {
    public ecManager: EntityComponentManager;

    constructor() {
        this.ecManager = new EntityComponentManager()
    }
}