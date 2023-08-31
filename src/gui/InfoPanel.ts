import { Vector3 } from "three";
import { BaseDataComponent } from "../templates/__init__";
import { TextObject } from "../dataInterfaces";
import { Entity } from "../ecs/Entity";
import { InfoPanelCache, LvlInfo } from "../ecs/LevelManager";
import { capitalize, formatTexts, getFirstYear, splitWord } from "../helpers/utils";
import { UIManager } from "./UIManager";
import { Store } from "../ecs/Store";

export type TextsMap = { [key: string]: string };

export class InfoPanelManager {
  public main: HTMLDivElement;
  public timeline: HTMLDivElement;
  public info: HTMLDivElement;
  public title: HTMLDivElement;
  public subtitle: HTMLDivElement;
  public subtext: HTMLDivElement;
  public menubtn: HTMLImageElement;
  public menutip: HTMLDivElement;
  public menuclosebtn: HTMLDivElement;

  // Settings inputs
  public displayMarkerCB: HTMLInputElement;
  public followCamCB: HTMLInputElement;
  public orbScaleIN: HTMLInputElement;
  public axisScaleIN: HTMLInputElement;

  private _coords: [HTMLElement, HTMLElement, HTMLElement];

  private map: TextsMap;
  private fullTxt: string;
  private lvlInfo: LvlInfo;
  private _visible = false;
  private sysKey: string;
  private fullInfo: string;

  constructor(public uiManager: UIManager) {
    this.main = document.getElementById("infoPanel") as HTMLDivElement;
    this.timeline = document.getElementById("infoPanelTimeline") as HTMLDivElement;
    this.info = document.getElementById("infoPanelInfo") as HTMLDivElement;
    this.title = document.querySelector("#infoPanelTitleArea .title") as HTMLDivElement;
    this.subtitle = document.querySelector("#infoPanelTitleArea .subtitle") as HTMLDivElement;
    this.subtext = document.querySelector("#infoPanelSubtextArea .subtitle") as HTMLDivElement;
    this.menubtn = document.getElementById("infoPanelButton") as HTMLImageElement;
    this.menuclosebtn = document.getElementById("infoPanelCloseButton") as HTMLDivElement;
    this.menutip = document.getElementById("infoPanelButtonText") as HTMLDivElement;
    this.displayMarkerCB = document.getElementById("displayMarker") as HTMLInputElement;
    this.followCamCB = document.getElementById("followCam") as HTMLInputElement;
    this.orbScaleIN = document.getElementById("orbScale") as HTMLInputElement;
    this.axisScaleIN = document.getElementById("axisScale") as HTMLInputElement;
    // if (!(this.main && this.timeline && this.title && this.subtitle && this.subtext && this.menubtn))
    //   throw new Error("Can't find info panel html elements")

    const x = document.querySelector("#infoPanelFooter .x .digit") as HTMLElement;
    const y = document.querySelector("#infoPanelFooter .y .digit") as HTMLElement;
    const z = document.querySelector("#infoPanelFooter .z .digit") as HTMLElement;
    // TODO need to implement disabling of ui in testing
    // if (!(x && y && z)) throw new Error("Can't find coordinate html elements")
    this._coords = [x, y, z];

    this.map = {};
    this.fullTxt = "";
    this.fullInfo = "";
    this.lvlInfo = {} as LvlInfo;
    this.sysKey = "";

    this.initSettings();

    const store = Store.getInstance();

    this.menubtn.onclick = () => {
      this.openSysTarget(!this.visible);
    };

    this.menubtn.onmouseover = () => {
      this.menutip?.classList.add("active");
    };

    this.menubtn.onmouseleave = () => {
      this.menutip?.classList.remove("active");
    };

    this.menuclosebtn.onclick = () => {
      this.visible = false;
    };

    this.displayMarkerVisible = store.store.displayMarkerVisibility;
    this.displayMarkerCB.checked = this.displayMarkerVisible;
    this.displayMarkerCB.onchange = () => {
      this.displayMarkerVisible = this.displayMarkerCB.checked;
    };

    this.followCamCB.checked = store.state.followCam;
    this.followCamCB.onchange = () => {
      store.state.followCam = this.followCamCB.checked;
    };

    this.orbScaleIN.onchange = () => {
      const parsed = parseFloat(this.orbScaleIN.value);
      if (parsed !== store.state.ORB_SCALE) {
        store.state.ORB_SCALE = parsed;
      }
    };

    this.axisScaleIN.onchange = () => {
      const parsed = parseFloat(this.axisScaleIN.value);
      if (parsed !== store.state.ROT_SCALE) {
        store.state.ROT_SCALE = parsed;
      }
    };

    const handle = setTimeout(() => {
      this.menutip?.classList.add("active");
    }, 3000);

    window.addEventListener(
      "wheel",
      () => {
        clearTimeout(handle);
        this.menutip?.classList.remove("active");
      },
      { once: true }
    );
  }

