import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export function App({saleReport}) {
  let labels = []
  let piedata = [];

    // for (let i = 0; i < saleReport.length; i++) {
    //   labels.push(saleReport[i]._id);
    //   piedata.push(saleReport[i].count)

    // }
 const data = {
  labels: ['kill','like'],
  datasets: [
    {
      label: 'No of rides',
      data: [1,2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


  return <Pie height="100px" data={data} />;
}

export default App