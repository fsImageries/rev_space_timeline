import { EntityComponentManager } from "./EntityComponentManager";
import { LevelManager } from "./LevelManager";
import { QueryManager } from "./QueryManager";
import { SystemManager } from "./SystemManager";

export class World {
  public ecManager: EntityComponentManager;
  public sysManager: SystemManager;
  public lvlManager: LevelManager;
  public queryManager: QueryManager;

  public canvas: HTMLCanvasElement;

  public enabled = true;

  constructor() {
    this.ecManager = new EntityComponentManager(this);
    this.sysManager = new SystemManager(this);
    this.lvlManager = new LevelManager(this)
    this.queryManager = new QueryManager()

    this.canvas = document.querySelector(`canvas#main`) as HTMLCanvasElement;
  }

  execute(delta: number, time: number) {
    if (this.enabled) this.sysManager.execute(delta, time);
  }
}
