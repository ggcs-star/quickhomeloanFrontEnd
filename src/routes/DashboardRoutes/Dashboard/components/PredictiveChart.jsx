import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function PredictiveChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Next Week", "Week 6"],
        datasets: [
          {
            label: "Actual Conversions",
            data: [12, 18, 15, 22, null, null],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            fill: true,
            borderWidth: 2,
            tension: 0.4,
          },
          {
            label: "AI Prediction",
            data: [null, null, null, 22, 26, 28],
            borderColor: "#10b981",
            borderDash: [5, 5],
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Conversions" },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef} height="250"></canvas>;
}
