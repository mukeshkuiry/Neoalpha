import React from "react";
import { Table, Tag } from "antd";
import moment from "moment";

const ReferralHistory: React.FC = () => {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date: string) => <span>{moment(date).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Exp Earned",
      dataIndex: "expEarned",
      key: "expEarned",
      render: (expEarned: number) => (
        <Tag color="purple">{expEarned} EXP</Tag>
      ),
    },
    {
      title: "Tokens Earned",
      dataIndex: "tokensEarned",
      key: "tokensEarned",
      render: (tokensEarned: number) => (
        <Tag color="blue">{tokensEarned} Tokens</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Tag color="green" key="action" className="cursor-pointer">
          Claim
        </Tag>
      ),
    },
  ];
    

  const referralHistoryData = [
    { key: "1", date: "2024-05-01", expEarned: 50, tokensEarned: 10 },
    { key: "2", date: "2024-05-05", expEarned: 30, tokensEarned: 5 },
    { key: "3", date: "2024-05-10", expEarned: 20, tokensEarned: 8 },
    { key: "4", date: "2024-05-15", expEarned: 40, tokensEarned: 12 },
    { key: "5", date: "2024-05-20", expEarned: 60, tokensEarned: 15 },
  ];

  return (
    <Table
      columns={columns}
      dataSource={referralHistoryData}
      pagination={false}
      bordered
      scroll={{ x: true }}
    />
  );
};

export default ReferralHistory;
