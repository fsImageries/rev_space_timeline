import { System } from "./System";
import SystemObject from "./SystemObject";

const NL_SEP = "\n• "
export class InfoPanel {
  public _parentPanel: HTMLDivElement;
  public _titlePanel: HTMLDivElement;
  public _titleSunPanel: HTMLDivElement;
  public _textPanel: HTMLDivElement;
  public _footerPanel: HTMLDivElement;

  private _visible: boolean;

  constructor() {
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
    this._parentPanel.style.visibility = this._visible ? "visible" : "hidden";
  }

  public show(obj: SystemObject) {
    this.writeTitle(obj.data.name, obj.data.parent || "null");
    if (obj.data.texts) this.writeText(obj.data.texts);
    this.visible = true;
  }

  showAll(system: System) {
    const texts = system.flat.map(obj=>obj.data.texts).flat().filter(val=>val).sort((a:string, b:string) => {
      const year1 = parseInt(this.getFirstYear(this.splitWord(a)[0]))
      const year2 = parseInt(this.getFirstYear(this.splitWord(b)[0]))

      return year1 - year2
    })
    
    this.writeText(texts);
    this.visible = true;
  }

  private getFirstYear(str: string) {
    return str.match(/(\d+)\D/)[0]
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

  private writeTitle(planetName: string, sunName: string) {
    this._titlePanel.textContent = this.toTitle(planetName);
    this._titleSunPanel.textContent = this.toTitle(sunName);
  }

  private writeText(texts: string[]) {
    texts = texts.map((t) => {
      const line = t.split("\n");
      return `${line[0]}${NL_SEP}${line.slice(1).join(NL_SEP)}`;
    });
    this._textPanel.textContent = texts.join("\n\r");
  }
}
