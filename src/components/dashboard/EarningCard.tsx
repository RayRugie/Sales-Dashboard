"use client"
import { useEffect, useRef } from 'react';
import * as Chart from 'chart.js';

const earningsChartData = [
  { name: 'Jan', earnings: 4000 },
  { name: 'Feb', earnings: 6000 },
  { name: 'Mar', earnings: 8000 },
  { name: 'Apr', earnings: 6500 },
  { name: 'May', earnings: 9000 },
];

export default function EarningsChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart.Chart | null>(null);

  useEffect(() => {
    // Register Chart.js components
    if (Chart.CategoryScale) {
      Chart.Chart.register(
        Chart.CategoryScale,
        Chart.LinearScale,
        Chart.BarElement,
        Chart.Title,
        Chart.Tooltip,
        Chart.Legend
      );
    }

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      chartInstanceRef.current = new Chart.Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: earningsChartData.map(item => item.name),
          datasets: [{
            data: earningsChartData.map(item => item.earnings),
            backgroundColor: '#3b82f6',
            borderRadius: 2,
            barThickness: 6,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false
              }
            },
            y: {
              display: false,
              grid: {
                display: false
              },
              beginAtZero: true
            }
          },
          elements: {
            bar: {
              borderSkipped: false,
            }
          }
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-black rounded-lg p-3 md:p-4 w-full h-full min-h-[120px] md:min-h-[150px]">
      <div className="mb-3">
        <p className="text-gray-400 text-sm md:text-sm font-medium">Earning</p>
        <p className="text-white text-lg md:text-lg font-bold">$16.4k</p>
      </div>
      <div className="h-16 md:h-20 w-full">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}