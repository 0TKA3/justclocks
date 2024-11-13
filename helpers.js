import {
  clocks,
  textColorInput,
  select,
  textSizeInput,
  html,
  backgroundColorInput,
} from "./domElements";
import { settingsConfig } from "./settingsConfig";
export function syncSettings(config) {
  clocks.style.fontFamily = config.fontFamily;
  clocks.style.color = config.color;
  clocks.style.fontSize = `${config.fontSize}px`;
  html.style.backgroundColor = config.backgroundColor;

  syncSettingsElementsWithConfig(config);
  mutateConfig(config);
}

export function formatDate(dateArr) {
  var result = dateArr.map((item) => {
    if (item.toString().length > 1) {
      return item.toString();
    } else {
      return `0${item}`;
    }
  });
  return result;
}

export function saveSettingsBetweenSessions(config) {
  localStorage.setItem("clock-config", JSON.stringify(config));
}

export function syncSettingsElementsWithConfig(config) {
  textColorInput.value = config.color;
  select.value = config.fontFamily;
  textSizeInput.value = config.fontSize;
  backgroundColorInput.value = config.backgroundColor;
}

export function mutateConfig(config) {
  settingsConfig.fontFamily = config.fontFamily;
  settingsConfig.color = config.color;
  settingsConfig.backgroundColor = config.backgroundColor;
  settingsConfig.fontSize = config.fontSize;
}
