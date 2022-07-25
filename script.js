var randomNumber = Math.floor(Math.random() * 100) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var outputGuessesByRange = document.getElementById('outputGuessesByRange');
var guessCount = 1;
var resetButton;
var submit2 = document.getElementById('submit2'); 

submit2.focus();

function checkGuess() {
}

function setGameOver() {
    submit2.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;
  
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
    submit2.min = 1;
    submit2.max = 100;
    submit2.disabled = false;
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

function fun1 () {
  outputGuessesByRange.textContent = submit2.value;
}

function fun2() {
  document.getElementById('outputGuessesByRange').textContent = submit2.value;

  var userGuess = Number(submit2.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
      submit2.min = userGuess;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
      //lowOrHi.style.
      submit2.max = userGuess;
    }
    guessCount ++;
}
//console.log(guessCount);
}
