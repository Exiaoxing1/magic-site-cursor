"use client";

import { Marquee } from "@/components/ui/marquee";
import { MagicCard } from "@/components/ui/magic-card";

const testimonials = [
  {
    quote: "I started a Github Copilot trial a couple months ago because I thought it was the only solution available, but then I found Codeium. It has an equivalent, if not more extensive, feature-set and is free. Win-win.",
    author: {
      name: "Andrew Tibbetts",
      twitter: "andrewtibetts",
    }
  },
  {
    quote: "Great tool! I've installed in Visual Studio 2022 and in Visual Studio Code. It seems to understand my coding logic, and especially in Javascript, propose to me the code blocks that I'm going to write.",
    author: {
      name: "Bruno Migliaretti",
      twitter: "brunomigliaretti",
    }
  },
  {
    quote: "Fantastic tool, I tried all the AI assistants I could find but this is by far the best. Quick to setup, easy to use, suggestions and written snippets relevant and a good basis to work with.",
    author: {
      name: "Erik Timmermans",
      twitter: "eriktimmermans",
    }
  },
  {
    quote: "I recently had the pleasure of using Codeium and I must say, it has completely transformed my coding experience. This app is a true gem for developers working in Python, JavaScript, TypeScript, Java, Go, and beyond.",
    author: {
      name: "Donny Rivera",
      twitter: "donnyrivera",
    }
  },
  {
    quote: "Codeium AI in DataSpell is driving me nuts. This is an absolutely mind-blowing free tool.",
    author: {
      name: "Dinesh Kumar Roy",
      twitter: "DineshRoy",
    }
  },
  {
    quote: "Great extension for VSCode! I use it daily to help with code suggestions and applying documentation to my functions. Very functional replacement for Copilot in my honest opinion.",
    author: {
      name: "Tyler Buell",
      twitter: "tylerbuell",
    }
  },
  {
    quote: "Outstanding! I thoroughly tested Copilot, Replit, Tabnine, Cody and CodeWhisperer and none of them match the performance, accuracy, and intuitive operation of Codeium. I simply could not be happier with it.",
    author: {
      name: "Andy Gee",
      twitter: "andygee",
    }
  },
  {
    quote: "Codeium has an incredible awareness which continually surprises you. Since installing this for my team, we have been more efficient and productive. Really really useful, and highly recommended.",
    author: {
      name: "David Moxon",
      twitter: "davidmoxon",
    }
  }
];

export function Testimonials() {
  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-gray-400 text-xl">
            Join thousands of developers who have already enhanced their coding experience
          </p>
        </div>
      </div>

      <div className="relative">
        {/* 上边框 */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF0000] via-[#00FF00] to-[#0000FF] animate-gradient-x" />
        {/* 下边框 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#FF0000] via-[#00FF00] to-[#0000FF] animate-gradient-x" />

        <div className="space-y-12 py-12">
          <Marquee speed={80}>
            <div className="flex gap-8">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <MagicCard key={index} {...testimonial} />
              ))}
            </div>
          </Marquee>

          <Marquee speed={70}>
            <div className="flex gap-8">
              {testimonials.slice(4).map((testimonial, index) => (
                <MagicCard key={index + 4} {...testimonial} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
} 