// create a state management system for high scores
const highScoreArr = [];

// score must persist during game sessions
highScoreArr.push();

// scores can be stored for the duration of an individual session
highScoreArr.forEach((highScore) => {
  console.log(highScore);

  // fetch and display score from user input
  const highScore = document.getElementById('high-score');
  const score = document.getElementById('score');

  // decide if the score is the highest score for that session

  if (score > highScore) {
    const newHighScore = 0;
    newHighScore = score;

    // update scoreboard to display the current session high score
    score.innerText = newHighScore;

    return newHighScore;
  }
});
