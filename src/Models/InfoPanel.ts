

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
        this._titleSunPanel = document.getElementById("title_sun") as HTMLDivElement
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

    public writeTitle(planetName:string, sunName:string) {
        this._titlePanel.textContent = `${planetName} `
        this._titleSunPanel.textContent = `- ${sunName}`
    }

    public writeText(texts:string[]) {
        texts = texts.map(t => {
            const [year, txt] = t.split("\n")
            return `${year} - ${txt}`
        })
        this._textPanel.textContent = texts.join("\n")
    }
}