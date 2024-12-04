"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface BoxRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function BoxReveal({ children, className = "" }: BoxRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className}`}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
