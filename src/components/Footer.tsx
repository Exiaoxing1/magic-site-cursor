"use client";

import Image from "next/image";
import Link from "next/link";
import { SocialIcons } from "@/components/ui/social-icons";

const navigation = {
  product: [
    { name: "Windsurf Editor", href: "#" },
    { name: "Supercomplete", href: "#" },
    { name: "Codeium Chat", href: "#" },
    { name: "Live", href: "#" },
    { name: "Forge", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Offers", href: "#" },
  ],
  extensions: [
    { name: "Visual Studio Code", href: "#" },
    { name: "JetBrains", href: "#" },
    { name: "Neovim / Vim", href: "#" },
    { name: "Chrome", href: "#" },
    { name: "See All", href: "#" },
  ],
  industry: [
    { name: "Tech Leaders 2024", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  support: [
    { name: "About Us", href: "#" },
    { name: "Community", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Media Kit", href: "#" },
    { name: "University", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and Social Links */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/codeium.svg"
                alt="Codeium"
                width={32}
                height={32}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-400 mb-6">Your modern coding superpowers.</p>
            <SocialIcons />
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:col-span-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[#00FFB9] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Extensions</h3>
              <ul className="space-y-3">
                {navigation.extensions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[#00FFB9] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Industry</h3>
              <ul className="space-y-3">
                {navigation.industry.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[#00FFB9] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company & Support</h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-[#00FFB9] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            © 2024 Exafunction, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 