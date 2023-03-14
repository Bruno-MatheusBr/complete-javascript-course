'use strict';

// Selecting elements
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

let current0 = 0;

// Roling dice functionality
btnRoll.addEventListener('click', function () {
    // 1. Generate the random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Checking for rolls rules
    if (dice !== 1) {
        current0 += dice;
        current0El.textContent = current0;
    } else {
        current0 = 0
        current0El.textContent = current0;
    }
})