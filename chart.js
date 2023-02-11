const makeChart = async (goal, made, missed) => {
  const data = [{ goal: goal }, { made: made }, { missed: missed }];

  new Chart(document.getElementById('score-chart'), {
    type: 'bar',
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
};