  public openSysTarget(force?: boolean) {
    this.setSysTarget();
    this.visible = force === undefined ? true : force;
  }

  public getCache() {
    return { map: {...this.map}, full: this.fullTxt, lvlInfo: this.lvlInfo, fullInfo: this.fullInfo };
  }

  public setCache(cache: InfoPanelCache) {
    this.map = cache.map;
    this.fullTxt = cache.full;
    this.fullInfo = cache.fullInfo;
    this.lvlInfo = cache.lvlInfo;
  }

  public set visibility(value: boolean) {
    this.main.style.visibility = value ? "visible" : "hidden";
  }

  public set visible(value: boolean) {
    value ? this.main.classList.add("checked") : this.main.classList.remove("checked");

    this.menuVisible = value;
    this._visible = value;
  }

  public get visible() {
    return this._visible;
  }

  public set coords(vec: Vector3) {
    const [x, y, z] = [
      vec.x * Store.getInstance().state.DISTANCE_SCALE,
      vec.y * Store.getInstance().state.DISTANCE_SCALE,
      vec.z * Store.getInstance().state.DISTANCE_SCALE
    ];

    this._coords[0].innerText = x.toExponential(4);
    this._coords[1].innerText = y.toExponential(4);
    this._coords[2].innerText = z.toExponential(4);
  }

  public set menuVisible(value: boolean) {
    value ? (this.menubtn.style.transform = "scale(0)") : (this.menubtn.style.transform = "scale(1)");
    value ? (this.menuclosebtn.style.transform = "scale(1)") : (this.menuclosebtn.style.transform = "scale(0)");
  }

  public set displayMarkerVisible(value: boolean) {
    const store = Store.getInstance();
    localStorage.setItem("markerVisiblity", value.toString());
    document.documentElement?.style.setProperty("--marker-diamond-visibility", value ? "visible" : "hidden");
    store.store.displayMarkerVisibility = value;
  }

  public get displayMarkerVisible(): boolean {
    return Store.getInstance().store.displayMarkerVisibility;
  }

  public initSettings() {
    const store = Store.getInstance();
    // console.log(store.store.displayMarkerVisibility);
    // this.displayMarkerCB.checked = store.store.displayMarkerVisibility
    this.orbScaleIN.value = store.state.ORB_SCALE;
    this.axisScaleIN.value = store.state.ROT_SCALE;
  }

  public initTexts(texts: TextObject[], lvlInfo: LvlInfo) {
    this.genTexts(texts);
    this.lvlInfo = lvlInfo;
    this.setConstellation(lvlInfo.constellation);
  }

  public setConstellation(name: string) {
    this.subtext.innerText = name;
  }

  public setTarget(entity: Entity, tab = "tab2") {
    const base = entity.getComponent(BaseDataComponent);
    const content = this.map[base.data.name.toLowerCase()];
    this.timeline.innerHTML = content ? content : "N/A";
    this.title.innerText = base.data.name;
    this.subtitle.innerText = base.data.parent ? base.data.parent : "Local Bubble";

    (document.getElementById(tab) as HTMLInputElement).checked = true;
  }

  private setSysTarget() {
    this.timeline.innerHTML = this.map[this.sysKey];
    this.title.innerText = this.lvlInfo.name;
    this.info.innerHTML = this.fullInfo;
    this.subtitle.innerText = "Local Bubble";
  }

  private genTexts(texts: TextObject[]) {
    // generate general text (all)
    const timelines = texts
      .filter((obj) => obj.timeline)
      .map((obj) => formatTexts(obj.timeline as string[], true, capitalize(obj.name)))
      .flat()
      .sort((a: string, b: string) => {
        const aa = getFirstYear(splitWord(a)?.[0])?.replace(".", "");
        const bb = getFirstYear(splitWord(b)?.[0])?.replace(".", "");
        // console.log(splitWord(a)?.[0])
        // console.log(parseInt(aa), bb)
        if (!aa) return -1; // we assume something like 'unknown' is used

        if (!aa || !bb) return 0;
        const year1 = parseInt(aa);
        const year2 = parseInt(bb);
        return year1 - year2;
      });

    this.fullTxt = timelines.join("<br><br>");

    // generate map from obj to texts
    const map: TextsMap = {};
    texts.forEach((obj) => {
      if (obj.all) {
        this.sysKey = obj.name.toLowerCase();
        map[this.sysKey] = this.fullTxt;
        this.fullInfo = obj.info ? obj.info : "";
        return;
      }

      if (!obj.timeline) return;
      const val = formatTexts(obj.timeline, false) as string[];
      map[obj.name.toLowerCase()] = val.join("\n\r");
    });
    this.map = map;
  }
}
