const readlineSync = require('readline-sync');
const Answer = require('./answer');
const Question = require('./question');
const player = require('play-sound')((opts = {}));

const an = new Answer();
const qu = new Question();

const userName = readlineSync.question('Напишите свое имя ');
console.log(`Привет ${userName} !`);

const themes = ['Cartoon', 'Serials', 'EmojiCinema'];
const iChoose = readlineSync.keyInSelect(themes, 'Выберите тему');

let score = 0;
for (let i = 0; i < 5; i += 1) {
  const user = readlineSync.keyInSelect(
    an.readLineAnswer(themes[iChoose]),
    qu.readLineTheme(themes[iChoose])[i]
  );
  if (i === user) {
    score += 1;
  }
}

console.log(`Спасибо за игру!!! Правильных ответов: ${score} из 5`);
