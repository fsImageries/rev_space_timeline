import { World } from "../ecs/World";
import { InfoPanelManager } from "./InfoPanel";

export class UIManager {
  infoPanel: InfoPanelManager;

  constructor(public world: World) {
    this.infoPanel = new InfoPanelManager(this);
  }
}
