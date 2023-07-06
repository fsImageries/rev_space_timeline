import { BaseDataComponent } from "../baseclasses/imports";
import { TextObject } from "../dataInterfaces";
import { Entity } from "../ecs/Entity";
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

  private map: TextsMap;
  private fullTxt: string;

  constructor(
    public uiManager: UIManager
  ) {
    this.main = document.getElementById("infoPanel") as HTMLDivElement
    this.timeline = document.getElementById("infoPanelTimeline") as HTMLDivElement
    this.title = document.querySelector("#infoPanelTitleArea .title") as HTMLDivElement
    this.subtitle = document.querySelector("#infoPanelTitleArea .subtitle") as HTMLDivElement
    this.subtext = document.querySelector("#infoPanelSubtextArea .subtitle") as HTMLDivElement


    this.cache = []
    this.map = {}
    this.fullTxt = ""
  }

  public set visibility(value: boolean) {
    this.main.style.visibility = value ? "visible" : "hidden"
  }

  public set visible(value: boolean) {
    value ?
      this.main.classList.add("checked") :
      this.main.classList.remove("checked")
  }

  public init(texts: TextObject[]) {
    this.cache = texts
    this.genTexts(texts)
  }

  public setConstellation(name: string) {
    this.subtext.innerText = name
  }

  public setTarget(entity: Entity) {
    const base = entity.getComponent(BaseDataComponent)
    this.timeline.innerHTML = this.map[base.data.name.toLowerCase()];
    this.title.innerText = base.data.name;
    this.subtitle.innerText = base.data.parent ? base.data.parent : "Local Group";

    (document.getElementById("tab2") as HTMLInputElement).checked = true
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