"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SparklesTextProps {
  children: React.ReactNode;
  className?: string;
}

export function SparklesText({ children, className = "" }: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => {
        // 移除旧的闪光
        const now = Date.now();
        const filtered = prev.filter(sparkle => now - sparkle.id < 1000);

        // 添加新的闪光
        if (filtered.length < 3) {
          return [
            ...filtered,
            {
              id: now,
              x: Math.random() * 100,
              y: Math.random() * 100,
            },
          ];
        }

        return filtered;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 1 }}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
        />
      ))}
      <h2 className="text-3xl font-bold text-white">{children}</h2>
    </div>
  );
}
