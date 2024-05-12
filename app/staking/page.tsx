import RewardsSteps from "@/components/Steps";
import { ArrowUpOutlined, DollarCircleFilled } from "@ant-design/icons";
import { Segmented, Tooltip } from "antd";
import { FaNetworkWired } from "react-icons/fa";

export default function Page() {
  return (
    <div className="px-60 text-center">
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <h1 className="text-4xl">Earn <span className="bg-gray-800 text-white px-2 rounded-xl">rewards</span> with ZKLiquid</h1>
        <p className="text-gray-400 text-sm">
          Stake ZKLiquid tokens and earn rewards
        </p>
      </div>
      <RewardsSteps />
      <div className="p-6 rounded-2xl bg-white flex justify-between items-center mt-8 text-start">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-gray-600">TVL</p>
            <h1 className="text-2xl mt-1">$4396.89</h1>
          </div>
          <div>
            <p className="text-sm text-gray-600 underline underline-offset-2">
              Total ARR
            </p>
            <h1 className="text-2xl mt-1">$979.08</h1>
          </div>
        </div>
        <Tooltip title="Coming soon">
            <div className="flex items-center bg-gray-400 hover:bg-gray-500 hover:scale-105 transition-all cursor-pointer h-fit text-black text-sm pr-1.5 p-1 pl-3 rounded-full">
              <p>Provide Liquidity </p>{" "}
              <p className="bg-white text-black p-1 px-2 ml-2 rounded-full rotate-45 hover:rotate-90 transition-all">
                <ArrowUpOutlined />
              </p>
            </div>
          </Tooltip>
      </div>
      <div className="p-6 rounded-2xl bg-white flex justify-between items-center mt-8 text-start">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-gray-600">Total stake ZKLiquid</p>
            <h1 className="text-2xl mt-1">$1.2M</h1>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              ZKLiquid staking APY
            </p>
            <h1 className="text-2xl mt-1">19.5%</h1>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              ZKLiquid price
            </p>
            <h1 className="text-2xl mt-1">$0.87</h1>
          </div>
        </div>
        </div>
    </div>
  );
}
