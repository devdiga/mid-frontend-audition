import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartContainer } from '../chart.styles';

export type LineChartDataset = {
  label?: string;
  data: number[];
  borderColor?: string;
  backgroundColor: string;
};

interface BarChartProps {
  title: string;
  labels: string[];
  datasets: LineChartDataset[];
  hasLegend: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({
  title,
  labels,
  datasets,
  hasLegend
}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display: hasLegend
      },
      customCanvasBackgroundColor: {
        color: 'rgba(0,0,0,0.05)'
      },
      title: {
        display: true,
        text: title
      }
    }
  };

  const data = {
    labels,
    datasets
  };

  return (
    <ChartContainer>
      <Bar options={options} data={data} />
    </ChartContainer>
  );
};
