"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PortfolioChart: React.FC = () => {
  const chartContainerRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>();

  useEffect(() => {
    const ctx = chartContainerRef.current?.getContext("2d");

    if (ctx) {
      const gradientStroke = ctx.createLinearGradient(0, 0, 0, 400);
      gradientStroke.addColorStop(0, "#00ff80"); // Start shade (lighter green)
      gradientStroke.addColorStop(1, "#00cc66"); // End shade (darker green)

      const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFill.addColorStop(0, "rgba(0, 255, 128, 0.1)"); // Start shade with opacity (lighter green)
      gradientFill.addColorStop(1, "rgba(0, 204, 102, 0)"); // End shade with opacity (darker green)

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
              borderColor: gradientStroke,
              backgroundColor: gradientFill, // Apply gradient fill color
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
              display: false, // Hide x axis
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
              display: false,
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
