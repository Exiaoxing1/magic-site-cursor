"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { StarRating } from "@/components/ui/star-rating";
import { CheckIcon, CrossIcon } from "@/components/ui/status-icons";
import { BoxReveal } from "@/components/ui/box-reveal";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const comparisonData = [
  {
    name: "VSCode marketplace rating",
    codeium: { type: "rating", value: 5 },
    github: { type: "rating", value: 4.5 },
    link: true,
  },
  {
    name: "JetBrains marketplace rating",
    codeium: { type: "rating", value: 5 },
    github: { type: "rating", value: 3 },
    link: true,
  },
  {
    name: "Number of IDEs",
    codeium: { type: "text", value: "40+" },
    github: { type: "text", value: "~15" },
  },
  {
    name: "Number of languages",
    codeium: { type: "text", value: "70+" },
    github: { type: "text", value: "~40" },
  },
  {
    name: "AI autocomplete and chat",
    codeium: { type: "boolean", value: true },
    github: { type: "boolean", value: true },
  },
  {
    name: "Full repo context awareness",
    codeium: { type: "boolean", value: true },
    github: { type: "boolean", value: false },
  },
  {
    name: "Deployment methods",
    codeium: { type: "text", value: "SaaS, on-prem, in-VPC" },
    github: { type: "text", value: "SaaS only" },
  },
  {
    name: "Completed audit for SaaS",
    codeium: { type: "text", value: "SOC 2 Type 2" },
    github: { type: "text", value: "SOC 2 Type 1" },
  },
];

export function ProductComparison() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <div className="text-center mb-8">
            <AnimatedGradientText>
              Codeium vs GitHub Copilot
            </AnimatedGradientText>
            <p className="text-gray-400 mt-4 text-xl">
              The most intelligent AI code generation tool out there and we have the data to prove it.
            </p>
            <a href="#" className="inline-block mt-4 text-[#00FFB9] hover:underline">
              Read more about the performance quality comparison here →
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 rounded-xl overflow-hidden">
            <div className="relative">
              <BorderBeam
                size={300}
                duration={15}
                colorFrom="#ffaa40"
                colorTo="#9c40ff"
              />
              <div className="bg-[#1A1A1A]">
                {/* 表头 */}
                <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-800">
                  <div></div>
                  <div className="flex justify-center">
                    <img
                      src="/codeium-logo.svg"
                      alt="Codeium"
                      className="h-8"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="/github-copilot-logo.svg"
                      alt="GitHub Copilot"
                      className="h-8"
                    />
                  </div>
                </div>

                {/* 表格内容 */}
                {comparisonData.map((item, index) => (
                  <div
                    key={item.name}
                    className={`grid grid-cols-3 gap-4 p-6 hover:bg-gray-800/50 transition-colors ${
                      index !== comparisonData.length - 1 ? "border-b border-gray-800" : ""
                    }`}
                  >
                    <div className="text-white flex items-center">
                      {item.name}
                      {item.link && (
                        <a href="#" className="ml-2 text-[#00FFB9]">
                          →
                        </a>
                      )}
                    </div>
                    <div className="flex justify-center items-center">
                      {renderValue(item.codeium)}
                    </div>
                    <div className="flex justify-center items-center">
                      {renderValue(item.github)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function renderValue(data: { type: string; value: any }) {
  switch (data.type) {
    case "rating":
      return <StarRating rating={data.value} />;
    case "boolean":
      return data.value ? <CheckIcon /> : <CrossIcon />;
    case "text":
      return <span className="text-white">{data.value}</span>;
    default:
      return null;
  }
} 