export class ProgressPanel {
  public _loading: HTMLDivElement;
  public _progress: HTMLProgressElement;
  public _startBtn: HTMLDivElement;

  public onclick: (e: MouseEvent) => void;

  private _visible: boolean;

  constructor() {
    this._loading = document.getElementById("loading") as HTMLDivElement;
    this._progress = document.getElementById("progress") as HTMLProgressElement;
    this._startBtn = document.getElementById("startBtn") as HTMLDivElement;

    this._startBtn.onclick = (e) => this.onclick(e);
  }

  public get visible(): boolean {
    return this._visible;
  }
  public set visible(value: boolean) {
    this._loading.style.visibility = value ? "visible" : "hidden";
    this.startBtnvisible = value;
    this._visible = value;
  }

  public get startBtnvisible(): boolean {
    return this._startBtn.style.visibility == "visible" ? true : false;
  }
  public set startBtnvisible(value: boolean) {
    this._startBtn.style.visibility = value ? "visible" : "hidden";
  }

  public set progress(value: number) {
    this._progress.value = value;
  }
}
