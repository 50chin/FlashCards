const fs = require('fs');
// добавил классы
class Answer {
  constructor(num) {
    this.num = num;
  }

  // const mult = fs.readFileSync('./topics/Мультики.txt', 'utf-8');
  // const film = fs.readFileSync('./topics/Эмоджи Фильмы.txt', 'utf-8');
  // const serial = fs.readFileSync('./topics/serials.txt', 'utf-8');

  readLineAnswer(theme) {
    const line = fs
      .readFileSync(`${__dirname}/topics/${theme}.txt`, 'utf-8')
      .split('/n');
    const arrAnswer = [];
    for (let i = 1; i < line.length; i += 3) {
      arrAnswer.push(line[i]);
    }
    return arrAnswer;
  }
}

module.exports = Answer;
