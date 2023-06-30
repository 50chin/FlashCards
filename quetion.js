const fs = require("fs");

const mult = fs.readFileSync("./topics/Мультики.txt", "utf-8");
const film = fs.readFileSync("./topics/Эмоджи Фильмы.txt", "utf-8");
const serial = fs.readFileSync("./topics/serials.txt", "utf-8");

function readLineTheme(theme) {
  const arrQuestion = [];
  const line = theme.split("\r\n");
  for (i = 0; i < line.length; i += 3) {
    arr.push(line[i]);
  }
  return arrQuestion;
}
console.log(readLineTheme(film));

module.exports = readLineTheme;
