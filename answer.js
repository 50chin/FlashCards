const fs = require("fs");

const mult = fs.readFileSync("./topics/Мультики.txt", "utf-8");
const film = fs.readFileSync("./topics/Эмоджи Фильмы.txt", "utf-8");
const serial = fs.readFileSync("./topics/serials.txt", "utf-8");

function readLineAnswer(theme) {
  const arrAnswer = [];
  const line = theme.split("\r\n");
  for (i = 1; i < line.length; i += 3) {
    arrAnswer.push(line[i]);
  }
  return arrAnswer;
}
console.log(readLineAnswer(film));
