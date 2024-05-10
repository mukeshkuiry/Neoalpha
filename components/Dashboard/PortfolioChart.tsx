"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PortfolioChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>();
  const labels: string[] = ["1/1/2024", "23/8/2024"];

  useEffect(() => {
    const ctx = chartContainerRef.current?.getContext("2d");

    if (ctx) {
      const labels: string[] = [];
      const data: number[] = [];
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 29); // Start 30 days ago

      // Generate data for 30 days
      for (let i = 0; i < 30; i++) {
        labels.push(currentDate.toLocaleDateString());
        const fluctuation = Math.random() * 1000 - 500; // Random fluctuation between -500 and 500
        data.push(5000 + fluctuation); // Starting value 5000
        currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
      }

      // Create the chart instance
      const chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "",
              data: data,
              borderColor: "#00FF00", // Green color
              backgroundColor: "rgba(0, 255, 0, 0.1)", // Green color with opacity
              tension: 0.6, // Adjust the tension here
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
              grid: {
                display: true,
              },
              ticks: {
                display: false,
              },
            },
            y: {
              grid: {
                display: true,
              },
              ticks: {
                display: false,
              },
            },
          },
          hover: {
            mode: "index",
            intersect: false,
          },
          plugins: {
            legend: {
              display: false, // Hide legend
            },
          },
        },
      });

      chartInstanceRef.current = chartInstance;
    }

    return () => {
      // Cleanup chart instance on unmount
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-56">
      <canvas ref={chartContainerRef}></canvas>
    </div>
  );
};

export default PortfolioChart;
