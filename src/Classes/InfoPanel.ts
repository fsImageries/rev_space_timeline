import { System } from "../Models/System";
import { TextObject } from "../jsonInterfaces";
import { InfoSpriteManager } from "./InfoSpriteManager";
import SystemObject from "./SystemObject";

type TextsMap = { [key: string]: string };
const NL_SEP = "\n• ";
export class InfoPanel {
  public _parentPanel: HTMLDivElement;
  public _titlePanel: HTMLDivElement;
  public _titleSunPanel: HTMLDivElement;
  public _textPanel: HTMLDivElement;
  public _footerPanel: HTMLDivElement;

  private _visible: boolean;
  private _fullTexts: string;
  private _textMap: TextsMap;
  private _spriteManager: InfoSpriteManager;

  constructor() {
    this._spriteManager = new InfoSpriteManager();

    this._parentPanel = document.getElementById("parent") as HTMLDivElement;
    this._titlePanel = document.getElementById("title") as HTMLDivElement;
    this._titleSunPanel = document.getElementById("title_parent") as HTMLDivElement;
    this._textPanel = document.getElementById("text") as HTMLDivElement;
    this._footerPanel = document.getElementById("footer") as HTMLDivElement;
  }

  public get visible(): boolean {
    return this._visible;
  }
  public set visible(value: boolean) {
    this._visible = value;
    const val = this._visible ? "visible" : "hidden";
    this._parentPanel.style.setProperty("visibility", val, "important");
    // this._parentPanel.style.visibility = this._visible ? "visible !important" : "hidden !important";
  }

  public init(system: System, texts: TextObject[]) {
    this.genTexts(texts);
    const parents = system.flat.filter(
      (obj) => (obj.data.name in this._textMap || obj.data.type == "sun") && obj.object.displayInfo
    );
    // console.log(system.flat)
    if (parents.length == 0) return;
    this._spriteManager.build(parents);
    this._spriteManager.init();
  }

  public show(obj: SystemObject) {
    this.writeTitle(obj.data.name, obj.data.parent || "null");
    if (obj.data.name in this._textMap) {
      this.writeText(this._textMap[obj.data.name]);
    } else if (obj.data.type == "sun") {
      this.writeText(this._fullTexts);
    }
    this.visible = true;
  }

  public showAll(system: System) {
    this.writeTitle(system.name, "");
    this.writeText(this._fullTexts);
    this.visible = true;
  }

  private genTexts(texts: TextObject[]) {
    // generate map from obj to texts
    const map: TextsMap = {};
    const formatted: string[][] = [];
    texts.forEach((obj) => {
      const val = this.formatTexts(obj.texts, false) as string[];
      formatted.push(val);
      map[obj.name] = val.join("\n\r");
    });
    this._textMap = map;

    // generate general text (all)
    const sorted = texts
      .map((obj) => this.formatTexts(obj.texts, false, this.capitalize(obj.name)))
      .flat()
      .sort((a: string, b: string) => {
        const year1 = parseInt(this.getFirstYear(this.splitWord(a)[0]));
        const year2 = parseInt(this.getFirstYear(this.splitWord(b)[0]));
        return year1 - year2;
      });
    this._fullTexts = sorted.join("\n\r");
  }

  private getFirstYear(str: string) {
    return str.match(/(\d+)\D/)[0];
  }

  private capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private splitWord(str: string) {
    return str.split(/(?=[A-Z])/);
  }

  private toTitle(str: string) {
    return this.splitWord(str)
      .map((s) => this.capitalize(s))
      .join(" ");
  }

  private formatTexts(texts: string[], join = true, infectName: boolean | string = false) {
    texts = texts.map((t) => {
      const line = t.split("\n");
      if (infectName) {
        line[0] = `${line[0]} (${infectName})`;
      }
      return `${line[0]}${NL_SEP}${line.slice(1).join(NL_SEP)}`;
    });
    if (join) return texts.join("\n\r");
    return texts;
  }

  private writeTitle(planetName: string, sunName: string) {
    this._titlePanel.textContent = this.toTitle(planetName);
    this._titleSunPanel.textContent = this.toTitle(sunName);
  }

  private writeText(text: string) {
    this._textPanel.textContent = text;
  }
}
