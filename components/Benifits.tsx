import { Button } from "antd";

export default function Benifits() {
  return (
    <div className="mt-32 flex flex-col justify-center items-center space-y-14">
      <div className="flex justify-between items-center">
        <div className="w-1/2 pr-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            AI Agents you can trust
          </h1>
          <p>
            NOYA&apos;s ZKML implementation enables on-chain proving of private &
            predictive AI models which enables trustless & verifiable strategy
            execution.
          </p>
        </div>
        <div className="w-1/2">
          {/* video here */}
          <video autoPlay loop muted>
            <source src="/ai-intro.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          {/* video here */}
          <video autoPlay loop muted>
            <source src="/lowest-fees.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            The lowest fees possible through DEX & Bridge aggregators.
          </h1>
          <p>
            NOYA elevates the DeFi experience by minimizing slippage and fees
            through the seamless integration of bridge and DEX aggregators.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-1/2 pr-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Liquidity flows to where it&apos;s needed the most.
          </h1>
          <p className="my-2 mb-5">
            Self-learning and predictive AI Agents allocate liquidity across
            multiple chains, assets, and protocols, ensuring sustainable growth
            in an ever-evolving DeFi landscape.
          </p>
          <div className="flex">
            <Button>Go to dApp</Button>
          </div>
        </div>
        <div className="w-1/2">
          {/* video here */}
          <video autoPlay loop muted>
            <source src="/liquidity-flows.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
