// initiate empty arrays

const freeThrowGoal = [];
const freeThrowMade = [];
const freeThrowMissed = [];

// create a function to handle goal, made, and missed TFs

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

  //   loop through arrays to log results
  for (let i = 0; i < freeThrowGoal.length; i++) {}
  for (let i = 0; i < freeThrowMade.length; i++) {}
  for (let i = 0; i < freeThrowMissed.length; i++) {}

  // select message div from DOM
  const message = document.querySelector('#message-container');
  //   conditional logic to display results message
  if (freeThrowMade >= freeThrowGoal) {
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
const form = document.querySelector('form');

// add event handler
form.addEventListener('submit', function (e) {
  e.preventDefault();
  submitForm();
});
// create submit event handler
function submitForm() {
  // get the value of the input field
  const goal = document.getElementById('goal').value;
  const made = document.getElementById('made').value;
  const missed = document.getElementById('missed').value;

  // add inputs to counter function
  freeThrowCounter(goal, made, missed);
}

// function to reset arrays and message
function resetArrays() {
  freeThrowGoal.length = 0;
  freeThrowGoal.length = 0;
  freeThrowMissed.length = 0;
  document.querySelector('#message-container').innerHTML = '';
}
// select reset button
const reset = document.querySelector('#reset');
// add reset event handler
reset.addEventListener('click', function () {
  resetArrays();
  form.reset();
});
