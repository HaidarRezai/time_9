function createSparkline(ctxId, dataPoints) {
  new Chart(document.getElementById(ctxId), {
    type: 'line',
    data: {
      labels: dataPoints.map((_, i) => i),
      datasets: [{
        data: dataPoints,
        borderColor: '#134B70',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    }
  });
}

// Example CPU usage data
createSparkline('cpuChart', [23, 20, 12, 32,32, 43, 1,23, 20, 12, 32,32, 43, 1]);
createSparkline('cpuChart2', [23, 20, 12, 32,32, 43, 1,23, 20, 12, 32,32, 43, 1]);
createSparkline('cpuChart3', [23, 20, 12, 32,32, 43, 1,23, 20, 12, 32,32, 43, 1]);
createSparkline('cpuChart4', [23, 20, 12, 32,32, 43, 1,23, 20, 12, 32,32, 43, 1]);


new Chart(document.getElementById('internetChart'), {
  type: 'doughnut',
  data: {
    labels: ['Used', 'Free'],
    datasets: [{
      data: [75, 90], // 10% used, 90% free
      backgroundColor: ['#134B70', '#e0e0e0'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  }
});

new Chart(document.getElementById('internetChart2'), {
  type: 'doughnut',
  data: {
    labels: ['Used', 'Free'],
    datasets: [{
      data: [0, 90], // 10% used, 90% free
      backgroundColor: ['#134B70', '#e0e0e0'],
      borderWidth: 0
    }]
  },
  options: {
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  }
});

function show(){
document.getElementById('popup').classList.add('show')
}
function closePopup(){
  document.getElementById('popup').classList.remove('show')
}