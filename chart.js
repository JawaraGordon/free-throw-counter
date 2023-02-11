const chart = document.getElementById('score-chart');

new Chart(chart, {
  type: 'bar',
  data: {
    labels: ['Goal', 'Made', 'Missed'],
    datasets: [
      {
        label: 'Shot Chart',
        data: [12, 19, 3],
        borderWidth: 5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
