import { Raycaster, Vector2 } from "three";
import { EntityComponentManager } from "./EntityComponentManager";
import { LevelManager } from "./LevelManager";
import { QueryManager } from "./QueryManager";
import { SystemManager } from "./SystemManager";
import { RaycasterSystem } from "../baseclasses/imports";

export class World {
  public ecManager: EntityComponentManager;
  public sysManager: SystemManager;
  public lvlManager: LevelManager;
  public queryManager: QueryManager;

  /* eslint-disable @typescript-eslint/no-explicit-any*/
  public store: { [k: string]: any };

  public enabled = true;

  constructor() {
    this.ecManager = new EntityComponentManager(this);
    this.sysManager = new SystemManager(this);
    this.lvlManager = new LevelManager(this);
    this.queryManager = new QueryManager(this);

    this.store = {
      canvas: document.querySelector(`canvas#main`) as HTMLCanvasElement,
      canvas2d: document.querySelector(`canvas#holder`) as HTMLCanvasElement,
      raycaster: new Raycaster(),
      raypointer: new Vector2(Infinity, Infinity),
      focusTarget: "yellowstone"
    };

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
    this.store.raypointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.store.raypointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  public execute(delta: number, time: number) {
    if (this.enabled) this.sysManager.execute(delta, time);
  }

  public load() {
    this.queryManager.queryComponentQueries();
    this.ecManager.init();
  }
}
