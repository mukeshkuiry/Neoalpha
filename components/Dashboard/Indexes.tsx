"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";
import { FiUsers } from "react-icons/fi";

interface Index {
  type: string;
  name: string;
  moto: string;
  tags: string[];
  weeklyApi: string;
  valueTvl: string;
  logo: string;
}

const IndexCard: React.FC<{ index: Index }> = ({ index }) => {
  const router = useRouter();

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-8 m-2 hover:bg-green-400 cursor-pointer transition-all transform hover:scale-105"
      onClick={() => {
        router.push(`/vault/${index.name}`);
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <img src={index.logo} alt="Logo" className="w-8 h-8 mr-2" />

        <div className="flex items-center">
          <FiUsers className="mr-1" />
          <p className="text-gray-400">35</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm pt-3">{index.type}</p>
      <h1 className="font-bold text-xl">{index.name}</h1>
      <div className="bg-gray-200 text-sm rounded-full w-fit px-3 py-1 my-2 -ml-1">
        {index.moto}
      </div>
      <div className="flex gap-2">
        {index.tags.map((tag, tagKey) => (
          <span
            key={tagKey}
            className="rounded-full border border-gray-500 px-2 text-gray-700 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <span className="text-sm text-gray-400">Weekly APY</span> <br />
        <span className="font-semibold text-2xl"> {index.weeklyApi}</span>
      </div>
      <div className="mt-2 font-bold">
        {index.valueTvl} <br />
        <span className="text-[12px] text-gray-400">TVL</span>
      </div>
      <p className="mt-4 text-gray-400 underline underline-offset-4 cursor-pointer hover:text-gray-300 transition-all">
        Index Update
      </p>
    </div>
  );
};

const Indexes: React.FC = () => {
  const data: Index[] = [
    {
      type: "ETH notional",
      name: "ZKLiquid Yield ETH",
      moto: "Set and forget",
      tags: ["LSDfi", "Low risk"],
      weeklyApi: "7.11%",
      valueTvl: "$289.7k",
      logo: "/eth.png", // Placeholder image URL
    },
    {
      type: "Basket of tokens",
      name: "DeFi Core Index",
      moto: "Future of finance",
      tags: ["Yield Bearing", "Low risk"],
      weeklyApi: "25.63%",
      valueTvl: "$141.4k",
      logo: "/eth.png", // Placeholder image URL
    },
    {
      type: "Basket of tokens",
      name: "Arbitrum Yield Index",
      moto: "Innovations",
      tags: ["Yield Bearing", "Low risk"],
      weeklyApi: "34.41%",
      valueTvl: "$89.5k",
      logo: "/eth.png", // Placeholder image URL
    },
    {
      type: "USDC.e notional",
      name: "ZKLiquid Yield USD",
      moto: "Omnichain",
      tags: ["Market-neutral", "Low risk"],
      weeklyApi: "48.21%",
      valueTvl: "$252.3k",
      logo: "/eth.png", // Placeholder image URL
    },
    {
      type: "Mutual Index",
      name: "Coming Soon",
      moto: "Coming Soon",
      tags: ["Coming Soon"],
      weeklyApi: "Coming Soon",
      valueTvl: "Coming Soon",
      logo: "/eth.png", // Placeholder image URL
    },
    {
      type: "Pendal Index",
      name: "Coming Soon",
      moto: "Coming Soon",
      tags: ["Coming Soon"],
      weeklyApi: "Coming Soon",
      valueTvl: "Coming Soon",
      logo: "/eth.png", // Placeholder image URL
    },
  ];

  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center mb-8">All Indexes</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {data.map((index, indexKey) => (
          <IndexCard key={indexKey} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Indexes;
