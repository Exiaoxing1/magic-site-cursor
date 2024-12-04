"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, size = "md", ...props }, ref) => {
    const buttonSizes = {
      sm: "h-8 px-4 text-sm",
      md: "h-10 px-6",
      lg: "h-12 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
          "bg-[#00FFB9] text-black hover:bg-[#00FFB9]/90",
          "relative overflow-hidden",
          buttonSizes[size],
          className
        )}
        {...props}
      >
        <div className="relative z-10">{children}</div>
        <div
          className="absolute inset-0 z-0 translate-y-[100%] animate-shimmer bg-gradient-to-t from-transparent via-white/25 to-transparent"
          style={{
            animation: "shimmer 2s infinite",
          }}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
