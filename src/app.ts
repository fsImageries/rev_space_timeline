import { Startup } from "./Classes/Startup";
import { SystemsData } from "./jsonInterfaces";
import celestialData from "./object_data.yaml";

import "./styles/baseStyle.css";
import "./styles/infoPanel.css";
import "./styles/progressBar.css";


const data = celestialData as SystemsData;
const start = new Startup()

new Promise((resolve) => {
  resolve(null);
}).then(async () => {
  await start.start(data.systems[0])
});