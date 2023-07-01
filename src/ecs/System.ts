import { World } from "./World";
import { ComponentConstructor, QueryElements, QueryOperand } from "./types";

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type SystemQueries = ComponentConstructor<any, any>[][];

export interface SystemConstructor<T extends System> {
  typeID: string;
  queries: QueryOperand[][];
  getName(): string;
  new (...args: any): T;
}

export abstract class System {
  static queries: QueryOperand[][];
  static typeID: string;

  public world: World;
  public queries: QueryElements;
  public enabled: boolean;
  public executeTime: number;

  constructor(world: World) {
    this.world = world;
    this.enabled = true;
    this.executeTime = -1;
    this.queries = this.world.queryManager.getSystemQuery(this);
  }

  public requery() {
    this.queries = this.world.queryManager.getSystemQuery(this);
  }

  abstract execute(delta: number, time: number): void;

  static getName() {
    return this.constructor.name;
  }
}
