"use client";
import { ArrowUpOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Web3 } from "web3";
import { Popover, Button } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Navbar() {
  const [connectedAccount, setConnectedAccount] = useState("null");

  useEffect(() => {
    const connectedAccount = localStorage.getItem("connectedAccount");
    if (connectedAccount) {
      setConnectedAccount(connectedAccount);
    }
  }, []);

  async function connectMetamask() {
    if ((window as any).ethereum) {
      const web3 = new Web3((window as any).ethereum);
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      setConnectedAccount(accounts[0]);
      localStorage.setItem("connectedAccount", accounts[0]);
    } else {
      alert("Please download Metamask");
    }
  }

  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-4 px-6 text-black">
      <Image
        onClick={() => router.push("/app")}
        className="cursor-pointer"
        src={"/logo.png"}
        width={200}
        height={100}
        alt="Logo"
      />

      <div className="flex justify-between items-center w-full lg:w-auto">
        <div
          className="flex items-center bg-green-400 hover:bg-green-500 hover:scale-105 transition-all cursor-pointer h-fit text-black text-lg pr-1.5 p-1 pl-4 rounded-full mb-4 lg:mb-0 lg:mr-4"
          onClick={() => router.push("/referral")}
        >
          <p>Referral rewards </p>{" "}
          <p className="bg-white text-black p-1 px-2 ml-4 rounded-full rotate-45 hover:rotate-90 transition-all">
            <ArrowUpOutlined />
          </p>
        </div>
        {connectedAccount !== "null" ? (
          <Popover
            placement="bottomRight"
            content={
              <div className="flex flex-col justify-center items-center">
                <p>John Doe</p>
                <p className="text-gray-600">example@example.com</p>
                <p className="text-gray-600">
                  {connectedAccount.substring(0, 6)}...
                  {connectedAccount.substring(37)}
                </p>
                <Button
                  type="primary"
                  className="mt-2 rounded-full w-full"
                  onClick={() => router.push("/referral")}
                >
                  Go to Profile
                </Button>
              </div>
            }
            trigger="hover"
          >
            <p className="text-md hover:text-gray-600 cursor-pointer bg-gray-300 rounded-full px-4 py-1.5">
              <UserOutlined /> {connectedAccount.substring(0, 6)}...
              {connectedAccount.substring(37)}
            </p>
          </Popover>
        ) : (
          <button
            onClick={connectMetamask}
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg"
          >
            Connect wallet
          </button>
        )}
      </div>
    </div>
  );
}
