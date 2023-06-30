const readlineSync = require('readline-sync');
const player = require('play-sound')(opts = {})

const userName = readlineSync.question('Напишите свое имя ');
console.log(`Привет ${userName} !`);

const themes = ['Cartoon', 'Serials', 'EmojiCinema'];
const iChose = readlineSync.keyInSelect(themes, 'Выберите тему');

let count = 0;
for (let i = 0; i <  ; i += 1) {
   
  }



console.log(`Спасибо за игру!!! Правильных ответов: ${count} из 5`);
