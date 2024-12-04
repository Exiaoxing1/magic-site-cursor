"use client";

import Image from "next/image";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTASection() {
  return (
    <section className="bg-black py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            {/* Logo */}
            <div className="relative w-24 h-24 mb-12 group">
              <div className="absolute inset-0 rounded-2xl bg-[#00FFB9]/20 blur-xl group-hover:bg-[#00FFB9]/30 transition-all duration-500" />
              <div className="relative">
                <Image
                  src="/codeium.svg"
                  alt="Codeium"
                  width={96}
                  height={96}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Title */}
            <div className="relative mb-12">
              <AnimatedGradientText className="text-6xl font-bold">
                Get Your Superpowers
              </AnimatedGradientText>
              {/* Underline */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00FFB9] via-[#9c40ff] to-[#00FFB9] animate-gradient-x" />
            </div>

            {/* Button */}
            <ShimmerButton>
              Get Codeium
            </ShimmerButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
} 