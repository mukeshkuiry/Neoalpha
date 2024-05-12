"use client";
import React, { useState, useEffect, useRef } from "react";
import { Segmented, Switch } from "antd";
import Chart from "chart.js/auto";

const BoostedChart: React.FC = () => {
  const [aiEnabled, setAiEnabled] = useState<boolean>(false);
  const [data, setData] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>();

  useEffect(() => {
    // Function to generate random data and labels
    const generateRandomData = () => {
      const randomData: number[] = [];
      const randomLabels: string[] = [];
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 29); // Start 30 days ago

      for (let i = 0; i < 30; i++) {
        randomLabels.push(currentDate.toLocaleDateString());
        const fluctuation = Math.random() * 100 - 70; // Random fluctuation between -70 and 30
        const x = i; // Center the curve around x = 15 (approximately half of 30)
        const y = Math.pow(x, 2) + fluctuation; // Calculate y value based on x^2 curve with fluctuations
        randomData.push(y);
        currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
      }

      setData(randomData);
      setLabels(randomLabels);
    };

    generateRandomData(); // Generate random data on component mount

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Cleanup chart instance on unmount
      }
    };
  }, []);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (ctx) {
      const gradientStroke = ctx.createLinearGradient(0, 0, 0, 400);
      gradientStroke.addColorStop(0, "#1890ff");
      gradientStroke.addColorStop(1, "#36cfc9");

      const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFill.addColorStop(0, "rgba(24, 144, 255, 0.1)");
      gradientFill.addColorStop(1, "rgba(54, 207, 201, 0.1)");

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
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy(); // Cleanup chart instance on unmount
      }
    };
  }, [data, labels, aiEnabled]);

  // Toggle AI function
  const toggleAi = (checked: boolean) => {
    setAiEnabled(checked);
  };

  return (
    <div className="p-6 rounded-2xl bg-white mt-8">
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-2">Expected APY</h1>
        <p className="text-3xl mt-1">{aiEnabled ? "27" : "12"}%</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <label htmlFor="aiToggle">Enable AI </label>
          <Switch id="aiToggle" checked={aiEnabled} onChange={toggleAi} />
        </div>
        <div className="flex gap-2">
          <Segmented
            size="small"
            options={[
              { label: "1D", value: "1D" },
              { label: "1W", value: "1W" },
              { label: "1M", value: "1M" },
              { label: "1Y", value: "1Y" },
            ]}
            value="1M"
            onChange={() => {}}
          />
          <Segmented
            size="small"
            options={[
              { label: "APY", value: "APY" },
              { label: "TVL", value: "TVL" },
              { label: "Price", value: "Price" },
            ]}
            value="APY"
            onChange={() => {}}
          />
        </div>
      </div>
      <div className="relative">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default BoostedChart;
