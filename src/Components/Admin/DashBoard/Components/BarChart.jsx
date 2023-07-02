import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export function BarChart({ months, earnings, profits }) {

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
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  const labels = months;
  const data = {
    labels,
    datasets: [
      {
        label: 'Monthly Earning',
        data: earnings,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Monthly Profit',
        data: profits,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  return <Bar options={options} data={data} />;
}
export default BarChart