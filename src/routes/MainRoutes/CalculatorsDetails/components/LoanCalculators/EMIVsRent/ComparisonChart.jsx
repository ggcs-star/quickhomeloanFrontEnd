// components/ComparisonChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonChart = ({ results }) => {
  if (!results) return null;

  const { totalEMI, totalRent, pvEMI, pvRent } = results;

  const data = {
    labels: ['EMI', 'Rent'],
    datasets: [
      {
        label: 'Total Amount Paid (₹)',
        data: [totalEMI, totalRent],
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
      {
        label: 'Present Value (₹)',
        data: [pvEMI, pvRent],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            if (value >= 10000000) {
              return '₹' + (value / 10000000).toFixed(1) + 'Cr';
            } else if (value >= 100000) {
              return '₹' + (value / 100000).toFixed(1) + 'L';
            } else if (value >= 1000) {
              return '₹' + (value / 1000).toFixed(0) + 'K';
            }
            return '₹' + value;
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += '₹' + context.parsed.y.toLocaleString('en-IN');
            return label;
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ComparisonChart;