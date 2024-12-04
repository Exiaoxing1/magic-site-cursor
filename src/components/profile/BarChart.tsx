"use client";

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function BarChart() {
  const data = days.map(day => ({
    name: day,
    value: day === 'We' ? 1 : 0 // 示例数据：周三有一次活动
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#333] text-white text-xs px-3 py-2 rounded-md shadow-lg">
          Your coding activity
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <h3 className="text-sm font-medium text-white mb-2">Analytics</h3>
      <div className="bg-[#111] rounded-lg p-6">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#666', fontSize: 12 }}
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="value"
                fill="#00FFB9"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-center text-sm text-zinc-500 mt-4">
          Your coding activity
        </div>
      </div>
    </div>
  );
} 