import { TextObject } from "../dataInterfaces";
import { capitalize, formatTexts, getFirstYear, splitWord } from "../helpers/utils";
import { UIManager } from "./UIManager";

type TextsMap = { [key: string]: string };

export class InfoPanelManager {
    public main: HTMLDivElement;
    public timeline: HTMLDivElement;
    public cache: TextObject[];
    
    private map: TextsMap;
    private fullTxt: string;

    constructor(
        public uiManager: UIManager
    ) {
        this.main = document.getElementById("infoPanel") as HTMLDivElement 
        this.timeline = document.getElementById("infoPanelTimeline") as HTMLDivElement 

        this.cache = []
        this.map = {}
        this.fullTxt = ""
    }

    public set visibility(value: boolean) {
        this.main.style.visibility = value ? "visible" : "hidden"
    }

    public set visible(value: boolean) {
        value ? 
        this.main.classList.add("checked"):
        this.main.classList.remove("checked")
    }

    public init(texts: TextObject[]) {
        this.cache = texts
        this.genTexts(texts)
    }

    public setTarget(name:string) {
        this.timeline.innerHTML = this.map[name];
        (document.getElementById("tab2") as HTMLInputElement).checked = true
    }

    private genTexts(texts: TextObject[]) {
        // generate map from obj to texts
        const map: TextsMap = {};
        texts.forEach((obj) => {
        if (!obj.timeline) return
          const val = formatTexts(obj.timeline, false) as string[];
          map[obj.name.toLowerCase()] = val.join("\n\r");
        });
        this.map = map;
    
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
        this.fullTxt = sorted.join("<br>");
      }
}