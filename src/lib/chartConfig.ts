export const salesChartData = {
  labels: ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00", "02:00", "04:00"],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "#6366f1",
      borderRadius: 4,
      data: [30, 20, 40, 32, 25, 50, 38, 33, 20, 35, 29, 24],
    },
    {
      label: "Returns",
      backgroundColor: "#22d3ee",
      borderRadius: 4,
      data: [25, 15, 30, 20, 18, 30, 20, 15, 12, 25, 20, 18],
    },
  ],
};

export const earningsChartData = {
  labels: ["W1", "W2", "W3", "W4"],
  datasets: [
    {
      label: "Earnings",
      data: [4, 6, 5, 8],
      backgroundColor: "#10b981",
    },
  ],
};

export const ordersChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Orders",
      data: [15, 18, 14, 20, 14, 21],
      borderColor: "#f59e0b",
      backgroundColor: "rgba(251, 191, 36, 0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

export const salesChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#1f2937',
      titleColor: '#fff',
      bodyColor: '#fff',
    },
  },
  scales: {
    x: { 
      grid: { display: false }, 
      ticks: { color: "#9ca3af", maxRotation: 0 },
      categoryPercentage: 0.7,
      barPercentage: 0.7,
    },
    y: { 
      grid: { display: false}, 
      ticks: { color: "#9ca3af" },
      beginAtZero: true,
    },
  },
  layout: {
    padding: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  },
};

export const earningsChartOptions = salesChartOptions;
export const ordersChartOptions = salesChartOptions;