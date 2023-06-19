import { System } from "../Models/System";
import { TextObject } from "../jsonInterfaces";
import { InfoSpriteManager } from "./InfoSpriteManager";
import SystemObject from "./SystemObject";

type TextsMap = { [key: string]: string };
const NL_SEP = "<br>• ";

export class InfoPanel {
  public panel: HTMLElement

  public titleMain: HTMLElement
  public titleSub: HTMLElement

  public content: HTMLElement
  public timeline: HTMLElement
  public help: HTMLElement

  public nav: HTMLElement
  public navIcos: HTMLElement[]

  private _spriteManager: InfoSpriteManager;
  private _textMap: { [key: string]: string };
  private _fullText: string
  private _visible: boolean;

  private _curContent: HTMLElement
  private _curHighlight: HTMLElement

  constructor() {
    this.panel = document.getElementById("infoPanel")
    this.titleMain = document.getElementById("infoPanelMain")
    this.titleSub = document.getElementById("infoPanelSub")

    this.content = document.getElementById("infoPanelContent")
    this.timeline = document.getElementById("infoPanelTimeline")
    this.help = document.getElementById("infoPanelHelp")

    this.nav = document.getElementById("infoPanelNav")
    const icos = []

    for (const ico of this.nav.children) {
      icos.push(ico as HTMLElement)
      ico.addEventListener("click", (e) => {
        const id = (e.target as HTMLElement).getAttribute("data-id")
        this.updateContent(id)
      })
    }

    this.navIcos = icos

    this._spriteManager = new InfoSpriteManager()
    this._visible = false
    this._curContent = this.help
    this._curHighlight = this.navIcos.find(el => el.id.toLowerCase().includes("help"))
  }

  public updateContent(elem: string | HTMLElement, switchVisible=false) {
    if (typeof elem === "string") elem = document.getElementById(elem)
    if (this._curContent != elem) {
      this._curContent = elem
      this._curHighlight = this.navIcos.find(el => el.id.includes(this._curContent.id))
    }
    this.switchContent()
    this.switchNavHighlight()
    if (switchVisible) this.visible = !this.visible
  }

  private switchNavHighlight() {
    this.navIcos.forEach(el => el.classList.remove("hover"))
    this._curHighlight.classList.add("hover")
  }

  private switchContent() {
    this._curContent.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }

  public set visible(value: boolean) {
    this._visible = value
    value ?
      this.panel.style.left = "0vw" :
      this.panel.style.left = "-55vw"
  }

  public get visible() {
    return this._visible
  }

  public showTimeline(obj: SystemObject) {
    this.visible = true;

    this.writeTitle(obj.data.name, obj.data.parent || "null");
    if (obj.data.name in this._textMap) {
      this.writeTimelineText(this._textMap[obj.data.name]);
      return
    }

    // TODO implement system to select a general info and produce text for suns
    if (obj.data.type == "sun") {
      this.writeTimelineText(this._fullText);
      return
    }
  }
  public init(system: System, texts: TextObject[]) {
    this.genTexts(texts);
    const parents = system.flat.filter(
      (obj) => (obj.data.name in this._textMap || obj.data.type == "sun") && obj.object.displayInfo
    );

    if (parents.length == 0) return;
    this._spriteManager.build(parents);
    this._spriteManager.init();
  }

  private genTexts(texts: TextObject[]) {
    // generate map from obj to texts
    const map: TextsMap = {};
    const formatted: string[][] = [];
    texts.forEach((obj) => {
      const val = formatTexts(obj.texts, false) as string[];
      formatted.push(val);
      map[obj.name] = val.join("\n\r");
    });
    this._textMap = map;

    // generate general text (all)
    const sorted = texts
      .map((obj) => formatTexts(obj.texts, true, capitalize(obj.name)))
      .flat()
      .sort((a: string, b: string) => {
        const year1 = parseInt(getFirstYear(splitWord(a)[0]));
        const year2 = parseInt(getFirstYear(splitWord(b)[0]));
        return year1 - year2;
      });
    this._fullText = sorted.join("<br>");
  }

  private writeTitle(planetName: string, sunName: string) {
    this.titleMain.textContent = toTitle(planetName);
    this.titleSub.textContent = toTitle(sunName);
  }

  private writeTimelineText(text: string) {
    this.timeline.innerHTML = text;
  }
}


// String helpers
function getFirstYear(str: string) {
  return str.match(/(\d+)\D/)[0];
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function splitWord(str: string) {
  return str.split(/(?=[A-Z])/);
}

function toTitle(str: string) {
  return splitWord(str)
    .map((s) => capitalize(s))
    .join(" ");
}

function formatTexts(texts: string[], join = true, infectName: boolean | string = false) {
  texts = texts.map((t, i) => {
    const line = t.split("\n");
    if (infectName) {
      line[0] = `${line[0]} <span class="year" style="font-size:.8rem; font-weight: normal;">(${infectName})</span>`;
    }
    return `${i != 0 && !join ? "<br>" : ""}<span class="year">${line[0]}</span>${NL_SEP}${line.slice(1).join(NL_SEP)}`;
  });
  return texts;
}