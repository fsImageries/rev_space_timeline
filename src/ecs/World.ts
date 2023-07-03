import { RaycasterSystem } from "../baseclasses/imports";
import { EntityComponentManager } from "./EntityComponentManager";
import { LevelManager } from "./LevelManager";
import { QueryManager } from "./QueryManager";
import { Store } from "./Store";
import { SystemManager } from "./SystemManager";

export class World {
  public ecManager: EntityComponentManager;
  public sysManager: SystemManager;
  public lvlManager: LevelManager;
  public queryManager: QueryManager;

  public enabled = true;

  constructor() {
    this.ecManager = new EntityComponentManager(this);
    this.sysManager = new SystemManager(this);
    this.lvlManager = new LevelManager(this);
    this.queryManager = new QueryManager(this);

    this.initListeners();
  }

  private initListeners() {
    window.ondblclick = (e: MouseEvent) => {
      this.updateMousePointer(e);

      const sys = this.sysManager.getSystem(RaycasterSystem);
      if (!sys) return;
      sys.enabled = true;
    };
  }

  private updateMousePointer(e: MouseEvent) {
    const s = Store.getInstance()
    s.store.raypointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    s.store.raypointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  public execute(delta: number, time: number) {
    if (this.enabled) this.sysManager.execute(delta, time);
  }

  public load() {
    // this.sysManager.requery()
    this.queryManager.queryComponentQueries();
    this.ecManager.init();
  }
}
