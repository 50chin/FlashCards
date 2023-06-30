const readlineSync = require('readline-sync');
const Answer = require('./answer');
const Question = require('./question');
const player = require('play-sound')((opts = {}));

const an = new Answer();
const qu = new Question();

const userName = readlineSync.question('Напишите свое имя ');
console.log(`Привет ${userName} !`);

const themes = ['Cartoon', 'EmojiCinema', 'Serials'];
const Choose = readlineSync.keyInSelect(themes, 'Выберите тему');
console.log();
let arr = qu.readLineTheme(themes[Choose]);
let arr2 = an.readLineAnswer(themes[Choose]);
let score = 0;
for (let i = 0; i < arr.length; i += 1) {
  const ques = readlineSync.question(`\n${arr[i]}\n`);

  if (ques.toLowerCase() === arr2[i].toLowerCase()) {
    console.log('\nВерно✅');
    player.play('./sounds/stalin-pravilno.wav');
    score += 1;
  } else {
    console.log('\nНе верно❌');
    player.play('./sounds/Sound_96762500 1644077316.mp3');
    console.log('Правильный ответ:', arr2[i]);
  }
}
// setTimeout(
//   player.play('./sounds/zvuk-aplodismentov-korotkiy-5-sek-33919.wav'),
//   3000
// );
console.log();
console.log(`Спасибо за игру ${userName}!!! 
Правильных ответов: ${score} из 5`);
console.log();
console.log();
console.log();
