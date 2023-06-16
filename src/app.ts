import { Startup } from "./Classes/Startup";

document.title = `${document.title} (${APP_VERSION})`
document.getElementById("version").innerText = `v${APP_VERSION}`

window.onload = () => {
  const start = new Startup()

  new Promise((resolve) => {
    resolve(null);
  }).then(async () => {
    await start.start()
  });
}