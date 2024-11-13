import { saveSettingsBetweenSessions } from "./helpers";

export var settingsConfig;

const savedSettings = localStorage.getItem("clock-config");

if (!savedSettings) {
  settingsConfig = {
    fontFamily: "Spicy Rice",
    color: "#C4BDFF",
    backgroundColor: "#2F316F",
    fontSize: 72,
  };
} else {
  settingsConfig = JSON.parse(savedSettings);
}
