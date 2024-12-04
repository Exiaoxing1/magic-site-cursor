"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Twitter, MessageSquare, Linkedin, Github, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-black">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/codeium.svg"
                alt="Codeium"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-white font-medium">codeium</span>
            </div>
            <p className="text-zinc-500 text-sm">Your modern coding superpowers.</p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Windsurf Editor</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Supercomplete</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Codeium Chat</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Live</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Forge</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Offers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">Extensions</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Visual Studio Code</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">JetBrains</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Neovim / Vim</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Chrome</Link></li>
              <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">See All</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="font-medium text-white mb-4">Industry</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Tech Leaders 2024</Link></li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-medium text-white mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-white mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Community</Link></li>
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">Media Kit</Link></li>
                <li><Link href="#" className="text-zinc-500 hover:text-white transition-colors">University</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 