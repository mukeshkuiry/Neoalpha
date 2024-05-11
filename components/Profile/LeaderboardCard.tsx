import React from 'react';
import { Table, Tag } from 'antd';
import { TrophyOutlined, CrownOutlined, FundOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LeaderboardUser {
  key: string;
  rank: number;
  username: string;
  experience: number;
}

interface LeaderboardSectionProps {
  leaderboardData: LeaderboardUser[];
  userRank: number; // User's position in the leaderboard
}

const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({ leaderboardData, userRank }) => {
  // Filter the top three positions
  const topThree = leaderboardData.slice(0, 3);

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      render: (text: string, record: any, index: number) => {
        let icon = null;
        if (index === 0) icon = <TrophyOutlined className="text-2xl text-gold mr-1" />;
        else if (index === 1) icon = <CrownOutlined className="text-xl text-silver mr-1" />;
        else if (index === 2) icon = <TrophyOutlined className="text-lg text-bronze mr-1" />;
        return (
          <span className="flex items-center">
            {icon}
            <span className="text-base">{text}</span>
          </span>
        );
      },
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Experience Points',
      dataIndex: 'experience',
      key: 'experience',
      render: (text: string, record: any) => (
        <span className="flex items-center">
          <FundOutlined className="mr-1" />
          <Tag color="purple">{text}</Tag>
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <Table columns={columns} dataSource={topThree} pagination={false} footer={() => `Your Rank: ${userRank}`} className='w-full' />
    </div>
  );
};

export default LeaderboardSection;
