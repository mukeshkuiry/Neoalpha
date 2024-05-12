import { LinkOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function Strategy() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold m-8 ">
        Unleash exceptional returns with ZKLiquid&apos;s game-changing agent-first approach
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-8 p-8">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
          <Image src="/ethStrategy.webp" width={500} height={500} alt="Strategy" />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-4">
          <Image src="/stables.webp" width={500} height={500} alt="Strategy" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center m-8 gap-8">
        <div className="bg-purple-400 p-4 text-white rounded-lg flex flex-col items-center justify-center w-full lg:w-auto max-w-sm h-32 lg:h-auto shadow-md m-2">
          <LinkOutlined className="text-4xl mb-2" />
          <span className="font-bold text-lg">10+ chains</span>
        </div>
        <div className="bg-purple-400 p-4 text-white rounded-lg flex flex-col items-center justify-center w-full lg:w-auto max-w-sm h-32 lg:h-auto shadow-md m-2">
          <LinkOutlined className="text-4xl mb-2" />
          <span className="font-bold text-lg">40+ protocols</span>
        </div>
        <div className="bg-purple-400 p-4 text-white rounded-lg flex flex-col items-center justify-center w-full lg:w-auto max-w-sm h-32 lg:h-auto shadow-md m-2">
          <LinkOutlined className="text-4xl mb-2" />
          <span className="font-bold text-lg">500+ pools</span>
        </div>
      </div>
    </div>
  );
}
