"use client";

import { BorderBeam } from "./border-beam";

interface MagicCardProps {
  quote: string;
  author: {
    name: string;
    title?: string;
    avatar?: string;
    twitter?: string;
  };
}

export function MagicCard({ quote, author }: MagicCardProps) {
  return (
    <div className="relative">
      <BorderBeam size={200} duration={10} />
      <div className="relative bg-[#0A0A0A] rounded-xl p-8 w-[400px] min-h-[240px] flex flex-col whitespace-normal">
        <blockquote className="text-white/80 text-lg leading-relaxed flex-grow">
          <p className="whitespace-normal">{quote}</p>
        </blockquote>
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
          <div className="text-white font-medium">{author.name}</div>
          {author.twitter && (
            <a
              href={`https://twitter.com/${author.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00FFB9]"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
