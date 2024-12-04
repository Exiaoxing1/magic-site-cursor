"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  {
    icon: "https://exafunction.github.io/public/images/ides/vscode-original.svg",
    downloads: "1.97M"
  },
  {
    icon: "https://exafunction.github.io/public/images/ides/jetbrains-original.svg",
    downloads: "953.9K"
  },
  {
    icon: "https://exafunction.github.io/public/images/ides/chrome-original.svg",
    downloads: "40.0K"
  },
  {
    icon: "github",
    downloads: "4.4K"
  }
];

const demoVideos = [
  {
    id: "autocomplete",
    title: "Autocomplete",
    url: "https://exafunction.github.io/public/demos/autocompleteAnimation.webp",
  },
  {
    id: "chat",
    title: "Chat",
    url: "https://exafunction.github.io/public/demos/chatAnimation.webp",
  },
  {
    id: "command",
    title: "Command",
    url: "https://exafunction.github.io/public/demos/commandAnimation.webp",
  },
  {
    id: "supercomplete",
    title: "Supercomplete",
    url: "https://exafunction.github.io/public/demos/superCompleteAnimation.webp",
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export function EditorShowcase() {
  const [activeVideo, setActiveVideo] = useState(demoVideos[0]);

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto max-w-6xl px-4">
        {/* 下载量统计 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Codeium extensions are loved by millions of developers
          </h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-[#1A1A1A] border border-[#333333] rounded-full px-4 py-2"
              >
                {stat.icon === "github" ? (
                  <GithubIcon />
                ) : (
                  <img src={stat.icon} alt="" className="h-6 w-6" />
                )}
                <span className="text-yellow-400">★</span>
                <span className="text-white">{stat.downloads}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400">and 40+ more IDEs</p>
        </div>

        {/* 功能演示图片 */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-[#1E1E1E] mb-8">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeVideo.id}
              src={activeVideo.url}
              alt={activeVideo.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* 功能切换按钮 */}
        <div className="flex justify-center gap-4">
          {demoVideos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className={`px-6 py-2 rounded-lg transition-all ${
                activeVideo.id === video.id
                  ? "bg-[#00FFB9] text-black"
                  : "text-white hover:bg-gray-800"
              }`}
            >
              {video.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}