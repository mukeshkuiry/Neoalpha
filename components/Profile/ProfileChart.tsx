"use client";
// GrowthChart.tsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GrowthChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"line"> | null>(null);

  let dataForPoints: number[] = [];
  let dataForTokens: number[] = [];
  let dataForAPY: number[] = [];

  for (let i = 0; i < 100; i++) {
    // x^2 curve data with some fluctuations
    for (let i = 0; i < 30; i++) {
      const fluctuation = Math.random() * 100 - 70; // Random fluctuation between -70 and 30
      const x = i; // Center the curve around x = 15 (approximately half of 30)
      const y = Math.pow(x, 2) + fluctuation; // Calculate y value based on x^2 curve with fluctuations
      dataForPoints.push(y);
      dataForTokens.push(y*2 + Math.random() * 20 - 10); // Tokens are 20 points above points
      dataForAPY.push(y*3 + Math.random() * 10 - 10); // APY is 3 times the points
    }
  }

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: Array.from({ length: 30 }, (_, i) => i + 1),
            datasets: [
              {
                label: "Points",
                data: dataForPoints,
                borderColor: "rgb(255, 99, 132)",
                tension: 0.1,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                fill: true,
                borderWidth: 1,
                pointRadius: 0, // Hide points
              },
              {
                label: "Tokens",
                data: dataForTokens,
                borderColor: "rgb(54, 162, 235)",
                tension: 0.1,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                fill: true,
                borderWidth: 1,
                pointRadius: 0, // Hide points
              },
              {
                label: "APY",
                data: dataForAPY,
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
                ticks: {
                  display: false,
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
