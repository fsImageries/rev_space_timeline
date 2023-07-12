export class ProgressBar {
    private _loadingArea: HTMLDivElement;
    private _loading: HTMLDivElement;
    private _progress: HTMLProgressElement;
    private _visible = false

    constructor() {
        this._loadingArea = document.getElementById("loadingArea") as HTMLDivElement;
        this._loading = document.getElementById("loading") as HTMLDivElement;
        this._progress = document.getElementById("progress") as HTMLProgressElement
    }

    public get visible(): boolean {
        return this._visible;
    }
    public set visible(value: boolean) {
        this._loadingArea.style.visibility = value ? "visible" : "hidden";
        this._loading.style.visibility = value ? "visible" : "hidden";
        this._visible = value;
    }

    public set value(value: number) {
        this._progress.value = value;
    }
}