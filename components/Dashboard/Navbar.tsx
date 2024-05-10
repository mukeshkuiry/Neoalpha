"use client";
import { ArrowUpOutlined } from "@ant-design/icons";
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

  return (
    <div className="flex justify-between items-center py-4 px-6 text-white">
      <h1 className="text-3xl font-bold">Neoalpha</h1>
      <div className="flex items-center mt-4 bg-green-400 hover:bg-green-500 hover:scale-105 transition-all cursor-pointer text-black text-xl pl-6 pr-2 py-2 rounded-full">
        <p>🎉 Join the referral program </p>{" "}
        <p className="bg-white text-black p-2 px-3 ml-4 rounded-full rotate-45 hover:rotate-90 transition-all">
          <ArrowUpOutlined />
        </p>
      </div>
      {connectedAccount !== "null" ? (
        <p className="text-lg hover:text-gray-300 bg-gray-800 rounded-full px-4 py-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image.png"
            alt="Metamask"
            className="w-6 h-6 inline-block mr-2"
          />
          {connectedAccount.substring(0, 6)}...{connectedAccount.substring(37)}
        </p>
      ) : (
        <button
          onClick={connectMetamask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-sm"
        >
          Connect wallet
        </button>
      )}
    </div>
  );
}
