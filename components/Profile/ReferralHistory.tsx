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
  ];

  const referralHistoryData = [
    { key: "1", date: "2024-05-01", expEarned: 50, tokensEarned: 10 },
    { key: "2", date: "2024-05-05", expEarned: 30, tokensEarned: 5 },
    { key: "3", date: "2024-05-10", expEarned: 20, tokensEarned: 8 },
    { key: "4", date: "2024-05-15", expEarned: 40, tokensEarned: 12 },
    { key: "5", date: "2024-05-20", expEarned: 60, tokensEarned: 15 },
    { key: "6", date: "2024-05-25", expEarned: 70, tokensEarned: 20 },
    { key: "7", date: "2024-05-30", expEarned: 55, tokensEarned: 18 },
    { key: "8", date: "2024-06-01", expEarned: 45, tokensEarned: 9 },
    { key: "9", date: "2024-06-05", expEarned: 35, tokensEarned: 7 },
    { key: "10", date: "2024-06-10", expEarned: 25, tokensEarned: 6 },
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
