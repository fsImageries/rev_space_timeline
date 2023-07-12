import { RaycasterSystem } from "../baseclasses/imports";
import { UIManager } from "../gui/UIManager";
import GLOBALS from "../helpers/Constants";
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
  public uiManager: UIManager;

  public enabled = true;

  constructor() {
    this.ecManager = new EntityComponentManager(this);
    this.sysManager = new SystemManager(this);
    this.lvlManager = new LevelManager(this);
    this.queryManager = new QueryManager(this);
    this.uiManager = new UIManager(this);

    this.initListeners();
  }

  private initListeners() {
    const action = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.updateMousePointer(e);

      const sys = this.sysManager.getSystem(RaycasterSystem);
      if (!sys) return;
      sys.enabled = true;
    };

    window.ondblclick = action;

    let start = -1;
    let lastTEvt: TouchEvent;
    window.ontouchstart = (e) => {
      start = performance.now();
      lastTEvt = e;
    };

    window.ontouchend = () => {
      const now = performance.now();
      if (now - start > 300) return;
      action(lastTEvt);
    };

    window.onclick = (e) => {
      this.updateMousePointer(e);
      if (e.altKey || e.shiftKey) {
        if (this.lvlManager.currentLvl == this.lvlManager.levelsNames[0]) {
          const sys = this.sysManager.getSystem(RaycasterSystem) as RaycasterSystem;
          if (!sys) return;
          sys.enabled = true;
          sys.forceSwtich = true;
        } else {
          this.lvlManager.openLevel("Cosmic Map");
        }
      }

      const tar = e.target as HTMLElement;
      if (!this.uiManager.infoPanel.main.contains(tar) && !(tar.id === "infoPanelButton"))
        this.uiManager.infoPanel.visible = false;
    };

    window.onpopstate = (e) => {
      this.lvlManager.openLevel(e.state.name);
    };

    GLOBALS.LOAD_MANAGER.onStart = () => {
      this.enabled = false;
      this.uiManager.progress.visible = true;
      // progress.visible = true;
    };

    GLOBALS.LOAD_MANAGER.onLoad = () => {
      this.uiManager.progress.value = 0;
      this.uiManager.progress.visible = false;
      this.enabled = true;
    };

    GLOBALS.LOAD_MANAGER.onProgress = (url, itemsLoaded, itemsTotal) => {
      const val = (itemsLoaded / itemsTotal) * 100;
      console.debug(url, " ", val);
      this.uiManager.progress.value = val;
    };
  }

  private updateMousePointer(e: MouseEvent | TouchEvent) {
    const [clientX, clientY] =
      e instanceof MouseEvent ? [e.clientX, e.clientY] : [e.touches[0].clientX, e.touches[0].clientY];

    const s = Store.getInstance();
    s.store.raypointer.x = (clientX / window.innerWidth) * 2 - 1;
    s.store.raypointer.y = -(clientY / window.innerHeight) * 2 + 1;
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
