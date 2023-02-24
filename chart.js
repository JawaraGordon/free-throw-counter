const makeChart = (goal, made, missed) => {
  const scoreChart = document.getElementById('score-chart');
  const scoreChartContainer = document.querySelector('.chart-container');
  const newScoreCanvas = document.createElement('canvas');
  newScoreCanvas.setAttribute('id', 'score-chart');

  // destroy and remove chart if already existing
  if (scoreChart) {
    console.log('destroy');
    destroyChart();
  }

  scoreChartContainer.append(newScoreCanvas);

  const data = [{ goal: goal }, { made: made }, { missed: missed }];

  const scoreChartClassObj = new Chart(scoreChart, {
    type: 'bar',
    options: {
      animation: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
    },
    data: {
      labels: ['Goal', 'Made', 'Missed'],
      datasets: [
        {
          label: '',
          data: [data[0].goal, data[1].made, data[2].missed],
          borderWidth: 2,
        },
      ],
    },
  });

  return scoreChartClassObj;
};

const destroyChart = () => {
  const scoreChart = document.getElementById('score-chart');
  const scoreChartContainer = document.querySelector('.chart-container');
  const newScoreCanvas = document.createElement('canvas');
  newScoreCanvas.setAttribute('id', 'score-chart');
  scoreChart.remove();
  scoreChartContainer.append(newScoreCanvas);
};
