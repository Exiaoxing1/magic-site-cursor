"use client";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className = "" }: AnimatedGradientTextProps) {
  return (
    <div className={`relative ${className}`}>
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00FFB9] via-[#9c40ff] to-[#00FFB9] animate-gradient-x">
        {children}
      </h2>
    </div>
  );
}
