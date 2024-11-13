import { fontsList } from "./fontsList";

export function iFellLucky() {
  var settingsConfig = {
    fontFamily: getRandomFont(fontsList),
    color: getRandomColor(),
    backgroundColor: getRandomColor(),
    fontSize: getRandomNumber(14, 128),
  };
  return settingsConfig;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomFont(list) {
  return list[getRandomNumber(0, list.length - 1)];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
