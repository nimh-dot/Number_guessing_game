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

document.getElementById('minR').textContent = 1;
document.getElementById('maxR').textContent = 100;

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
    document.getElementById('minR').textContent = 1;
    submit2.max = 100;
    document.getElementById('maxR').textContent = 100;
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
      document.getElementById('minR').textContent = userGuess;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
      //lowOrHi.style.
      submit2.max = userGuess;
      document.getElementById('maxR').textContent = userGuess;
    }
    guessCount ++;
}
//console.log(guessCount);
}

function setCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function delCookie(name) {
  setCookie(name,"",-1);
}

if (getCookie('counter')) {
  var count=getCookie('counter');
  //console.log("f"+count);
  count++;
  //console.log("s"+count);
  setCookie('counter',count,365);
} else {
  setCookie('counter',1,365);
}

//console.log("Вы зашли на эту страницу "+getCookie('counter'));
