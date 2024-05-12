"use client";
import About from "@/components/Vault/About";
import BoostedChart from "@/components/Vault/Chart";
import {
  ArrowUpOutlined,
  CalculatorFilled,
  TransactionOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import Image from "next/image";

type Props = {
  params: {
    name: string;
  };
};

/* eslint-disable @next/next/no-img-element */
const Vault: React.FC<Props> = ({ params }) => {
  // get name from the props query

  const { name } = params;
  // convert name to uppercase and remove %20
  const _name = name.replaceAll("%20", " ");

  return (
    <div className="px-72 pb-10">
      <div className="flex items-center gap-4 mt-8">
        <img src="/eth.png" className="h-10 w-10" alt="logo" />
        <h1 className="text-4xl">{_name}</h1>
      </div>
      <div className="flex mt-5  items-center justify-between text-sm">
        <div className="flex gap-4 justify-center items-center">
          <div className="p-1 px-3 rounded-full bg-white flex justify-center items-center gap-2">
            <Image height={20} width={20} src="/image.png" alt="index logo" />
            <p className="text-gray-700">ETH</p>
          </div>
          <div className="p-1 px-3 rounded-full bg-white flex justify-center items-center gap-2">
            <Image height={20} width={20} src="/image.png" alt="index logo" />
            <p className="text-gray-700">Low risk</p>
          </div>
          <p className="text-gray-400 text-sm underline underline-offset-4 cursor-pointer hover:text-gray-300 transition-all">
            Index Update
          </p>
        </div>
        <div className="flex jc items-center gap-4">
          <Tooltip title="Coming soon">
            <div className="flex items-center bg-gray-400 hover:bg-gray-500 hover:scale-105 transition-all cursor-pointer h-fit text-black text-sm pr-1.5 p-1 pl-3 rounded-full">
              <p>Contracts </p>{" "}
              <p className="bg-white text-black p-1 px-2 ml-2 rounded-full rotate-45 hover:rotate-90 transition-all">
                <ArrowUpOutlined />
              </p>
            </div>
          </Tooltip>

          <Tooltip title="Coming soon">
            <div className="flex items-center bg-gray-400 hover:bg-gray-500 hover:scale-105 transition-all cursor-pointer h-fit text-black text-sm pr-1.5 p-1 pl-3 rounded-full">
              <p>Deposite </p>{" "}
              <p className="bg-white text-black p-1 px-2 ml-2 rounded-full transition-all">
                <TransactionOutlined />
              </p>
            </div>
          </Tooltip>
          <Tooltip title="Coming soon">
            <div className="flex items-center bg-gray-400 hover:bg-gray-500 hover:scale-105 transition-all cursor-pointer h-fit text-black text-sm pr-1.5 p-1 pl-3 rounded-full">
              <p>Stake </p>{" "}
              <p className="bg-white text-black p-1 px-2 ml-2 rounded-full transition-all">
                <WalletOutlined />
              </p>
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-white flex justify-between items-center mt-8">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-gray-600">My balance</p>
            <h1 className="text-2xl mt-1">$456.89</h1>
          </div>
          <div>
            <p className="text-sm text-gray-600 underline underline-offset-2">
              PNL
            </p>
            <h1 className="text-2xl mt-1 text-green-500">$97.08</h1>
          </div>
        </div>
        <div className="bg-gray-300 rounded-xl p-1 flex justify-center items-center gap-1">
          <p className="p-0.5 px-2 cursor-pointer bg-white rounded-full text-[12px]">
            $
          </p>
          <p className="p-1 cursor-pointer px-1 bg-white rounded-full text-[10px]">
            🌐
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div>
          <h1 className="text-lg">
            Calculate your potential performance with ZKLiquid Yield ETH
          </h1>
          <p className="text-[13px] text-gray-600">
            Enter deposit amount and investment period to calculate your
            expected yield
          </p>
        </div>

        <Tooltip title="Coming soon">
          <div className="p-1.5 px-4 rounded-full bg-[#cececea2] flex justify-center items-center gap-2">
            <CalculatorFilled />
            <p className="text-gray-700">Open Calculator</p>
          </div>
        </Tooltip>
      </div>

      <BoostedChart />
      <About />
    </div>
  );
};

export default Vault;
