const highScoreArr = [];
let scoreboard = new Score(0, 'High Score:');

const highScoreMade = document.getElementById('high-score-made');
highScoreMade.append(scoreboard.message);

// func to handle high scores
const createHighScore = () => {
  // create a state management system for high scores

  let currentSessionHighScore = 0;

  // func to add score to high score arr
  const addScore = (score) => {
    highScoreArr.push(score);
    if (score > currentSessionHighScore) {
      currentSessionHighScore = score;
    }
  };
  // search for highest score in arr
  const getHighScore = () => {
    const highScoreFromArr = Math.max(...highScoreArr);
    console.log('inside func', highScoreFromArr);
    return highScoreFromArr;
  };

  const getCurrentSessionHighScore = () => {
    return currentSessionHighScore;
  };

  return {
    addScore,
    getHighScore,
    getCurrentSessionHighScore,
  };
};

// select form from DOM
const submitFormBtn = document.getElementById('form');
console.log(submitFormBtn);

// add event handler
submitFormBtn.addEventListener('submit', function (e) {
  e.preventDefault();
  const scoreNum = document.getElementById('made').value;
  const highScore = document.getElementById('high-score');

  // prevent highscore from displaying more than once
  if (highScore.innerText.length > 0) {
    highScore.innerText = '';
  }

  // add score to the scoreboard
  createHighScore().addScore(scoreNum);
  console.log('scoreNum', scoreNum);
  console.log('scoreArr', highScoreArr);
  let highScoreFromArr = createHighScore().getHighScore();
  console.log('highScore', highScore);
  // if (highScoreFromArr > scoreNum) {
  highScore.append(highScoreFromArr);
  // }
});
