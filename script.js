'use strict';

//select secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//troubleshoot knowing the number
console.log(secretNumber);

//click the check function
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //if no input in gues field or if number is not between 1-20
  if (!guess || guess > 20) {
    document.querySelector('.message').textContent = '⛔ That is NOT a number!';

    //winner !!
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 WINNER..Correct!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      console.log(`score: ${score}, highScore: ${highScore}`);
    }
  }
  //guess is wrong too high or too low
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess < secretNumber
          ? 'WRONG..Guess Higher ⬆️'
          : 'WRONG..Guess Lower ⬇️';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥💥YOU LOSE💥💥';
      document.querySelector('.score').textContent = '0';
    }
  }
});

//play again
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing... 🤔';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  console.log(secretNumber);
});
