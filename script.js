'use strict';
/*
//querySelector a method available in the document object; we need to pass in a selector (exactly the same selector we use in css)
console.log(document.querySelector('.message').textContent); //left to write are executed when we have more points
//DOM - document object model = strucutred representation of HTML documents.
document.querySelector('.message').textContent = 'Corect Number!';
console.log(document.querySelector('.message').textContent); //when we read it, we have the new content
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);
*/

//In order to listen to events we have to select the element where the event should happen
//document.querySelector('.check')// will select the button element itself
//define secret number at the beginning, before to click on the button of guessing (other wise secret number we'll be change each time)

let secretNumber = Math.trunc(Math.random() * 20) + 1; //math is an object given by JS which has many methods like is random
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess); //when we have an input, usually it is a string
  //when there is no input
  if (!guess) {
    //  document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No number!');
    //when player wins:
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is to high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   //when guess is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //the name of event they clicked + event function
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  const guess = document.querySelector('.guess').value;
  //document.querySelector('guess').textContent
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
//pass in the type of the event; this is a function expression
//to compare a string with a number, we have to converet string to number
