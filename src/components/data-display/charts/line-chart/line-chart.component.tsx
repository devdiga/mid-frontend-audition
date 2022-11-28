import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

import { ChartContainer } from '../chart.styles';

export type LineChartDataset = {
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor: string;
};

interface LineChartProps {
  title: string;
  labels: string[];
  datasets: LineChartDataset[];
}

export const LineChart: React.FC<LineChartProps> = ({
  title,
  labels,
  datasets
}) => {
  ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
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
      <Line data={data} options={options} />
    </ChartContainer>
  );
};
