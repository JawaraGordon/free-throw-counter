// create a state management system for high scores
const highScoreArr = [];

// create a func to handle high scores

const highScoreHandler = () => {
  // fetch and display score from user input
  const scoreNum = document.getElementById('made').value;
  

  // score must persist during game sessions
  highScoreArr.push(scoreNum);

  console.log(highScoreArr);

  // scores can be stored for the duration of an individual session
  highScoreArr.forEach((highScore) => {
    const highScoreboard = document.getElementById('high-score');
    console.log(highScore);

    // decide if the score is the highest score for that session

    if (scoreNum > highScore) {
      
      // update scoreboard to display the current session high score
      highScoreboard.innerText = highScore;

      
    }
  });
};


