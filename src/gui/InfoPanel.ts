import { UIManager } from "./UIManager";

export class InfoPanelManager {
    public main: HTMLDivElement;

    constructor(
        public uiManager: UIManager
    ) {
        this.main = document.getElementById("infoPanel") as HTMLDivElement 
    }

    public set visibility(value: boolean) {
        this.main.style.visibility = value ? "visible" : "hidden"
    }

    public set visible(value: boolean) {
        value ? 
        this.main.classList.add("checked"):
        this.main.classList.remove("checked")
    }
}