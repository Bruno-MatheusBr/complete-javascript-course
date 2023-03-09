'use strict';

/*
// ########## 72. Selection and Manipulating Elements ##########
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/

const secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secreteNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (score > 1) {
    if (guess < secreteNumber) {
      document.querySelector('.message').textContent =
        '⬆️ The number is higher!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '⬇️ The number is lower!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    if (score > 0) {
      document.querySelector('.message').textContent = '💥 You lose';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = score;
    }
  }
});

// if (!guess) {
//   document.querySelector('.message').textContent = '⛔ No number!';
// } else if (guess === secreteNumber) {
//   document.querySelector('.message').textContent = '🎉 Correct Number!';
// } else if (guess < secreteNumber) {
//   document.querySelector('.message').textContent = '⬆️ The number is higher!';
//   score--;
//   document.querySelector('.score').textContent = score;
// } else {
//   document.querySelector('.message').textContent = '⬇️ The number is lower!';
//   score--;
//   document.querySelector('.score').textContent = score;
// };
