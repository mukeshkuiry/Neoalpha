import { ClockCircleFilled, DatabaseOutlined } from "@ant-design/icons";
import React from "react";
import { GiThumbUp, GiWantedReward } from "react-icons/gi";

const steps = [
  {
    title: "Earn rewards by staking ZKLiquid tokens",
    icon: <DatabaseOutlined />,
  },
  {
    title: "Earn revenue share from the protocol profits",
    icon: <GiWantedReward />,
  },
  {
    title: "Unstake tokens at any time",
    icon: <ClockCircleFilled />,
  },
  {
    title: "Participate in governance of ZKLiquid protocol",
    icon: <GiThumbUp />,
  },
];

const RewardsSteps: React.FC = () => {
  return (
      <div className="flex flex-col lg:flex-row gap-4  items-center justify-between text-sm mt-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="flex items-center justify-center p-3 text-2xl bg-purple-200 text-black rounded-full">
              {step.icon}
            </div>
            <p className="text-gray-600">{step.title}</p>
          </div>
        ))}
      </div>
  );
};

export default RewardsSteps;
