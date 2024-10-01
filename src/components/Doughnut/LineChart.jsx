// LineChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

// Sample options for the chart
// Sample options for the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += `${context.parsed.y}`;
          }
          return label;
        },
      },
    },
  },
  animation: {
    tension: {
      duration: 2000,
      easing: "linear",
      from: 1,
      to: 0,
      loop: false,
    },
  },
};

const Utils = {
  numbers: ({ count, min, max }) =>
    Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    ),
  CHART_COLORS: {
    darkGreen: "#978FED ",
  },
  transparentize: (color, opacity) => {
    return color.replace(/(rgba\(\d+, \d+, \d+, )\d+(\))/, `$1${opacity}$2`);
  },
};

const LineChart = ({ width = 300, height = 250 }) => {
  const data = {
    labels: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC",],
    datasets: [
      {
        label: "Exchange rate",
        data: [0, 3, 2, 4, 6, 2, 4, 4, 5, 4, 4, 5],
        borderColor: Utils.CHART_COLORS.darkGreen,
        backgroundColor: Utils.transparentize(
          Utils.CHART_COLORS.darkGreen,0.5
        ),
        pointStyle: "rectRounded",
        pointRadius: 1,
        pointHoverRadius: 5,
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
