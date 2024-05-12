import { Collapse } from "antd";

export default function FAQ() {
  const texts = [
    "At ZKLiquid, our Omnivaults provide an AI-powered yield optimization solution that enables you to earn high risk-adjusted yields across multiple chains. With our exhaustive list of signals from on-chain and off-chain data feeds, you can farm the most optimal chain, protocol, and pool relative to your risk preference and strategy. Say goodbye to missing out on yield opportunities and start earning more today.",
    "Omnivaults are advanced yield-bearing instruments that utilize AI technology to optimize your returns. Our solution makes it easy for you to earn high risk-adjusted yield across multiple chains, regardless of your technical knowledge or experience. With ZKLiquid, you can take advantage of the latest in yield optimization technology and maximize your returns.",
    "Our Omnivaults constantly monitor an exhaustive list of signals from on-chain and off-chain data feeds, ensuring you're always farming the most optimal chain, protocol, and pool. With ZKLiquid, you can rest assured that your funds are constantly working for you, earning the highest yields possible.",
    "Omnichain+ is ZKLiquid's unique approach to bridging and exchanging assets across multiple chains. Instead of relying on a single bridge, we use multiple bridges and dex aggregators to ensure that you always get the safest, fastest, and cheapest option. With our solution, you can enjoy seamless asset exchange across multiple chains and maximize your returns with ease.",
    "ZKLiquid takes the safety and security of your funds seriously. Our architecture undergoes rigorous stress testing, and we only use the safest bridges. We also constantly monitor withdrawals and deposits, and underperforming Omnivaults are automatically paused to protect your investments.",
    "ZKLiquid is committed to the safety and security of your funds, which is why we do not hold your assets. With our solution, you have full control over your investments, and you can rest easy knowing that your funds are safe and secure.",
  ];

  const items = [
    {
      key: "1",
      label: "How do I get real yields?",
      children: <p>{texts[0]}</p>,
    },
    {
      key: "2",
      label: "What are Omnivaults?",
      children: <p>{texts[1]}</p>,
    },
    {
      key: "3",
      label: "How do Omnivaults work?",
      children: <p>{texts[2]}</p>,
    },
    {
      key: "4",
      label: "What is Omnichain+?",
      children: <p>{texts[3]}</p>,
    },
    {
      key: "5",
      label: "How does ZKLiquid ensure the safety of my funds?",
      children: <p>{texts[4]}</p>,
    },
    {
      key: "6",
      label: "Does ZKLiquid hold my assets?",
      children: <p>{texts[5]}</p>,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">FAQ</h1>
      <p className="text-lg mb-4">Frequently Asked Questions</p>
      <div className="w-full lg:w-2/3">
        <Collapse items={items} style={{
          backgroundColor: "#fff",
          color: "white",
          borderRadius: "8px",
          marginBottom: "20px",
        
        }} bordered accordion />
      </div>
    </div>
  );
}
