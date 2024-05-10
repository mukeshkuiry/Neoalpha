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
    <footer className="text-white py-8 px-4">
      <div className="flex flex-col justify-between items-center space-y-6">
        <div className="flex items-center mb">
          <Link href={"#"} className="mr-4 hover:text-gray-400">
            About
          </Link>

          <Link
            href={"#"}
            className="hover:text-gray-400 block px-4 py-2 text-sm"
          >
            Audit
          </Link>

          <Link
            href={"#"}
            className="hover:text-gray-400 block px-4 py-2 text-sm"
          >
            Terms of Use
          </Link>
          <Link
            href={"#"}
            className="hover:text-gray-400 block px-4 py-2 text-sm"
          >
            Privacy Notice
          </Link>
        </div>
        <Link
          href="mailto:support@locus.finance"
          className="hover:text-gray-400"
        >
          support@locus.finance
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:text-gray-400"
          >
            <DiscordFilled />
            Discord
          </Link>
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:text-gray-400"
          >
            <TwitterCircleFilled />
            Twitter
          </Link>
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:text-gray-400"
          >
            <BsTelegram />
            Telegram
          </Link>
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:text-gray-400"
          >
            <YoutubeFilled />
            YouTube
          </Link>
          <Link
            href={"#"}
            className="bg-gray-600 rounded-full px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-500 hover:text-gray-400"
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
