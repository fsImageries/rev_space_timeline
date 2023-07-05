import { InfoPanelManager } from "./InfoPanel";

export class UIManager {
    infoPanel: InfoPanelManager;

    
    constructor() {
        this.infoPanel = new InfoPanelManager()
        
    }
}