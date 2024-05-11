"use client";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Web3 } from "web3";

export default function Navbar() {
  const [connectedAccount, setConnectedAccount] = useState("null");

  useEffect(() => {
    //get connected account from localstorage
    const connectedAccount = localStorage.getItem("connectedAccount");
    if (connectedAccount) {
      setConnectedAccount(connectedAccount);
    }
  }, []);

  async function connectMetamask() {
    //check metamask is installed
    if ((window as any).ethereum) {
      // instantiate Web3 with the injected provider
      const web3 = new Web3((window as any).ethereum);

      //request user to connect accounts (Metamask will prompt)
      await (window as any).ethereum.request({ method: "eth_requestAccounts" });

      //get the connected accounts
      const accounts = await web3.eth.getAccounts();

      //show the first connected account in the react page
      setConnectedAccount(accounts[0]);
      // add to localstorage
      localStorage.setItem("connectedAccount", accounts[0]);
    } else {
      alert("Please download metamask");
    }
  }
  const router = useRouter();

  return (
    <div className="flex justify-between items-center py-4 px-6 text-black">
      <h1
        className="text-3xl font-bold"
        onClick={() => {
          router.push("/app");
        }}
      >
        Neoalpha
      </h1>

      <div className="flex gap-4 justify-center items-center">
        <div className="flex items-center bg-green-400 hover:bg-green-500 hover:scale-105 transition-all cursor-pointer h-fit text-black text-lg pr-1.5 p-1 pl-4 rounded-full">
          <p>Referral rewards </p>{" "}
          <p className="bg-white text-black p-1 px-2 ml-4 rounded-full rotate-45 hover:rotate-90 transition-all">
            <ArrowUpOutlined />
          </p>
        </div>
        {connectedAccount !== "null" ? (
          <p className="text-md hover:text-gray-600 cursor-pointer bg-gray-300 rounded-full px-4 py-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image.png"
              alt="Metamask"
              className="w-6 h-6 inline-block mr-2"
            />
            {connectedAccount.substring(0, 6)}...
            {connectedAccount.substring(37)}
          </p>
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
