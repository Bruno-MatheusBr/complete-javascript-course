'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Conditions
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Roling dice functionality

btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generate the random dice number
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        // 3. Checking for roll rules
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Holding score
btnHold.addEventListener('click', function () {
    if (playing) {
        //Transferring the "current score" to "score"
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        // Checking if there is a winner
        if (scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});

const resetGame = function () {
    player0El.classList.add('player--active');
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore = 0;
    scores[0] = 0;
    scores[1] = 0;
    playing = true;
}

// Reseting the game
btnNew.addEventListener('click', function () {
    if (player0El.classList.contains('player--winner')) {
        player0El.classList.remove('player--winner');
        resetGame();
    } else {
        player1El.classList.remove('player--winner');
        player1El.classList.remove('player--active');
        activePlayer = 0;
        resetGame();
    }
});