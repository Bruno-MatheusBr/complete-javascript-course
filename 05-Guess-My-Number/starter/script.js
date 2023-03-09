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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No number entered
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    // When player wins
  } else if (guess === secreteNumber) {
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // When player guess wrong
  } else if (score > 1) {
    if (guess < secreteNumber) {
      document.querySelector('.message').textContent = '⬇️ To low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '⬆️ To high!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // When player loose
  } else {
    if (score > 0) {
      document.querySelector('.message').textContent = '💥 You loose';
      document.querySelector('body').style.backgroundColor = '#Ff0000';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = secreteNumber;
    } else {
      document.querySelector('.score').textContent = score;
    }
  }
});

// Reload page for play angain
document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});
