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
      for (let i = 0; i < 100; i++) {
        labels.push(currentDate.toLocaleDateString());
        const fluctuation = Math.random()*10-5; 
        data.push(data.length > 0 ? data[data.length-1] + fluctuation : 5000); // Starting value 5000
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
              display: false,
            },
          },
        },
      });

      chartInstanceRef.current = chartInstance;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.resize();
      }
    });

    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }

    return () => {
      // Cleanup chart instance and resize observer on unmount
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full aspect-w-2 aspect-h-1">
      <canvas ref={chartContainerRef}></canvas>
    </div>
  );
};

export default PortfolioChart;
