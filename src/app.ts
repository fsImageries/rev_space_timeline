import { Startup } from "./Classes/Startup";
import { SystemsData } from "./jsonInterfaces";
import celestialData from "./data/object_data.yaml";


window.onload = () => {
  const data = celestialData as SystemsData;
  const start = new Startup()

  new Promise((resolve) => {
    resolve(null);
  }).then(async () => {
    await start.start(data.systems[0])
  });
}