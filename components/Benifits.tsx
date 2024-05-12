/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Benifits() {
  const router = useRouter();
  return (
    <div className="mt-32 flex flex-col justify-center items-center space-y-14">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 pr-4 mb-8 lg:mb-0">
          <h1 className="text-4xl mb-3 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center lg:text-left">
            AI Agents you can trust
          </h1>
          <p className="text-center text-lg lg:text-left">
            ZKLiquid&apos;s ZKML implementation enables on-chain proving of
            private & predictive AI models which enables trustless & verifiable
            strategy execution.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image src="/ai.gif" width={500} height={500} alt="Trustless AI" />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2">
          {/* video gif here */}
          <Image src="/lowest.gif" width={500} height={500} alt="Lowest Fees" />
        </div>
        <div className="w-full lg:w-1/2 pl-4">
          <h1 className="text-4xl mb-3 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center lg:text-left">
            The lowest fees possible through DEX & Bridge aggregators.
          </h1>
          <p className="text-center text-lg lg:text-left">
            ZKLiquid elevates the DeFi experience by minimizing slippage and
            fees through the seamless integration of bridge and DEX aggregators.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 pr-4">
          <h1 className="text-4xl mb-3 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center lg:text-left">
            Liquidity flows to where it&apos;s needed the most.
          </h1>
          <p className="text-center text-lg lg:text-left my-2 mb-5">
            Self-learning and predictive AI Agents allocate liquidity across
            multiple chains, assets, and protocols, ensuring sustainable growth
            in an ever-evolving DeFi landscape.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              className="border border-blue-400 text-white py-2 px-4 rounded-md mt-4 w-full lg:w-auto"
              onClick={() => router.push("/app")}
            >
              Go to dApp
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          {/* video here */}
          <Image
            src="/liquidity.gif"
            width={500}
            height={500}
            alt="Liquidity"
          />
        </div>
      </div>
    </div>
  );
}
