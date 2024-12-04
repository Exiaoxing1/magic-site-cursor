"use client";

import { ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ScatterChart, Scatter } from 'recharts';

const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["M", "W", "F"];

export function HeatMap() {
  // 生成数据
  const generateData = () => {
    const data = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 52; col++) {
        let value = 0;
        // 示例：在特定位置添加活动数据
        if (col === 51 && row === 1) {
          value = 10;
        }
        data.push({
          x: col,
          y: row,
          value: value
        });
      }
    }
    return data;
  };

  const data = generateData();

  const getColor = (value: number) => {
    if (value === 0) return "#111111";
    if (value <= 2) return "rgba(0, 255, 185, 0.2)";
    if (value <= 4) return "rgba(0, 255, 185, 0.4)";
    if (value <= 6) return "rgba(0, 255, 185, 0.6)";
    if (value <= 8) return "rgba(0, 255, 185, 0.8)";
    return "#00FFB9";
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#333] text-white text-xs px-3 py-2 rounded-md shadow-lg">
          No accepted completions on January 25, 2024
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis
              dataKey="x"
              type="number"
              domain={[0, 51]}
              ticks={[0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]}
              tickFormatter={(value) => months[Math.floor(value / 4)]}
              stroke="#666"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey="y"
              type="number"
              domain={[0, 2]}
              ticks={[0, 1, 2]}
              tickFormatter={(value) => days[value]}
              stroke="#666"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Scatter data={data}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={getColor(entry.value)}
                  stroke="transparent"
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-4 text-xs text-zinc-500">
        <span>Less</span>
        <div className="flex gap-[1px]">
          {[0, 2, 4, 6, 8, 10].map((value) => (
            <div
              key={value}
              className="w-3 h-3"
              style={{ backgroundColor: getColor(value) }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
} 