import { Raycaster, Vector2 } from "three";

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type TState = { [k: string]: any };

const BASE = {
  DISTANCE_SCALE: 0,
  SIZE_SCALE: 0,
  // ORB_SCALE: 1,
  ORB_SCALE: 0,
  ROT_SCALE: 10,
  camPos: null
};

export class Store {
  private static instance: Store;
  public static getInstance(): Store {
    if (!Store.instance) Store.instance = new Store();
    return Store.instance;
  }

  /* eslint-disable @typescript-eslint/no-explicit-any*/
  public store: { [k: string]: any };
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  public state: TState;

  constructor() {
    const dmVisibility = localStorage.getItem("markerVisiblity");
    let visibility = true;
    if (dmVisibility) {
      visibility = dmVisibility === "true" ? true : false;
    }

    this.store = {
      LIGHTYEAR: 9.461e12,
      canvas: null,
      // canvas: document.querySelector("canvas#main") as HTMLCanvasElement,
      raycaster: new Raycaster(),
      raypointer: new Vector2(Infinity, Infinity),
      focusTarget: "yellowstone",
      followCam: true,
      rotateCamPivot: 0,
      rotateCamPivotDepth: 0,
      displayMarkerVisibility: visibility
    };

    this.state = { ...BASE };
  }

  public resetState() {
    this.state = { ...BASE };
  }
}
