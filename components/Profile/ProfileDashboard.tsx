"use client";
// components/ProfileDashboard.tsx

import React, { useState, useEffect } from "react";
import { Card, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import {
  LineChart,
  Line,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import ReferralHistory from "./ReferralHistory";
import Loadbar from "./Loadbar";

const ProfileDashboard: React.FC = () => {
  // Sample user data, replace with actual data from your backend
  const [user, setUser] = useState({
    name: "John Doe",
    walletAddress: "0x4F9c3c9...8e86d7",
    referrals: 10,
    tokens: 100,
    exp: 5600,
    rank: 120,
  });

  // Simulated increase in experience every se
  useEffect(() => {
    const interval = setInterval(() => {
      setUser((prev) => ({ ...prev, exp: prev.exp + prev.referrals / 2 }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getExperiencePoints = (day: number) => {
    return 5 * Math.pow(day, 2); // Quadratic function (adjust coefficient as needed)
  };

  // Data for the experience growth chart
  const data = Array.from({ length: 50 }, (_, index) => ({
    name: `Day ${index + 1}`,
    exp: getExperiencePoints(index + 1), // Get experience points for each day
  }));

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText("6HE8T5W");
    message.success("Referral code copied to clipboard");
  };

  return (
    <div className="p-4 lg:px-60">
      <h1 className="text-2xl font-bold mb-4">Referral Dashboard</h1>
      {/* Referrl code card with click to copy, share buttons */}
      <div className="bg-gray-800 p-2 md:p-6 rounded-lg shadow-md text-white">
        <h2 className="text-2xl font-bold mb-4">Your Referral Code</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-semibold text-purple-500">
              R4K86ER
            </div>
            <button
              onClick={handleCopyReferralCode}
              className="flex items-center justify-center bg-purple-500 text-white rounded-xl p-2 hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
            >
              <CopyOutlined />
              <span className="ml-2">Copy</span>
            </button>
          </div>
          <div className="text-lg font-semibold text-yellow-400">Level 3</div>
        </div>
        <div className="relative w-full bg-gray-600 h-5 rounded-full">
          <div
            className="absolute top-0 left-0 bg-yellow-400 h-full rounded-full"
            style={{ width: "60%" }} // Assuming 60% progress
          ></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-6 gap-6">
        <div className="bg-white p-6 rounded-xl flex flex-wrap justify-center items-center gap-4 w-fit">
          <div className="bg-yellow-200 p-4 md:p-6 rounded-xl">
            <p className="text-xl text-gray-600">Tokens</p>
            <p className="font-bold text-6xl mt-2">100</p>
          </div>
          <div className="bg-purple-200 p-4 md:p-6 rounded-xl">
            <p className="text-xl text-gray-600">Referrals</p>
            <p className="font-bold text-6xl mt-2">10</p>
          </div>
          <div className="bg-gray-200 p-4 md:p-6 rounded-xl">
            <p className="text-xl text-gray-600">Global Rank</p>
            <p className="font-bold text-6xl mt-2"> #{user.rank}</p>
          </div>
        </div>
        <div className="w-full gradient-bg rounded-xl p-6">
          <h1 className="text-white font-bold font-2xl">Points</h1>
          <p className="text-6xl font-bold text-yellow-400 mt-2">
            {(user.exp + 4.73) * 3}
          </p>
          <Loadbar />
        </div>
      </div>
      <Card title="LQAI Token" className="mt-8">
        <ul className="list">
          <li className="list-item level-1">
            <h2>Level 1 (1-5 Referrals)</h2>
            <p>Base amount of LQAI (1x multiplier, no yield share)</p>
          </li>
          <li className="list-item level-2">
            <h2>Level 2 (6-10 Referrals)</h2>
            <p>Increased base amount + 1.2x multiplier, 1% yield share</p>
          </li>
          <li className="list-item level-3">
            <h2>Level 3 (11-20 Referrals)</h2>
            <p>
              Further increased base amount + 1.5x multiplier, 2% yield share
            </p>
          </li>
          <li className="list-item level-4">
            <h2>Level 4 (21+ Referrals)</h2>
            <p>Highest base amount + 2x multiplier, 3% yield share</p>
          </li>
        </ul>
      </Card>

      <Card
        title="Experience Growth Chart"
        className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <RechartsTooltip />
            <Line
              type="monotone"
              dataKey="exp"
              stroke="#722ed1"
              activeDot={{ r: 8 }}
              fill="#32d2d2"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <Card
        title="Referral History"
        className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
      >
        {/* Render referral history here */}
        <ReferralHistory />
      </Card>
    </div>
  );
};

export default ProfileDashboard;
