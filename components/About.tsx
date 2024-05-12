"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

export default function About() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const textAnimation = useSpring({
    opacity: showContent ? 1 : 0,
    transform: showContent ? "translateX(0%)" : "translateX(-100%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
  });

  const buttonAnimation = useSpring({
    opacity: showContent ? 1 : 0,
    transform: showContent ? "translateX(0%)" : "translateX(100%)",
    from: { opacity: 0, transform: "translateX(100%)" },
  });

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center text-white mt-28">
        <animated.p
          className="text-5xl lg:px-20 w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 font-serif bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          style={textAnimation}
        >
          Say goodbye to manual DeFi Operations AI got you covered.
        </animated.p>
        <animated.div
          className="lg:ml-8 w-full lg:w-1/2"
          style={buttonAnimation}
        >
          <p className="text-xl">
            Our AI Agents leverage a vast array of on-chain data points to
            accurately forecast yields, volatility, and liquidity trends. This
            eliminates the need for manual liquidity allocation, as the AI
            Agents autonomously manage all aspects of the process in a proactive
            and predictive manner.
          </p>
          <button className="border border-blue-400 text-white py-2 px-4 rounded-md mt-4 w-full lg:w-auto">
            Join the Space Race
          </button>
        </animated.div>
      </div>
      <div className="w-full items-center flex justify-center mt-20">
        <Image src="/demo.gif" width={1000} height={1000} alt="Demo"/>
      </div>
    </div>
  );
}
