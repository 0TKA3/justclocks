import { clocks } from "./domElements";
import { formatDate, syncSettings } from "./helpers";
import { settingsConfig } from "./settingsConfig";
// engine start
var initDate = new Date();
clocks.innerText = `${initDate.getHours()}:${initDate.getMinutes()}:${initDate.getSeconds()}`;

window.addEventListener("DOMContentLoaded", () => {
  syncSettings(settingsConfig);
  setInterval(() => {
    var date = new Date();
    var formattedDate = formatDate([date.getHours(), date.getMinutes(), date.getSeconds()]);
    clocks.innerText = `${formattedDate[0]}:${formattedDate[1]}:${formattedDate[2]}`;
  }, 1000);
});
