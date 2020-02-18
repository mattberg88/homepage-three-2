import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart({ setSelected }) {
  const elementClick = () => {
    setSelected(
      'Systolic blood pressure measures the force of blood against your artery walls while your ventricles squeeze, while Diastolic blood pressure measures the pressure when your heart relaxes.',
    );
  };
  return (
    <Line
      height={120}
      width={100}
      onElementsClick={elementClick}
      data={{
        labels: ['may-19', 'june-19', 'july-19', 'aug-19', 'sept-19', 'oct-19', 'nov-19', 'dec-19', 'jan-20', 'feb-20'],
        datasets: [
          {
            label: 'Systolic',
            borderColor: 'rgba(23, 86, 110, 1)',
            backgroundColor: 'rgba(23, 86, 110, 1)',
            data: [120, 123, 127, 125, 128, 130, 128, 129, 125, 126],
            fill: false,
          },
          {
            label: 'Diastolic',
            borderColor: 'rgba(49, 172, 219, 1)',
            backgroundColor: 'rgba(49, 172, 219, 1)',
            data: [77, 81, 80, 82, 79, 79, 77, 81, 80, 75],
            fill: false,
          },
        ],
      }}
      options={{
        maintainAspectRatio: true,
        title: {
          display: true,
          text: 'Average BP',
          fontSize: 14,
        },
        hover: {
          mode: 'index',
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 40, // min
                suggestedMax: 160, // max
              },
            },
          ],
        },
      }}
    />
  );
}
