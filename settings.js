import { fontsList } from "./fontsList";
import {
  clocks,
  select,
  textColorInput,
  saveSettingsButton,
  textSizeInput,
  backgroundColorInput,
  iFellLuckyButton,
  goCrazyButton,
} from "./domElements";
import {
  syncSettings,
  saveSettingsBetweenSessions,
  syncSettingsElementsWithConfig,
  mutateConfig,
} from "./helpers";
import { settingsConfig } from "./settingsConfig";
import { iFellLucky } from "./iFeelLucky";

// variables

var crazyMode = false;

// setting logic > visibility
clocks.addEventListener("click", () => {
  const settings = document.querySelector("#settings");
  if (settings.style.display === "none" || settings.style.display === "") {
    settings.style.display = "flex";
    syncSettingsElementsWithConfig(settingsConfig);
  } else {
    settings.style.display = "none";
  }
});

// setting logic > fonts

// select > fill logic
fontsList.forEach((font) => {
  createOption(select, font);
});

function createOption(select, option) {
  var newOption = document.createElement("option");
  newOption.value = option;
  newOption.innerText = option;
  newOption.style.fontFamily = option;
  select.appendChild(newOption);
}

// select > change font

select.addEventListener("change", (event) => {
  settingsConfig.fontFamily = fontsList[event.target.selectedIndex];
  syncSettings(settingsConfig);
});

// input > text colors

textColorInput.addEventListener("change", (event) => {
  settingsConfig.color = event.target.value;
  syncSettings(settingsConfig);
});
// input > background colors

backgroundColorInput.addEventListener("change", (event) => {
  settingsConfig.backgroundColor = event.target.value;
  syncSettings(settingsConfig);
});

// input > text size

textSizeInput.addEventListener("change", (event) => {
  settingsConfig.fontSize = parseInt(event.target.value);
  syncSettings(settingsConfig);
});

// save settings logic

saveSettingsButton.addEventListener("click", () => {
  saveSettingsBetweenSessions(settingsConfig);
});

// i feel lucky button handler

iFellLuckyButton.addEventListener("click", () => {
  const luckyConfig = iFellLucky();
  syncSettings(luckyConfig);
});

// go crazy button handler

var interval;
goCrazyButton.addEventListener("click", () => {
  if (!crazyMode) {
    alert('To stop crazy mode - click "Go crazy" button again');
    crazyMode = true;
    interval = setInterval(() => {
      const luckyConfig = iFellLucky();
      syncSettings(luckyConfig);
      console.log("interval");
    }, 1000);
  } else {
    clearInterval(interval);
    interval = null;
    crazyMode = false;
    alert("Crazy mode stoped");
  }
});
