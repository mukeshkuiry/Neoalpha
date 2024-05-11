"use client";
import { useState } from "react";
import PortfolioChart from "./PortfolioChart";
import { Segmented } from "antd";

export default function Portfolio() {
  const [balance, setBalance] = useState<number>(2450.56);
  return (
    <div className="rounded-xl bg-white shadow-lg p-8 lg:w-4/5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>My indexes balance</p>
          <h1 className="text-4xl font-semibold">${balance}</h1>
          <p className="text-green-400 font-semibold">+2.3% +$52.81</p>
        </div>
        <Segmented
          options={[
            {
              value: "1D",
              label: "1D",
            },
            {
              value: "1M",
              label: "1M",
            },
            {
              value: "1Y",
              label: "1Y",
            },
          ]}
        />
      </div>
      <PortfolioChart />
    </div>
  );
}
