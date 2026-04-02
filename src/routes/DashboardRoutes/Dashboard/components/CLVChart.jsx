import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function CLVChart() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels: [
          "Basic (₹1–2L)",
          "Standard (₹2–5L)",
          "Premium (₹5–10L)",
          "Enterprise (₹10L+)",
        ],
        datasets: [
          {
            data: [25, 45, 20, 10],
            backgroundColor: [
              "#3b82f6", // blue
              "#10b981", // green
              "#f59e0b", // yellow
              "#ef4444", // red
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef} height="250"></canvas>;
}
