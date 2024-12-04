"use client";

import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export function PieChart() {
  const data = [
    { name: 'TSX', value: 2, color: '#58A6FF' },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#333] text-white text-xs px-3 py-2 rounded-md shadow-lg">
          {data.name}: {data.value} accepted completions, {(data.value / 2 * 100).toFixed(2)}% of total
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex items-center gap-8">
      {/* Chart */}
      <div className="w-48 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={48}
              paddingAngle={0}
              dataKey="value"
              stroke="transparent"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </RechartsChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-sm"
          style={{ backgroundColor: '#58A6FF' }}
        />
        <span className="text-white">TSX</span>
      </div>
    </div>
  );
} 