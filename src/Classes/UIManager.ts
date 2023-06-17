import { InfoPanel } from "./InfoPanel";
import { ProgressPanel } from "./ProgressPanel";
import { World } from "./World";

export class UIManager {
  public infoPanel: InfoPanel;
  public progressPanel: ProgressPanel;

  public homeBtn: HTMLElement;
  public switchBtn: HTMLButtonElement;

  public cornerButton: CornerButton;

  constructor() {
    this.infoPanel = new InfoPanel();
    this.progressPanel = new ProgressPanel();

    this.cornerButton = new CornerButton();
    this.switchBtn = document.getElementById("switchBtn") as HTMLButtonElement;
    this.homeBtn = document.getElementById("home");
  }

  public set switchBtnShow(value: boolean) {
    this.switchBtn.style.opacity = value ? "1" : "0";
  }
}

class CornerButton {
  public container: HTMLElement;
  public forward: HTMLElement;

  public icons: HTMLElement[];
  public cur: HTMLElement;

  private _tar: string;

  constructor() {
    const icons: HTMLElement[] = [];
    for (const i of document.getElementsByClassName("cornerImg")) icons.push(i as HTMLElement);
    this.icons = icons;
    this.cur = icons.find((el) => el.id == "help");
    this.show(this.cur);
  }

  public async clickHandler(target: HTMLElement, world: World) {
    switch (target.id) {
      case "help":
        break;
      case "forward": {
        const sysName = target.getAttribute("data-target");
        if (!sysName) return;
        console.log(sysName);
        await world.switchSystem(sysName);
        break;
      }
    }
  }

  private show(elem: HTMLElement) {
    elem.style.translate = "0";
  }

  private hide(elem: HTMLElement) {
    elem.style.translate = "-5vw";
  }

  public set forwardTarget(value: string) {
    if (this._tar == value) return;
    this._tar = value;
    const icon = this.icons.find((el) => el.id == "forward");
    icon.setAttribute("data-target", this._tar);
  }

  public switch(tar: string) {
    if (this.cur.id == tar) return;
    const target = this.icons.find((el) => el.id == tar);

    // console.log(options)
    // if (tar === "forward") target.setAttribute("data-target", options.target)

    this.hide(this.cur);
    this.show(target);
    this.cur = target;
  }
}
