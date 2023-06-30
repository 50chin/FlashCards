const fs = require('fs');

class Question {
  constructor(num) {
    this.num = num;
  }

  // const mult = fs.readFileSync('./topics/Cartoon.txt', 'utf-8');
  // const film = fs.readFileSync("./topics/Эмоджи Фильмы.txt", "utf-8");
  // const serial = fs.readFileSync("./topics/serials.txt", "utf-8");

  readLineTheme(theme) {
    const readThemes = fs
      .readFileSync(`${__dirname}/topics/${theme}.txt`, 'utf-8')
      .split('\n');
    // const arr = mult.split('\n');
    const arrQuestion = [];
    for (let i = 0; i < readThemes.length; i += 3) {
      arrQuestion.push(readThemes[i]);
    }
    return arrQuestion;
  }
}

// console.log(readLineTheme());

module.exports = Question;
