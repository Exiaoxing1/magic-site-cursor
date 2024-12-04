"use client";

import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Twitter, Linkedin, Edit3, ChevronLeft, ChevronRight, Settings, LogOut, Share2 } from "lucide-react";

export function Sidebar() {
  return (
    <div className="space-y-8">
      {/* Profile Info */}
      <div className="space-y-4">
        <div className="w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center text-4xl font-medium">
          S
        </div>
        <div>
          <h1 className="text-2xl font-medium">Smith wallis</h1>
          <p className="text-white/60">wonderingly-pertinent-soldierfish-85439</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-white/60">Member since Jul 23, 2024</p>
          <p className="text-sm text-white/60">w0292458@gmail.com</p>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-emerald-600/20 text-emerald-400 rounded">
            PRO
          </span>
        </div>
      </div>

      {/* Bio */}
      <div>
        <h2 className="text-lg font-medium mb-2">Bio</h2>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors w-full">
          <Edit3 className="w-4 h-4" />
          <span>Edit</span>
        </button>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-lg font-medium mb-2">Achievements</h2>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
            <code className="text-2xl">{"</>"}</code>
          </div>
          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Updates */}
      <div>
        <h2 className="text-lg font-medium mb-2">Product Updates</h2>
        <div className="flex gap-2">
          <Link
            href="#"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <ShimmerButton className="w-full justify-start">
          Upgrade to Pro
        </ShimmerButton>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors w-full">
          <Share2 className="w-4 h-4" />
          <span>Refer a friend</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors w-full">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors w-full">
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
} 