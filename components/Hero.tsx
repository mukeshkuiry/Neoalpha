"use client";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { VideoCameraOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const leftSlideAnimation = useSpring({
    opacity: showContent ? 1 : 0,
    transform: showContent ? "translateX(0%)" : "translateX(-100%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
  });

  const rightSlideAnimation = useSpring({
    opacity: showContent ? 1 : 0,
    transform: showContent ? "translateX(0%)" : "translateX(100%)",
    from: { opacity: 0, transform: "translateX(100%)" },
  });

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mt-20">
      <animated.div
        className="text-center lg:text-left lg:w-1/2"
        style={leftSlideAnimation}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Trustless Omnichain AI Agents
        </h1>
        <p className="my-5 text-xl">
          ZKLiquid&apos;s AI Agents direct omnichain liquidity trustlessly using
          ZKML.
          <br />
          These agents execute multiple intents like yield aggregation,
          borrowing optimization, liquidity provisioning, and collateral
          management.
        </p>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
          <button
            className="border border-blue-400 text-white py-2 px-4 rounded-md w-full lg:w-auto"
            onClick={() => router.push("/app")}
          >
            Go to dApp
          </button>
          <div className="flex justify-center items-center gap-2 text-gray-400 cursor-pointer">
            <VideoCameraOutlined className="text-xl" />
            <h1>Watch video</h1>
          </div>
        </div>
      </animated.div>
      <animated.div
        className="lg:w-1/2 mt-8 lg:mt-0"
        style={rightSlideAnimation}
      >
        <Image src="/hero.gif" width={800} height={800} alt="Hero" />
      </animated.div>
    </div>
  );
}
