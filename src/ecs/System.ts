import { ComponentConstructor } from "./Component";
import { Entity } from "./Entity";
import { Query, QueryElements } from "./EntityComponentManager";
import { World } from "./World";

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type SystemQueries = ComponentConstructor<any, any>[][];

export abstract class System {
  static queries: SystemQueries;
  static typeID: string;

  public world: World;
  public queries: QueryElements;
  public enabled: boolean;
  public executeTime: number;

  constructor(world: World) {
    this.world = world;
    this.enabled = true;
    this.executeTime = -1;
    this.queries = this.query()
  }

  private query() {
    const that = this.constructor as typeof System;
    return this.world.ecManager.getQuery(that.typeID, that.queries);
  }

  public requery() {
    this.queries = this.query()
  }

  abstract execute(delta: number, time: number): void;

  static getName() {
    return this.constructor.name;
  }
}

export interface SystemConstructor<T extends System> {
  typeID: string;
  queries: SystemQueries;
  getName(): string;
  new (...args: any): T;
}
