"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
}

export function Marquee({
  children,
  speed = 20,
}: MarqueeProps) {
  return (
    <div
      className="relative overflow-hidden whitespace-nowrap"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="inline-block animate-marquee"
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {children}
      </div>
      <div
        className="inline-block animate-marquee"
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
