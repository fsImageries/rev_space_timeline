import { FocusRaycasterSystem, SwitchRaycasterSystem } from "../baseclasses/imports";
import { UIManager } from "../gui/UIManager";
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
    window.ondblclick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.updateMousePointer(e);

      const sys = this.sysManager.getSystem(FocusRaycasterSystem);
      if (!sys) return;
      sys.enabled = true;
    };

    window.onclick = (e) => {
      this.updateMousePointer(e);
      if (e.altKey || e.shiftKey) {
        if (this.lvlManager.currentLvl == this.lvlManager.levelsNames[0]) {
          const sys = this.sysManager.getSystem(SwitchRaycasterSystem);
          if (!sys) return;
          sys.enabled = true;
        } else {
          this.lvlManager.openLevel("Cosmic Map");
        }
      }

      const tar = e.target as HTMLElement;
      if (!this.uiManager.infoPanel.main.contains(tar) && !(tar.id === "infoPanelButton"))
        this.uiManager.infoPanel.visible = false;
    };
  }

  private updateMousePointer(e: MouseEvent) {
    const s = Store.getInstance();
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
