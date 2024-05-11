"use client";
import { useState } from "react";
import PortfolioChart from "./PortfolioChart";

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
        <div className="flex gap-2">
          <p className="rounded-md bg-gray-900 px-2 text-white">1D</p>
          <p className="rounded-md bg-gray-900 px-2 text-white">1M</p>
          <p className="rounded-md bg-gray-900 px-2 text-white">1Y</p>
        </div>
      </div>
      <PortfolioChart />
    </div>
  );
}
