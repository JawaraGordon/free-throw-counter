// initialize empty arrays
const freeThrowGoal = [];
const freeThrowMade = [];
const freeThrowMissed = [];

// function to handle goal, made, and missed TFs
function freeThrowCounter(goal, made, missed) {
  // function to add numbers to arrays

  const addToArray = (num) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr[i] = i + 1;
    }

    return arr;
  };

  // add params to arrays
  freeThrowGoal.push(addToArray(goal));
  freeThrowMade.push(addToArray(made));
  freeThrowMissed.push(addToArray(missed));

  // instantiate score obj display score
  let scoreboard = new Score(0, 'High Score:');

  const score = document.getElementById('score');
  score.append(scoreboard.message);

  // array to handle made shots for scoreboard
  const madeResult = addToArray(made);

  for (let i = 0; i < madeResult.length; i++) {
    scoreboard.increment();
  }

  const highScore = document.getElementById('high-score');
  highScore.append(scoreboard.count);

  //   loop through arrays to log results for graph
  //   for (let i = 0; i < freeThrowGoal.length; i++) {}
  //   for (let i = 0; i < freeThrowMade.length; i++) {}
  //   for (let i = 0; i < freeThrowMissed.length; i++) {}

  // select message div from DOM
  const message = document.querySelector('#message-container');
  //   conditional logic to display results message

  if (freeThrowGoal <= 0) {
    message.innerHTML = '';
  } else if (freeThrowMade >= freeThrowGoal) {
    message.innerHTML = `YOU'RE ON 🔥🔥🔥`;
  } else if (freeThrowMissed > freeThrowMade) {
    message.innerHTML = 'Better luck next time...';
  } else if (freeThrowMissed < freeThrowMade) {
    message.innerHTML = 'Keep up the good work!';
  } else if (freeThrowMissed <= freeThrowMade) {
    message.innerHTML = 'Not bad, but keep practicing.';
  }
}

// select form from DOM
const form = document.getElementById('form');
// add event handler
form.addEventListener('submit', function (e) {
  e.preventDefault();
  submitForm();
});
// create submit event handler / add inputs to counter and makes chart
function submitForm() {
  // block score and high-score from displaying more than once
  const score = document.getElementById('score');
  const highScore = document.getElementById('high-score');
  if (score.innerText.length > 0) {
    score.innerText = '';
  }
  if (highScore.innerText.length > 0) {
    highScore.innerText = '';
  }

  // get the value of the input field
  const goal = document.getElementById('goal').value;
  const made = document.getElementById('made').value;
  const missed = document.getElementById('missed').value;
  // add animations to forms and message board
  document.querySelector('.btn').classList.add('bounce-top');
  const messageContainer = document.querySelector('#message-container');
  messageContainer.classList.add('tracking-in-contract-bck');
  const formContainer = document.querySelector('.form-container');
  formContainer.classList.remove('slide-in-blurred-top');
  // add inputs to counter function
  freeThrowCounter(goal, made, missed);
  // create a chart from the submitted data
  makeChart(goal, made, missed);
}
// function to reset arrays
function resetArrays() {
  freeThrowGoal.length = 0;
  freeThrowMade.length = 0;
  freeThrowMissed.length = 0;
}
// function to reset scoreboard
function resetScoreboard() {
  const highScore = document.getElementById('high-score');
  highScore.innerText = '';
  const score = document.getElementById('score');
  score.innerText = '';
}
// select reset button
const reset = document.querySelector('#reset');
// add reset event handler for arrays message, inputs and chart
reset.addEventListener('click', function () {
  resetArrays();
  resetScoreboard();
  document.querySelector('#message-container').innerHTML = '';
  document
    .querySelector('#message-container')
    .classList.remove('tracking-in-contract-bck');
  document.querySelector('#goal').value = '';
  document.querySelector('#made').value = '';
  document.querySelector('#missed').value = '';
  document.querySelector('.btn').classList.remove('bounce-top');
  document
    .querySelector('.form-container')
    .classList.add('slide-in-blurred-top');

  destroyChart();
});

// function with conditional to reset made input value === ''
const resetScoreboardValues = () => {
  const goal = document.querySelector('#goal').value;
  const made = document.querySelector('#made').value;
  const missed = document.querySelector('#missed').value;

  if (made === '') {
    setTimeout(() => {
      resetArrays();
      resetScoreboard();
    }, 1000);
  }
};

// timer that will reset scoreboard values after 1 second if input value for made === ''
setInterval(() => {
  resetScoreboardValues();
}, 1000);

// toggles score chart view / shows & hides message board
const toggleChart = () => {
  const chartToggle = document.querySelector('#chart-toggle');
  const messageBoard = document.querySelector('#message-container');
  const chartContainer = document.querySelector('.chart-container');
  const formContainer = document.querySelector('.form-container');
  chartToggle.addEventListener('click', function () {
    console.log('chart cont', chartContainer);
    if (chartToggle.checked === true || chartContainer.classList === 'hidden') {
      messageBoard.classList.remove('show');
      messageBoard.classList.add('hidden');
      chartContainer.classList.remove('hidden');
      chartContainer.classList.add('show');
      formContainer.classList.remove('show');
      formContainer.classList.add('hidden');
    } else {
      messageBoard.classList.add('show');
      messageBoard.classList.remove('hidden');
      chartContainer.classList.remove('show');
      chartContainer.classList.add('hidden');
      formContainer.classList.add('show');
      formContainer.classList.remove('hidden');
    }
  });
};
