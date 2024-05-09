import { LinkOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";

export default function Strategy() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl font-bold m-8 ">
        Unleash exceptional returns with NOYA&apos;s game-changing agent-first approach
      </h1>
      <div className="flex justify-center items-center mb-8 p-8">
        <div className="w-1/2 mr-4">
          <Image src="/ethStrategy.webp" width={500} height={500} alt="Strategy" />
        </div>
        <div className="w-1/2 ml-4">
          <Image src="/stables.webp" width={500} height={500} alt="Strategy" />
        </div>
      </div>
      <div className="flex justify-evenly items-center m-20">
        <Button size="large" type="primary" icon={<LinkOutlined/>}>10+ chains</Button>
        <Button size="large" type="primary" icon={<LinkOutlined/>}>40+ protocols</Button>
        <Button size="large" type="primary" icon={<LinkOutlined/>}>500+ pools</Button>
      </div>
    </div>
  );
}
