import { Component, ComponentConstructor } from "./Component"

type SystemQueries = ComponentConstructor<any, any>[];

export abstract class System {
    static queries: SystemQueries

    public world: any;
    public components: Component<any>[][]
    public enabled: boolean
    public executeTime: number;

    constructor(world: any) {
        this.world = world
        this.components = [] // TODO need to implement query function
        this.enabled = true
        this.executeTime = -1
    }

    abstract execute(delta: number, time: number): void;

    static getName() {
        return this.constructor.name;
    }
}

export interface SystemConstructor<T extends System> {
    queries: SystemQueries;
    getName():string;
    new(...args: any): T;
}


// class Render extends System {
//     execute(delta: number, time: number): void {
//         this.components.forEach(([motion, vector]) => {
//             motion.data.x
//         })
//     }
// }