import { RaycasterSystem } from "../templates/__init__";
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

    initListeners(this);
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

function updateMousePointer(e: MouseEvent | TouchEvent) {
  const [clientX, clientY] =
    e instanceof MouseEvent ? [e.clientX, e.clientY] : [e.touches[0].clientX, e.touches[0].clientY];

  const s = Store.getInstance();
  s.store.raypointer.x = (clientX / window.innerWidth) * 2 - 1;
  s.store.raypointer.y = -(clientY / window.innerHeight) * 2 + 1;
}

function initListeners(world:World) {
  const action = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    updateMousePointer(e);

    const sys = world.sysManager.getSystem(RaycasterSystem);
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
    updateMousePointer(e);
    if (e.altKey || e.shiftKey) {
      if (world.lvlManager.currentLvl == world.lvlManager.levelsNames[0]) {
        const sys = world.sysManager.getSystem(RaycasterSystem) as RaycasterSystem;
        if (!sys) return;
        sys.enabled = true;
        sys.forceSwtich = true;
      } else {
        world.lvlManager.openLevel("Cosmic Map");
      }
    }

    const tar = e.target as HTMLElement;
    if (!world.uiManager.infoPanel.main.contains(tar) && !(tar.id === "infoPanelButton"))
      world.uiManager.infoPanel.visible = false;
  };

  window.onpopstate = (e) => {
    world.lvlManager.openLevel(e.state.name);
  };

  window.onkeydown = (e) => {
    onkeydown(world, e)
  }

  
  const store = Store.getInstance()
  window.addEventListener(
    "wheel",
    (e) => {
      store.store.rotateCamPivotDepth += e.deltaY
    },
  );

  GLOBALS.LOAD_MANAGER.onStart = () => {
    world.enabled = false;
    world.uiManager.progress.visible = true;
    // progress.visible = true;
  };

  GLOBALS.LOAD_MANAGER.onLoad = () => {
    world.uiManager.progress.value = 0;
    world.uiManager.progress.visible = false;
    world.enabled = true;
  };

  GLOBALS.LOAD_MANAGER.onProgress = (url, itemsLoaded, itemsTotal) => {
    const val = (itemsLoaded / itemsTotal) * 100;
    console.debug(url, " ", val);
    world.uiManager.progress.value = val;
  };
}

function onkeydown(world:World, e:KeyboardEvent) {
  console.log(e.key)
  const store = Store.getInstance()

  if (e.key === "m") {
    world.uiManager.infoPanel.visible = !world.uiManager.infoPanel.visible
  }

  if (e.key === "f") {
    store.store.followCam = !store.store.followCam
  }

  const scalar = 0.05
  if (e.key.toLowerCase() === "arrowright") {
    store.store.rotateCamPivot = Math.PI * scalar
  }
  if (e.key.toLowerCase() === "arrowleft") {
    store.store.rotateCamPivot = -(Math.PI * scalar)
  }

  if (e.key.toLowerCase() === "arrowup") {
    store.store.rotateCamPivotDepth += 2
  }
  if (e.key.toLowerCase() === "arrowdown") {
    store.store.rotateCamPivotDepth -= 2
  }
}