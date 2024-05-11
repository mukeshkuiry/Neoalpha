"use client";
import { VideoCameraOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mt-20">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Trustless Omnichain AI Agents
        </h1>
        <p className="my-5">
          NOYA&apos;s AI Agents direct omnichain liquidity trustlessly using
          ZKML.
          <br />
          These agents execute multiple intents like yield aggregation,
          borrowing optimization, liquidity provisioning, and collateral
          management.
        </p>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-sm lg:w-auto"
            onClick={() => router.push("/app")}
          >
            Go to dApp
          </button>
          <Button icon={<VideoCameraOutlined />} className="lg:w-auto">
            Watch Video
          </Button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        {/* video here */}
        <video autoPlay controls={false} loop muted className="w-full">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
