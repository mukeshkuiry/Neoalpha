import { VideoCameraOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Hero() {
  return (
    <div className="flex justify-between items-center mt-20">
      <div>
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
        <div className="flex space-x-4 mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-sm">Go to dApp</button>
          <Button icon={<VideoCameraOutlined />}>
            Watch Video
          </Button>
        </div>
      </div>
      <div>
        {/* video here */}
        <video autoPlay loop muted>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
