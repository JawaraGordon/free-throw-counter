// create a func to handle high scores

const createHighScore = () => {
  // create a state management system for high scores
  const highScoreArr = [];
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
    return Math.max(...scores);
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

//   // fetch and display score from user input
//   const scoreNum = document.getElementById('made').value;

//   // score must persist during game sessions
//   highScoreArr.push(scoreNum);

//   console.log(highScoreArr);

//   // scores can be stored for the duration of an individual session
//   highScoreArr.forEach((highScore) => {
//     const highScoreboard = document.getElementById('high-score');
//     console.log(highScore);

//     // decide if the score is the highest score for that session

//     if (scoreNum > highScore) {

//       // update scoreboard to display the current session high score
//       highScoreboard.innerText = highScore;

//     }
//   });
// };

//  // new high score handler
//  const highScoreManager = createHighScoreManager();
//  // func to handle high scores
//  const highScoreHandler = () => {
//    // fetch and display score from user input
//    const scoreNum = document.getElementById('made').value;

//    // add score to the handler
//    highScoreManager.addScore(scoreNum);

//    console.log(highScoreManager.scores);

//    // update the scoreboard to display the current session high score
//    const highScoreboard = document.getElementById('high-score');
//    highScoreboard.innerText = highScoreManager.getCurrentSessionHighScore();
//  };
