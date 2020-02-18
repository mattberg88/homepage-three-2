import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const PieChart = ({ setSelected }) => {
  const diseaseArray = ['Cystic Fibrosis', 'Sickle Cell', 'Marfan Syndrome', 'Hemochromatosis', 'Alzheimers', 'Diabetes'];
  const diseaseInfoArray = [
    'An inherited life-threatening disorder that damages the lungs and digestive system.',
    'A group of disorders that cause red blood cells to become misshapen and break down.',
    'An inherited disorder that affects connective tissue.',
    'An inherited disorder that causes an iron overload.',
    'A progressive disease that destroys memory and other important mental functions.',
    'A group of diseases that result in too much sugar in the blood.',
  ];

  const elementClick = (e) => {
    if (!e[0]) return null;
    const indexNumber = e[0]._index;
    return setSelected(`${diseaseArray[indexNumber]}: ${diseaseInfoArray[indexNumber]}`);
  };

  return (
    <Doughnut
      width={90}
      height={130}
      onElementsClick={elementClick}
      data={{
        labels: diseaseArray,
        datasets: [{
          data: [12, 20, 4, 7, 16, 40],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)', 'rgb(255, 159, 64)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'],
        }],
      }}
      options={{
        legend: {
          align: 'start',
          display: true,
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Potential Genetic Diseases',
          fontSize: 14,
        },
      }}
    />
  );
};

export default PieChart;
