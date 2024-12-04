"use client";

import { SparklesText } from "@/components/ui/sparkles-text";
import { BoxReveal } from "@/components/ui/box-reveal";
import {
  AndurilLogo,
  JPMorganLogo,
  VectorLogo,
  DellLogo,
  WWTLogo,
  ClearwaterLogo,
  ZillowLogo,
} from "@/components/ui/enterprise-logos";

const enterprises = [
  // 第一行
  {
    name: "Anduril",
    Logo: AndurilLogo,
    row: 1
  },
  {
    name: "JPMorgan Chase",
    Logo: JPMorganLogo,
    row: 1
  },
  {
    name: "Vector",
    Logo: VectorLogo,
    row: 1
  },
  {
    name: "Dell",
    Logo: DellLogo,
    row: 1
  },
  // 第二行
  {
    name: "World Wide Technology",
    Logo: WWTLogo,
    row: 2
  },
  {
    name: "Clearwater Analytics",
    Logo: ClearwaterLogo,
    row: 2
  },
  {
    name: "Zillow",
    Logo: ZillowLogo,
    row: 2
  }
];

export function EnterpriseShowcase() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative">
          {/* 上边框 */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FFB9] to-transparent" />
          {/* 下边框 */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FFB9] to-transparent" />

          <div className="py-20">
            <div className="text-center mb-16">
              <SparklesText>
                Codeium lets the world's leading enterprises dream bigger
              </SparklesText>
            </div>

            <BoxReveal>
              <div className="grid gap-16">
                {/* 第一行 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                  {enterprises
                    .filter(e => e.row === 1)
                    .map(enterprise => (
                      <div 
                        key={enterprise.name}
                        className="transition-transform hover:scale-105 text-white h-12"
                      >
                        <enterprise.Logo />
                      </div>
                    ))}
                </div>

                {/* 第二行 */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
                  {enterprises
                    .filter(e => e.row === 2)
                    .map(enterprise => (
                      <div 
                        key={enterprise.name}
                        className="transition-transform hover:scale-105 text-white h-12"
                      >
                        <enterprise.Logo />
                      </div>
                    ))}
                </div>
              </div>
            </BoxReveal>
          </div>
        </div>
      </div>
    </section>
  );
} 