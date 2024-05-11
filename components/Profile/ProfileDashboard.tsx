"use client";
// components/ProfileDashboard.tsx

import React, { useState, useEffect } from "react";
import { Card, Progress, Button, Tooltip, message } from "antd";
import { CopyOutlined, GlobalOutlined } from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GiWantedReward } from "react-icons/gi";
import LeaderboardSection from "./LeaderboardCard";
import ReferralHistory from "./ReferralHistory";

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
      setUser((prev) => ({ ...prev, exp: prev.exp + prev.referrals/2 }));
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
      <Card
        title="Referral Code"
        className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
      >
        <div className="flex items-center justify-between">
          <span className="text-lg">{"6HE8T5W"}</span>
          <Tooltip title="Copy Referral Code">
            <Button
              type="primary"
              shape="circle"
              icon={<CopyOutlined />}
              onClick={handleCopyReferralCode}
            />
          </Tooltip>
        </div>
        <div className="flex flex-col lg:flex-row ` items-center justify-between mt-4">
          <span className="text-lg">Share Referral Code</span>
          <div className="flex gap-2">
            <Button type="primary">Facebook</Button>
            <Button type="primary">Twitter</Button>
            <Button type="primary">LinkedIn</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <Card
          title="Global Rank"
          className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
        >
          <div className="flex items-center justify-between">
            <span className="text-xl">
              #{user.rank}/<span className="text-sm text-gray-600">240</span>
            </span>
            <GlobalOutlined style={{ fontSize: "24px", color: "#722ed1" }} />
          </div>
        </Card>
        <Card
          title="Tokens"
          className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg">{user.tokens}</span>
            <GiWantedReward style={{ fontSize: "24px", color: "#722ed1" }} />
          </div>
        </Card>
        <Card
          title="Referrals"
          className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
        >
          <div className="flex items-center justify-between">
            <span className="text-lg">{user.referrals}</span>
            <GiWantedReward style={{ fontSize: "24px", color: "#722ed1" }} />
          </div>
        </Card>
      </div>
      <Card
        title="Experience"
        className="bg-white rounded-lg shadow-md animate-fade-out"
      >
        <div className="flex items-center justify-between">
          <span className="text-lg">Experience Points</span>
          <span className="text-lg text-gray-600">{user.exp}</span>
        </div>
        <Progress
          percent={(user.exp / 10000) * 100} // Assuming 10,000 exp is the maximum
          showInfo={false}
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
        />
      </Card>
      <Card
        title="Experience Growth Chart"
        className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="exp"
              stroke="#722ed1"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <Card
        title="Referral Code"
        className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
      >
        <div className="flex items-center justify-between">
          <span className="text-lg">{"6HE8T5W"}</span>
          <Tooltip title="Copy Referral Code">
            <Button
              type="primary"
              shape="circle"
              icon={<CopyOutlined />}
              onClick={handleCopyReferralCode}
            />
          </Tooltip>
        </div>
      </Card>
      <Card
        title="Referral History"
        className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
      >
        {/* Render referral history here */}
        <ReferralHistory />
      </Card>
      <Card
        title="Leaderboard"
        className="bg-white rounded-lg shadow-md mt-4 animate-fade-out"
      >
        {/* Render leaderboard here */}
        <LeaderboardSection
          leaderboardData={[
            { key: "1", username: "John Doe", rank: 1, experience: 10000 },
            { key: "2", username: "Jane Doe", rank: 2, experience: 9000 },
            { key: "3", username: "Alice", rank: 3, experience: 8000 },
          ]}
          userRank={user.rank}
        />
      </Card>
    </div>
  );
};

export default ProfileDashboard;
