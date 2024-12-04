"use client";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
}

export function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div className="flex-1 min-w-[200px] bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors cursor-pointer">
      <div className="mb-2">
        <h3 className="text-sm text-white/60">{title}</h3>
      </div>
      <p className="text-2xl font-medium text-white">{value}</p>
      <p className="text-sm text-white/60 mt-1">{description}</p>
    </div>
  );
} 