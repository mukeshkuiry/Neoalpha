import Image from "next/image";

export default function Protocols() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl m-8">Protocols built on top of NOYA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 rounded-xl flex p-4 items-center">
          <div className="mr-4">
            <Image src="/uni.svg" width={80} height={80} alt="Logo" />
          </div>
          <div>
            <h1 className="text-white">Trustless Uniswap Liquidity Provisioning.</h1>
            <p className="text-gray-300">(TULP) Multi-Tier, Multi-Chain, Multi-Asset pools</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl flex p-4 items-center">
          <div className="mr-4">
            <Image src="/lyfa.svg" width={80} height={80} alt="Logo" />
          </div>
          <div>
            <h1 className="text-white">Leveraged Yield Farming Aggregator.</h1>
            <p className="text-gray-300">(LYFA) LTV management using ZKML</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl flex p-4 items-center mt-8 md:mt-0">
          <div className="mr-4">
            <Image src="/nola.svg" width={80} height={80} alt="Logo" />
          </div>
          <div>
            <h1 className="text-white">Native Omnichain Lending Aggregator.</h1>
            <p className="text-gray-300">(NOLA) Optimizing borrowing rates</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl flex p-4 items-center mt-8 md:mt-0">
          <div className="mr-4">
            <Image src="/noya.svg" width={80} height={80} alt="Logo" />
          </div>
          <div>
            <h1 className="text-white">Native Omnichain Yield Aggregator.</h1>
            <p className="text-gray-300">(NOYA) Aggregating yield and diversifying risk across multiple chains</p>
          </div>
        </div>
      </div>
    </div>
  );
}
