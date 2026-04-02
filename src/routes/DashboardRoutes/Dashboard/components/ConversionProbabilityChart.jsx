import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ConversionProbabilityChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: ["0–20%", "21–40%", "41–60%", "61–80%", "81–100%"],
        datasets: [
          {
            label: "Number of Leads",
            data: [5, 12, 28, 45, 23],
            backgroundColor: [
              "#ef4444", // Red (Low)
              "#f59e0b", // Orange
              "#eab308", // Yellow
              "#84cc16", // Lime
              "#10b981", // Green (High)
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Lead Distribution by Conversion Probability",
            font: { size: 14 },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 10 },
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef} height="260"></canvas>;
}
