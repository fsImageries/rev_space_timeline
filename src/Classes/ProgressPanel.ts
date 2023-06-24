export class ProgressPanel {
  public _loading: HTMLDivElement;
  public _progress: HTMLProgressElement;

  public onclick: (e: MouseEvent) => void;

  private _visible: boolean;

  constructor() {
    this._loading = document.getElementById("loading") as HTMLDivElement;
    this._progress = document.getElementById("progress") as HTMLProgressElement;
  }

  public get visible(): boolean {
    return this._visible;
  }
  public set visible(value: boolean) {
    this._loading.style.visibility = value ? "visible" : "hidden";
    this._visible = value;
  }

  public set value(value: number) {
    this._progress.value = value;
  }
}
