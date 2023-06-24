import Constants from "../helpers/Constants";
import { InfoPanel } from "./InfoPanel";
import { ProgressPanel } from "./ProgressPanel";
import { World } from "./World";

export class UIManager {
  public infoPanel: InfoPanel;
  public progressPanel: ProgressPanel;
  public cornerButton: CornerButton;

  public homeBtn: HTMLElement;
  public zoomElement: HTMLElement;

  constructor() {
    this.infoPanel = new InfoPanel();
    this.progressPanel = new ProgressPanel();

    this.cornerButton = new CornerButton();
    this.homeBtn = document.getElementById("home");
    this.zoomElement = document.getElementById("zoomArea");
  }

  public set zoomVisible(value: boolean) {
    this.zoomElement.style.visibility = value ? "visible" : "hidden";
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
    for (const i of document.getElementsByClassName("cornerBtn")) icons.push(i as HTMLElement);
    this.icons = icons;
    this.cur = icons.find((el) => el.id == "help");
    // this.show(this.cur);
  }

  public async clickHandler(target: HTMLElement, world: World) {
    switch (target.id) {
      case "help":
        Constants.UIMANAGER.infoPanel.updateContent(Constants.UIMANAGER.infoPanel.help, true);
        break;
      case "forward": {
        const sysName = target.getAttribute("data-target");
        if (!sysName) return;
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

  public showCurrent() {
    this.show(this.cur);
  }
  public hideCurrent() {
    this.hide(this.cur);
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

    this.hide(this.cur);
    this.show(target);
    this.cur = target;
  }
}
