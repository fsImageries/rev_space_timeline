import { World } from "../ecs/World";
import { InfoPanelManager } from "./InfoPanel";
import { ProgressBar } from "./ProgressBar";

export class UIManager {
  infoPanel: InfoPanelManager;
  progress: ProgressBar;

  constructor(public world: World) {
    this.infoPanel = new InfoPanelManager(this);
    this.progress = new ProgressBar();
  }
}
