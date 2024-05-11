"use client";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function Benifits() {
  const router = useRouter();
  return (
    <div className="mt-32 flex flex-col justify-center items-center space-y-14">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 pr-4 mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center lg:text-left">
            AI Agents you can trust
          </h1>
          <p className="text-center lg:text-left">
            NOYA&apos;s ZKML implementation enables on-chain proving of private
            & predictive AI models which enables trustless & verifiable strategy
            execution.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          {/* video here */}
          <video autoPlay loop muted className="w-full">
            <source src="/ai.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2">
          {/* video here */}
          <video autoPlay loop muted className="w-full">
            <source src="/lowest-fees.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-full lg:w-1/2 pl-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center lg:text-left">
            The lowest fees possible through DEX & Bridge aggregators.
          </h1>
          <p className="text-center lg:text-left">
            NOYA elevates the DeFi experience by minimizing slippage and fees
            through the seamless integration of bridge and DEX aggregators.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 pr-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center lg:text-left">
            Liquidity flows to where it&apos;s needed the most.
          </h1>
          <p className="text-center lg:text-left my-2 mb-5">
            Self-learning and predictive AI Agents allocate liquidity across
            multiple chains, assets, and protocols, ensuring sustainable growth
            in an ever-evolving DeFi landscape.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button onClick={() => router.push("/app")}>Go to dApp</Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          {/* video here */}
          <video autoPlay loop muted className="w-full">
            <source src="/liquidity-flows.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
