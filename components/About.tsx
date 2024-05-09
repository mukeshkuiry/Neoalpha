export default function About() {
  return (
    <div className="flex justify-between items-center text-white mt-28">
      <p className="text-3xl px-24 w-1/2">
        Say goodbye to manual DeFi Operations AI got you covered.
      </p>
      <div className="ml-8 w-1/2">
        <p className="text-lg">
          Our AI Agents leverage a vast array of on-chain data points to
          accurately forecast yields, volatility, and liquidity trends. This
          eliminates the need for manual liquidity allocation, as the AI Agents
          autonomously manage all aspects of the process in a proactive and
          predictive manner.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4">
          Join the Space Race
        </button>
      </div>
    </div>
  );
}
