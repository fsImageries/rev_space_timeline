import { Entity } from "./Entity";
import { Store, TState } from "./Store";
import { System } from "./System";
import { World } from "./World";
import { Query } from "./types";

type LevelEntry = [Entity[], Query, Query, System[], TState]

export class LevelManager {
  /**
   * We're basically just taking a snapshot and saving it under the levelname
   * When a new level is loaded we either get the saved snapshot or init() a new one and save it
   */

  public levelMap: { [propName: string]: LevelEntry };
  public world: World;

  constructor(world: World) {
    this.levelMap = {};
    this.world = world;
  }

  public openLevel(lvlName: string, init?: (world: World) => void) {
    this.world.enabled = false;

    if (!(lvlName in this.levelMap)) {
      this.world.queryManager.sysQueries = {};
      this.world.queryManager.compQueries = {};
      this.world.ecManager.entities = [];
      this.world.sysManager.systems = [];
      this.world.sysManager.querySysDependencies();

      if (!init) throw new Error("Level is not in map and no init-function was given");
      init(this.world);
      this.levelMap[lvlName] = [
        [...this.world.ecManager.entities],
        this.world.queryManager.sysQueries,
        this.world.queryManager.compQueries,
        [...this.world.sysManager.systems],
        Store.getInstance().state
      ];
    } else {
      this.world.ecManager.entities = this.levelMap[lvlName][0];
      this.world.sysManager.systems = this.levelMap[lvlName][3];
      Store.getInstance().state = this.levelMap[lvlName][4]
    }
    
    this.world.enabled = true;
  }
}
