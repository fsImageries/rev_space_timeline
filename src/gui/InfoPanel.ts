import { BaseDataComponent } from "../baseclasses/imports";
import { TextObject } from "../dataInterfaces";
import { Entity } from "../ecs/Entity";
import { LvlInfo } from "../ecs/LevelManager";
import { capitalize, formatTexts, getFirstYear, splitWord } from "../helpers/utils";
import { UIManager } from "./UIManager";

type TextsMap = { [key: string]: string };

export class InfoPanelManager {
  public main: HTMLDivElement;
  public timeline: HTMLDivElement;
  public cache: TextObject[];
  public title: HTMLDivElement;
  public subtitle: HTMLDivElement;
  public subtext: HTMLDivElement;
  public menubtn: HTMLImageElement;

  private map: TextsMap;
  private fullTxt: string;
  private _visible: boolean = false
  private lvlInfo: LvlInfo

  constructor(
    public uiManager: UIManager
  ) {
    this.main = document.getElementById("infoPanel") as HTMLDivElement
    this.timeline = document.getElementById("infoPanelTimeline") as HTMLDivElement
    this.title = document.querySelector("#infoPanelTitleArea .title") as HTMLDivElement
    this.subtitle = document.querySelector("#infoPanelTitleArea .subtitle") as HTMLDivElement
    this.subtext = document.querySelector("#infoPanelSubtextArea .subtitle") as HTMLDivElement
    this.menubtn = document.getElementById("infoPanelButton") as HTMLImageElement

    this.cache = []
    this.map = {}
    this.fullTxt = ""
    this.lvlInfo = {} as LvlInfo
    

    this.menubtn.onclick = () => {
      this.setSysTarget()
      this.visible = !this._visible
    }
  }

  public set visibility(value: boolean) {
    this.main.style.visibility = value ? "visible" : "hidden"
  }

  public set visible(value: boolean) {
    value ?
      this.main.classList.add("checked") :
      this.main.classList.remove("checked")
    
    this.menuVisible = value
    this._visible = value
  }

  public set menuVisible(value: boolean) {
    value ?
      this.menubtn.style.transform = "scale(0)" :
      this.menubtn.style.transform = "scale(1)"

  }

  public init(texts: TextObject[], lvlInfo: LvlInfo) {
    this.cache = texts
    this.genTexts(texts)
    this.lvlInfo = lvlInfo
    this.map["sys"] = ""
  }

  public setConstellation(name: string) {
    this.subtext.innerText = name
  }

  public setTarget(entity: Entity, tab = "tab2") {
    const base = entity.getComponent(BaseDataComponent)
    this.timeline.innerHTML = this.map[base.data.name.toLowerCase()];
    this.title.innerText = base.data.name;
    this.subtitle.innerText = base.data.parent ? base.data.parent : "Local Group";

    (document.getElementById(tab) as HTMLInputElement).checked = true
  }

  private setSysTarget() {
    this.timeline.innerHTML = this.map["sys"]
    this.title.innerText = this.lvlInfo.name
    this.subtitle.innerText = "Local Group"
    this.setConstellation(this.lvlInfo.constellation)
  }

  private genTexts(texts: TextObject[]) {
    // generate general text (all)
    const sorted = texts
      .filter(obj => obj.timeline)
      .map((obj) => formatTexts(obj.timeline as string[], true, capitalize(obj.name)))
      .flat()
      .sort((a: string, b: string) => {
        const aa = getFirstYear(splitWord(a)?.[0])
        const bb = getFirstYear(splitWord(b)?.[0])

        if (!aa || !bb) return 0
        const year1 = parseInt(aa);
        const year2 = parseInt(bb);
        return year1 - year2;
      });
    this.fullTxt = sorted.join("<br><br>");

    // generate map from obj to texts
    const map: TextsMap = {};
    texts.forEach((obj) => {
      if (!obj.timeline) {
        if (!obj.all) return
        map[obj.name.toLowerCase()] = this.fullTxt
        return
      }

      const val = formatTexts(obj.timeline, false) as string[];
      map[obj.name.toLowerCase()] = val.join("\n\r");
    });
    this.map = map;
  }
}