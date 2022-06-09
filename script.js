'use strict';
/*document.querySelector('.message').textContent = 'Correct Number!!';
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 10;
*/

let number = getRandomNumberBetween1And20();
let highScore = 0;
let score = 20;

function getRandomNumberBetween1And20() {
  return Math.trunc(Math.random() * 20) + 1;
}

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let updateScore = function () {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number!!');
  } else if (score > 1) {
    if (number == guess) {
      displayMessage('Right Guess!!');
      if (score > highScore) highScore = score;
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if (guess !== number) {
      score--;
      displayMessage(`Guess too ${guess < number ? 'low' : 'high'} !!`);
    }
  } else {
    displayMessage('You Lose the game!!');
    score = 0;
  }
  updateScore();
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').removeAttribute('style');
  document.querySelector('.number').removeAttribute('style');
  document.querySelector('.number').textContent = '?';
  displayMessage('Start Guessing!!');
  document.querySelector('.highscore').textContent = highScore;
  updateScore();
  document.querySelector('.guess').value = '';
  number = getRandomNumberBetween1And20();
});
