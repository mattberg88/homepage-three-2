import React from 'react'
import { Line } from 'react-chartjs-2';

export default function LineChart() {
  return (
    <Line
      height={300}
      data={{
        labels: ["may-11", "june-11", "july-11", "aug-11", "sept-11", "oct-11", "dec-11", "jan-12", "feb-12", "march-12", "apr-12", "may-12", "june-12", "july-12", "aug-12", "sept-12", "oct-12", "dec-12", "jan-13", "feb-13", "march-13", "apr-13", "may-13", "june-13", "july-13", "aug-13", "sept-13", "oct-13", "nov-13", "dec-13", "jan-14", "feb-14"],
        datasets: [{
          label: "Visits 1",
          borderColor: 'rgba(23, 86, 110, 1)',
          backgroundColor: 'rgba(23, 86, 110, 1)',
          data: [1110, 1217, 928, 1248, 2738, 1759, 1890, 1527, 3128, 2345, 2018, 1847, 1969, 1945, 1776, 2230, 3699, 2815, 2718, 2012, 3011, 2472, 2382, 2382, 1868, 1750, 1507, 2002, 3235, 2256, 1738, 1433, 2212, 2074, 1928, 1694, 1840, 1741, 1909],
          fill: false,
        }, {
          label: "Visits 2",
          borderColor: 'rgba(49, 172, 219, 1)',
          backgroundColor: 'rgba(49, 172, 219, 1)',
          data: [966, 1078, 781, 996, 1772, 1300, 1490, 1097, 2463, 1715, 1526, 1407, 1511, 1488, 1331, 1724, 2816, 2269, 2174, 1578, 2297, 1964, 1894, 1965, 1520, 1368, 1164, 1590, 2481, 1843, 1436, 1226, 1852, 1681, 1485, 1348, 1450, 1364, 1433],
          fill: false,
        }]
      }}
      options={{

        maintainAspectRatio: true,
        title: {
          display: true,
          text:"Allele Count",
          fontSize: 14
        },
        hover: {
          mode: 'index'
        }
      }}
    />
  )
}