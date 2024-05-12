"use client";
// GrowthChart.tsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GrowthChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"line"> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: Array.from({ length: 40 }, (_, i) => i + 1),
            datasets: [
              {
                label: "Points",
                data: Array.from({ length: 40 }, () =>
                  Math.floor(Math.random() * 100)
                ),
                borderColor: "rgb(255, 99, 132)",
                tension: 0.1,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                fill: true,
                borderWidth: 1,
                pointRadius: 0, // Hide points
              },
              {
                label: "Tokens",
                data: Array.from({ length: 40 }, () =>
                  Math.floor(Math.random() * 100)
                ),
                borderColor: "rgb(54, 162, 235)",
                tension: 0.1,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                fill: true,
                borderWidth: 1,
                pointRadius: 0, // Hide points
              },
              {
                label: "AQI",
                data: Array.from({ length: 40 }, () =>
                  Math.floor(Math.random() * 300)
                ),
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.6,
                fill: true,
                borderWidth: 1,
                pointRadius: 0, // Hide points
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                display: true, // Hide x axis
                ticks:{
                  display: false
                },
                grid: {
                  display: false,
                },
              },
              y: {
                display: false, // Hide y axis
              },
            },
            hover: {
              mode: "index",
              intersect: false,
            },
            plugins: {
              legend: {
                display: true,
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas className="w-full" ref={chartRef} />;
};

export default GrowthChart;
