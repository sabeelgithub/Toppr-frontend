// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// function BarChart({saleReport}) {

//     let monthlySales = [];
//     let monthlyProfit = [];
//     let datedata = [];

   
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

//  const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' ,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['jan','feb'];
//  const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Monthly Earning',
//       data: [1,2],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Monthly Profit',
//       data: [1,2,3],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };


//   return <Bar options={options} data={data} />;
// }


// export default BarChart

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

export function BarChart({saleReport}) {
  let monthlySales = [];
  let monthlyProfit = [];
  let datedata = [];

  // for (let i = 0; i < saleReport.length; i++) {
  //     monthlySales.push(saleReport[i].totalPrice);
  //     monthlyProfit.push((saleReport[i].totalPrice * 10) / 100)
  //     datedata.push(saleReport[i]._id);
  // }
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

const labels = ['jan','feb'];
 const data = {
  labels,
  datasets: [
    {
      label:'Monthly Earning', 
      data: [10,20],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Monthly Profit',
      data: [10,30],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


  return <Bar options={options} data={data} />;
}
export default BarChart