"use client";

import { Sidebar } from "@/components/profile/Sidebar";
import { HeatMap } from "@/components/profile/HeatMap";
import { PieChart } from "@/components/profile/PieChart";
import { BarChart } from "@/components/profile/BarChart";
import { Footer } from "@/components/profile/Footer";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Share2 } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl">2 accepted completions</h1>
              <div className="flex gap-4">
                <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2">
                  <span className="text-lg">👤</span>
                  My Public Profile
                </button>
                <ShimmerButton size="sm" className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </ShimmerButton>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#111] rounded-lg p-6">
                <h3 className="text-lg mb-4">Completions by File Type</h3>
                <PieChart />
              </div>
              <div className="bg-[#111] rounded-lg p-6">
                <h3 className="text-lg mb-4">Weekly Activity</h3>
                <HeatMap />
              </div>
            </div>

            {/* Analytics */}
            <div>
              <h3 className="text-lg mb-4">Analytics</h3>
              <div className="bg-[#111] rounded-lg p-6">
                <BarChart />
              </div>
            </div>

            {/* Top Languages */}
            <div>
              <h3 className="text-lg mb-4">Top coding languages</h3>
              <div className="bg-[#111] rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" className="text-[#58A6FF] w-full h-full">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      <path fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                    </svg>
                  </div>
                  <span className="text-lg">TSX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
} 