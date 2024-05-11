import Image from "next/image";

export default function About() {
  return (
    <div className="p-6 rounded-xl bg-white mt-8">
      <h1 className="text-2xl mb-2">About</h1>
      <p className="text-gray-700 mb-6">
        Locus Yield ETH is a basket of yield-bearing strategies involving ETH
        and its liquid staking derivatives. The index aims to tap into different
        sectors of DeFi to provide users with the best risk-adjusted returns.
      </p>
      <div>
        <h1 className="text-2xl mb-2">Why invest?</h1>
        <p className="text-gray-700 mb-6">
          Locus Yield ETH streamlines the investment process by compounding
          rewards and updating underlying strategies depending on the state of
          the market. The index maintains a moderate risk profile and is best
          suited for investors looking to earn competitive returns on their ETH
          holdings.
        </p>
        <h1 className="text-2xl mb-2">What&apos;s inside?</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="h-32 sm:w-1/2 md:w-1/3 lg:w-1/5 bg-purple-500 rounded-lg"></div>
          <div className="h-32 sm:w-1/2 md:w-1/3 lg:w-1/5 bg-purple-500 rounded-lg"></div>
          <div className="h-32 sm:w-1/2 md:w-1/3 lg:w-1/5 bg-purple-500 rounded-lg"></div>
          <div className="h-32 sm:w-1/2 md:w-1/3 lg:w-1/5 bg-purple-500 rounded-lg"></div>
          <div className="h-32 sm:w-1/2 md:w-1/3 lg:w-1/5 bg-purple-500 rounded-lg"></div>
        </div>
        <div className="mb-6">
          <Image
            src="/asses.png"
            alt="Assets image"
            height={200}
            width={700}
            className="w-full"
          />
        </div>
        <h1 className="text-2xl mb-2">The process of yield generation</h1>
        <div className="mb-6">
          <Image
            src="/flow.svg"
            alt="Flow image"
            height={200}
            width={700}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
