'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartDataPoint {
  name?: string;
  [key: string]: number | string | undefined;
}

interface ChartDataset {
  label?: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
  tension?: number;
}

interface ChartProps {
  type?: 'line' | 'bar';
  data: ChartDataPoint[] | ChartData<'line' | 'bar'>;
  dataKey?: string;
  stroke?: string;
  options?: Partial<ChartOptions<'line' | 'bar'>>;
}

export default function Chart({
  type = 'line',
  data,
  dataKey,
  stroke = '#3b82f6',
  options: customOptions,
}: ChartProps) {
  let chartData: ChartData<'line' | 'bar'>;

  // Handle array data format
  if (Array.isArray(data)) {
    const labels = data.map((d) => (d.name as string) || '');
    const values = dataKey ? data.map((d) => Number(d[dataKey]) || 0) : [];

    const dataset: ChartDataset = {
      label: dataKey || 'Data',
      data: values,
      backgroundColor: stroke,
      borderColor: stroke,
      borderWidth: 2,
      fill: type === 'bar',
    };

    if (type === 'line') {
      dataset.tension = 0.4;
      dataset.fill = false;
    }

    chartData = {
      labels,
      datasets: [dataset],
    };
  } else {
    // Handle pre-formatted Chart.js data
    chartData = data as ChartData<'line' | 'bar'>;
  }

  const defaultOptions: ChartOptions<'line' | 'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#374151',
        borderWidth: 1,
        cornerRadius: 6,
        displayColors: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: type === 'line' ? 3 : 0,
        hoverRadius: type === 'line' ? 5 : 0,
      },
    },
  };

  // Deep merge custom options with defaults
  const finalOptions: ChartOptions<'line' | 'bar'> = {
    ...defaultOptions,
    ...customOptions,
    plugins: {
      ...defaultOptions.plugins,
      ...customOptions?.plugins,
    },
    scales: {
      ...defaultOptions.scales,
      ...customOptions?.scales,
    },
  };

  return (
    <div className="w-full h-full">
      {type === 'line' ? (
        <Line 
          data={chartData as ChartData<'line'>} 
          options={finalOptions as ChartOptions<'line'>} 
        />
      ) : (
        <Bar 
          data={chartData as ChartData<'bar'>} 
          options={finalOptions as ChartOptions<'bar'>} 
        />
      )}
    </div>
  );
}