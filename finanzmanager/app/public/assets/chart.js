const ctx = document.getElementById('financeChart').getContext('2d');

const financeChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Januar', 'Februar', 'März', 'April', 'Mai'],
    datasets: [
      {
        label: 'Einnahmen (€)',
        data: [1200, 1500, 1000, 1800, 1600],
        backgroundColor: 'rgba(25, 135, 84, 0.7)',
        borderColor: 'rgba(25, 135, 84, 1)',
        borderWidth: 1
      },
      {
        label: 'Ausgaben (€)',
        data: [800, 1000, 950, 1200, 1100],
        backgroundColor: 'rgba(220, 53, 69, 0.7)',
        borderColor: 'rgba(220, 53, 69, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function updateChartColors(isDark) {
  financeChart.options.plugins.legend.labels.color = isDark ? '#f8f9fa' : '#212529';
  financeChart.options.scales.x.ticks.color = isDark ? '#f8f9fa' : '#212529';
  financeChart.options.scales.y.ticks.color = isDark ? '#f8f9fa' : '#212529';
  financeChart.update();
}

darkModeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  updateChartColors(isDark);
});

// Direkt nach dem Laden prüfen:
updateChartColors(document.body.classList.contains('dark-mode'));
