  // Sparkline helper
    function createSparkline(ctxId, dataPoints) {
      const ctx = document.getElementById(ctxId);
      if (!ctx) return; // Safety
      new Chart(ctx, {
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
          maintainAspectRatio: false, // use parent height
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: { x: { display: false }, y: { display: false } }
        }
      });
    }

    // Create the charts that actually exist
    createSparkline('cpuChart', [4, 0, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1]);
    createSparkline('cpuChart2', [4, 0, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1]);
    createSparkline('cpuChart3', [4, 0, 1, 2, 0, 9, 1, 1, 0, 1, 1, 1, 1, 1]);
    createSparkline('cpuChart4', [0, 0, 1, 0, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1]);

    // Doughnut
    (function(){
      const el = document.getElementById('internetChart');
      if (!el) return;
      new Chart(el, {
        type: 'doughnut',
        data: {
          labels: ['Used', 'Free'],
          datasets: [{
            data: [10, 90], // 10% used, 90% free
            backgroundColor: ['#134B70', '#e0e0e0'],
            borderWidth: 0
          }]
        },
        options: {
          cutout: '70%',
          plugins: { legend: { display: false }, tooltip: { enabled: false } }
        }
      });
    })();

var xValues = ["Oct", "2017", "Apr", "Jul", "Oct","2018","Apr","Jul"];
var yValues = [55, 49, 44, 24, 15,55, 49, 44, 24, 15];
var barColors = ["#134B70", "#134B70","#134B70","#134B70","#134B70"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart(document.getElementById('myChart1'), {
  type: 'doughnut',
  data: {
    labels: ["Canceled", "Processing", "Invoiced", "Shipped", "Transit"],
    datasets: [{
      data: [55, 49, 44, 24, 15],
      backgroundColor: ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

function show() {
  document.getElementById('popup').classList.add('show');
}
function closePopup() {
  document.getElementById('popup').classList.remove('show');
}
