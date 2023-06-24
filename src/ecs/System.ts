import { Component, ComponentConstructor } from "./Component"
import { Entity } from "./Entity";
import { hashCode } from "./EntityComponentManager";
import { World } from "./World";

export type SystemQuery = ComponentConstructor<any, any>
export type SystemQueries = SystemQuery[];

export abstract class System {
    static queries: SystemQueries

    public world: World;
    public components: Entity[]
    public enabled: boolean
    public executeTime: number;
    public key: number;

    constructor(world: World) {
        const that = (this.constructor as typeof System)
        this.world = world
        this.enabled = true
        this.executeTime = -1
        this.key = queryKey(that.queries)
        this.components = world.ecManager.getQuery(this.key)
    }

    abstract execute(delta: number, time: number): void;

    static getName() {
        return this.constructor.name;
    }
}

export interface SystemConstructor<T extends System> {
    queries: SystemQueries;
    getName(): string;
    new(...args: any): T;
}

export function queryKey(components: SystemQueries | string[]) {
    if (components.length === 0) return -1
    return hashCode(components.map(c => typeof(c) === "string" ? c : (c as SystemQuery).typeID).join("::"))
}