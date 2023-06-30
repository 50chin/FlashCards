const fs = require('fs');


class Question {
  constructor() {}

  // const mult = fs.readFileSync("./topics/Мультики.txt", "utf-8");
  // const film = fs.readFileSync("./topics/Эмоджи Фильмы.txt", "utf-8");
  // const serial = fs.readFileSync("./topics/serials.txt", "utf-8");

  readLineTheme(theme) {
    const arrQuestion = [];
    const readThemes = fs.readFileSync(`./topics/${theme}.txt`, 'utf-8');
    for (i = 0; i < readThemes.length; i += 3) {
      arr.push(readThemes[i]);
    }
    return arrQuestion;
  }
}

module.exports = Question;
