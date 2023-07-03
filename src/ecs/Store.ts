import { Raycaster, Vector2 } from "three";

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type TState = {[k:string]: any}

export class Store {
    private static instance: Store;
    public static getInstance(): Store {
        if (!Store.instance) Store.instance = new Store()
        return Store.instance
    }

    /* eslint-disable @typescript-eslint/no-explicit-any*/
    public store: { [k:string]: any };
    public state: TState;

    constructor() {
        this.store = {
            LIGHTYEAR: 9.461e12,
            canvas: document.querySelector("canvas#main") as HTMLCanvasElement,
            raycaster: new Raycaster(),
            raypointer: new Vector2(Infinity, Infinity),
            focusTarget: "yellowstone"
        };

        this.state = {
            DISTANCE_SCALE: 0,
            SIZE_SCALE: 0,
            ORB_SCALE: 20000,
            ROT_SCALE: 10,
        }
    }
}