import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChartContainer } from '../chart.styles';

interface PieChartProps {
  labels: string[];
  data: number[];
  title: string;
}
export const PieChart: React.FC<PieChartProps> = ({ labels, data, title }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const formattedData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: [
          'rgba(9, 73, 218, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(153, 102, 255, 0.8)'
        ],
        borderColor: [
          'rgba(9, 73, 218, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 20,
          boxHeight: 20
        }
      },
      title: {
        text: title,
        display: true
      }
    }
  };

  return (
    <PieChartContainer>
      <Pie data={formattedData} options={options} />
    </PieChartContainer>
  );
};
