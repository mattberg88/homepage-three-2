import React from 'react'
import { Doughnut } from 'react-chartjs-2';

export default function PieChart() {
  return (
    <Doughnut
      width={90}
      height={150}
      data={{
        labels: ['cystic fibrosis', 'sickle cell', 'hemochromatosis', 'alzheimers', 'diabetes'],
        datasets: [{
          data: [12, 20, 4, 16, 40],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 159, 64)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)']
        }]
      }}
      options={{
        legend: {
          align: 'start',
          display: true,
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Potential Genetic Diseases',
          fontSize: 14
        }
      }}
    />
  )
}