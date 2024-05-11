import {
  DiscordFilled,
  GithubFilled,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import { BsTelegram } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-8 px-4">
      <div className="flex flex-col justify-between items-center space-y-6">
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <Link href={"#"} className="hover:text-gray-400">
            About
          </Link>
          <Link href={"#"} className="hover:text-gray-400">
            Audit
          </Link>
          <Link href={"#"} className="hover:text-gray-400">
            Terms of Use
          </Link>
          <Link href={"#"} className="hover:text-gray-400">
            Privacy Notice
          </Link>
        </div>
        <Link
          href="mailto:support@locus.finance"
          className="hover:text-gray-400 text-gray-700"
        >
          support@locus.finance
        </Link>
        <div className="flex flex-wrap justify-center items-center gap-6 text-white">
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:scale-105 transition-all"
          >
            <DiscordFilled />
            Discord
          </Link>
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:scale-105 transition-all"
          >
            <TwitterCircleFilled />
            Twitter
          </Link>
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:scale-105 transition-all"
          >
            <BsTelegram />
            Telegram
          </Link>
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:scale-105 transition-all"
          >
            <YoutubeFilled />
            YouTube
          </Link>
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:scale-105 transition-all"
          >
            <GithubFilled />
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
