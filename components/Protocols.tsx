import Image from "next/image";
export default function Protocols() {
  return (
    <div className="flex text-center flex-col mt-20">
      <h1 className="text-3xl m-8">Protocols built on top of NOYA</h1>
      <div className="flex justify-between items-center">
        <div className="flex justify-center p-4 bg-gray-900 rounded-xl w-1/2 h-28 items-center m-4">
          <div>
            <Image src="/uni.svg" width={80} height={80} alt="Logo" />
          </div>
          <div>
            <h1>Trustless Uniswap Liquidity Provisioning.</h1>
            <p>(TULP) Multi-Tier, Multi-Chain, Multi-Asset pools</p>
          </div>
        </div>
        <div className="flex justify-center p-4 bg-gray-900 rounded-xl w-1/2 h-28 items-center  m-4">
          <div>
            <Image src="/lyfa.svg" width={80} height={80} alt="Logo" />
          </div>
          <div>
            <h1>Leveraged Yield Farming Aggregator.</h1>
            <p>(LYFA) LTV management using ZKML</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center p-4 bg-gray-900 rounded-xl w-1/2 h-28 items-center  m-4">
          <div>
            <Image src="/nola.svg" width={80} height={80} alt="Logo" />
          </div>
          <div>
            <h1>Native Omnichain Lending Aggregator .</h1>
            <p>(NOLA) Optimizing borrowing rates</p>
          </div>
        </div>
        <div className="flex justify-center p-4 bg-gray-900 rounded-xl w-1/2 h-28 items-center  m-4">
          <div>
            <Image src="/noya.svg" width={80} height={80} alt="Logo" />
          </div>
          <div>
            <h1>Native Omnichain Yield Aggregator .</h1>
            <p>
              (NOYA) Aggregating yield and diversifying risk across multiple
              chains
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
