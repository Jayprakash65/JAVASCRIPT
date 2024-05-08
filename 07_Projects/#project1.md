# Solution Code 

## project link

[CLICK HERE](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## Project 1 (Color Changer)

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button) {
  console.log(button)
  button.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey'
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = 'white'
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue'
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow'
    }
  })
})

```
-----
## Project 2 (BMI Calculator)

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Plz bhai sahi height value dal 😡${height}`;
  }

  else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Plz bhai sahi weight value dal 😡${weight}`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show results
    results.innerHTML = `<span>${bmi}</span>`

    const bmiWeight = document.querySelector('#bmi-wight')

    if(bmi < 18.6){
    bmiWeight.innerHTML = `You are Under Weight 😒`
    bmiWeight.style.color = '	#E97451'
    }

    if(bmi >= 18.6 && bmi <= 24.9){
      bmiWeight.innerHTML = `You are Normal congrts 🙂🔥`
      bmiWeight.style.color = '#DAF7A6'
      }

    if(bmi > 24.9){
      bmiWeight.innerHTML = `You are Over Weight (kam kahana kah bhai 🙂)`
      bmiWeight.style.color = '#D70040'
      }

  }
});

```

## Project 3 (Clock)

```javascript
const clock = document.querySelector('#clock');

setInterval(function() {
let date = new Date();
//console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString()
}, 1000);
```

## Project 4 (Guess Game)

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess)
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('plz enter valid num');
  } else if (guess < 1) {
    alert('plz enter a num more than one');
  } else if (guess > 100) {
    alert('plz enter a num less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over 😒. Random num was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too LOW`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too LOW`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```


## Project 5 

```javascript
  console.log('Project 5');

const insert = document.querySelector('#insert')

window.addEventListener('keydown', function(e){
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
    
    `;
});

```




## Project 6 (random bgc change after of 1 sec interval)

```javascript
// genrating random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]  
    }
    return color;
};

let intervalId;

const startchangingColor = function(){

    // safty check for better code 

    if (intervalId == null) {
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor (){
        document.body.style.backgroundColor = randomColor()
    }
     
   
};

const stopchangingColor = function(){
    clearInterval(intervalId)
    intervalId = null
};


document.querySelector('#start').addEventListener('click', startchangingColor)
document.querySelector('#stop').addEventListener('click', stopchangingColor)

```

