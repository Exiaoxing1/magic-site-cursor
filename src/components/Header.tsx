"use client";

import Image from "next/image";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const products = [
  {
    title: "Windsurf Editor",
    href: "#",
  },
  {
    title: "Supercomplete",
    href: "#",
  },
  {
    title: "Codeium Chat",
    href: "#",
  },
  {
    title: "Live",
    href: "#",
  },
  {
    title: "Forge",
    href: "#",
  },
];

const capabilities = [
  {
    title: "AI Code Generation",
    href: "#",
  },
  {
    title: "Code Completion",
    href: "#",
  },
  {
    title: "Code Analysis",
    href: "#",
  },
];

const engines = [
  {
    title: "Language Models",
    href: "#",
  },
  {
    title: "Code Models",
    href: "#",
  },
];

const resources = [
  {
    title: "Documentation",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Community",
    href: "#",
  },
];

const company = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/codeium.svg"
              alt="Codeium"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white font-medium">codeium</span>
          </Link>

          {/* Navigation */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu className="text-white">
              <NavigationMenuList className="gap-1">
                {/* Products */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white">Products</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-0">
                    <ul className="w-[400px] p-4">
                      {products.map((product) => (
                        <li key={product.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={product.href}
                              className="block select-none rounded-md p-3 leading-none text-white no-underline outline-none transition-colors hover:bg-white/5"
                            >
                              {product.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Capabilities */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white">Capabilities</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-0">
                    <ul className="w-[400px] p-4">
                      {capabilities.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-3 leading-none text-white no-underline outline-none transition-colors hover:bg-white/5"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Engines */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white">Engines</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-0">
                    <ul className="w-[400px] p-4">
                      {engines.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-3 leading-none text-white no-underline outline-none transition-colors hover:bg-white/5"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Pricing */}
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#00FFB9] focus:text-[#00FFB9]">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Enterprise */}
                <NavigationMenuItem>
                  <Link href="/enterprise" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#00FFB9] focus:text-[#00FFB9]">
                      Enterprise
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-0">
                    <ul className="w-[400px] p-4">
                      {resources.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-3 leading-none text-white no-underline outline-none transition-colors hover:bg-white/5"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Company */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white">Company</NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-0">
                    <ul className="w-[400px] p-4">
                      {company.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-3 leading-none text-white no-underline outline-none transition-colors hover:bg-white/5"
                            >
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link 
              href="/profile"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors text-sm border border-white/40"
            >
              S
            </Link>
            <ShimmerButton size="sm">Download</ShimmerButton>
          </div>
        </div>
      </div>
    </header>
  );
} 