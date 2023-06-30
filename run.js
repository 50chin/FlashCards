const readlineSync = require('readline-sync');
const Answer = require('./answer');
const Question = require('./question');
// const player = require('play-sound')((opts = {}));

const an = new Answer();
const qu = new Question();

const userName = readlineSync.question('Напишите свое имя ');
console.log(`Привет ${userName} !`);

const themes = ['Cartoon', 'EmojiCinema', 'Serials'];
const Choose = readlineSync.keyInSelect(themes, 'Выберите тему');

let score = 0;
for (let i = 0; i < qu.readLineTheme(themes[Choose]).length; i += 1) {
  const user = readlineSync.keyInSelect(
    an.readLineAnswer(themes[Choose]),
    qu.readLineTheme(themes[Choose])[i]
  );
  if (i === user) {
    score += 1;
  }
}

console.log(`Спасибо за игру!!! Правильных ответов: ${score} из 5`);
