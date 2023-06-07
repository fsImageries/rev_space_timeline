import SystemObject from "./SystemObject";


export class InfoPanel {
    public _parentPanel: HTMLDivElement;
    public _titlePanel: HTMLDivElement;
    public _titleSunPanel: HTMLDivElement;
    public _textPanel: HTMLDivElement;
    public _footerPanel: HTMLDivElement;

    private _visible: boolean;

    constructor() {
        this._parentPanel = document.getElementById("parent") as HTMLDivElement
        this._titlePanel = document.getElementById("title") as HTMLDivElement
        this._titleSunPanel = document.getElementById("title_parent") as HTMLDivElement
        this._textPanel = document.getElementById("text") as HTMLDivElement
        this._footerPanel = document.getElementById("footer") as HTMLDivElement
    }

    public get visible(): boolean {
        return this._visible;
    }
    public set visible(value: boolean) {
        this._visible = value;
        this._parentPanel.style.opacity = this._visible ? "1" : "0"
    }

    public show(obj: SystemObject) {
        this.writeTitle(obj.data.name, obj.data.parent || "null")
        if (obj.data.texts)
        this.writeText(obj.data.texts)
        this.visible = true
    }

    private capitalize(str:string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    private splitWord(str: string) {
        return str.split(/(?=[A-Z])/)
    }

    private toTitle(str:string) {
        return this.splitWord(str).map(s=>this.capitalize(s)).join(" ")
    }

    private writeTitle(planetName:string, sunName:string) {
        this._titlePanel.textContent = this.toTitle(planetName)
        this._titleSunPanel.textContent = this.toTitle(sunName)
    }

    private writeText(texts:string[]) {
        texts = texts.map(t => {
            const [year, txt] = t.split("\n")
            return `${year} - ${txt}`
        })
        this._textPanel.textContent = texts.join("\n\r")
    }
}