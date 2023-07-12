import { initSystem } from "../Levels/AutoMap";
import { initCosmicMap } from "../Levels/CosmicMap";
import { SystemsData } from "../dataInterfaces";
import { Entity } from "./Entity";
import { Store, TState } from "./Store";
import { System } from "./System";
import { World } from "./World";
import { Query } from "./types";

import objectData from "../data/object_data.yaml";
import { TextsMap } from "../gui/InfoPanel";
const DATA = objectData as SystemsData;

export type LvlInfo = {
  name: string;
  constellation: string;
};

export type InfoPanelCache = {
  map: TextsMap;
  full: string;
  lvlInfo: LvlInfo;
};

type LevelCache = [
  Entity[], // Entities
  Query, // SysQueries
  Query, // CompQueries
  System[], // Systems
  TState, // StoreState
  InfoPanelCache // InfoPanelTexts
  // HTMLElement,    // CSSRendererDomElement
];

const levels: { [p: string]: (w: World) => void } = {
  "Cosmic Map": initCosmicMap,
  "Epsilon Eridani": (w: World) => initSystem(w, DATA.systems[0])
};

export class LevelManager {
  /**
   * We're basically just taking a snapshot and saving it under the levelname
   * When a new level is loaded we either get the saved snapshot or init() a new one and save it
   */

  public levelMap: { [propName: string]: LevelCache };
  public world: World;
  private _currentLvl: string;

  constructor(world: World) {
    this.levelMap = {};
    this.world = world;
    this._currentLvl = Object.keys(levels)[0];
  }

  public get currentLvl(): string {
    return this._currentLvl;
  }

  public get levelsNames(): string[] {
    return Object.keys(levels);
  }

  public openLevel(lvlName: string) {
    let init = undefined;
    if (!(lvlName in this.levelMap)) {
      if (!(lvlName in levels)) {
        console.info(`${lvlName} is not yet implemented.`);
        return;
      }
      init = levels[lvlName];
    }
    this._openLevel(lvlName, init);
    this._currentLvl = lvlName;

    history.pushState({ name: lvlName }, "", null);
  }

  public _openLevel(lvlName: string, init?: (world: World) => void) {
    this.world.enabled = false;

    if (this.currentLvl === this.levelsNames[0]) {
      // should be build a level class to factor mount/unmounting actions?
      const title = document.getElementById("cosmicMapTItle");
      if (title) title.style.visibility = "hidden";
    }

    this.world.ecManager.unmount();
    if (!(lvlName in this.levelMap)) {
      this.world.queryManager.sysQueries = {};
      this.world.queryManager.compQueries = {};
      this.world.ecManager.entities = [];
      this.world.sysManager.systems = [];
      this.world.sysManager.querySysDependencies();
      Store.getInstance().resetState();

      if (!init) throw new Error("Level is not in map and no init-function was given");
      init(this.world);

      this.levelMap[lvlName] = [
        [...this.world.ecManager.entities],
        this.world.queryManager.sysQueries,
        this.world.queryManager.compQueries,
        [...this.world.sysManager.systems],
        Store.getInstance().state,
        this.world.uiManager.infoPanel.getCache()
      ];
    } else {
      this.world.ecManager.entities = this.levelMap[lvlName][0];
      this.world.sysManager.systems = this.levelMap[lvlName][3];
      this.world.uiManager.infoPanel.setCache(this.levelMap[lvlName][5]);
      Store.getInstance().state = this.levelMap[lvlName][4];
    }

    this.world.ecManager.mount();
    this.world.enabled = true;
  }
}
