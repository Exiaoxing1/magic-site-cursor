import Link from 'next/link';
import Image from 'next/image';

interface SparklesTextProps {
  children: React.ReactNode;
  className?: string;
}

function SparklesText({ children, className = "" }: SparklesTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 animate-sparkle bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function AnimatedGradientText({ children, className = "" }: SparklesTextProps) {
  return (
    <span className={`bg-gradient-to-r from-[#00FFB9] via-[#9c40ff] to-[#00FFB9] bg-[200%_auto] animate-gradient-x bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

function BorderBeam({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group">
      {/* Border gradient container */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FFB9] via-[#9c40ff] to-[#00FFB9] rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      {/* Content container */}
      <div className="relative bg-black rounded-2xl">
        {children}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <SparklesText className="text-sm sm:text-base text-gray-400 mb-6">
          From the creators of Codeium, the best AI-powered code extension
        </SparklesText>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Introducing the{' '}
          <AnimatedGradientText>
            Windsurf Editor
          </AnimatedGradientText>
        </h1>
        
        <SparklesText className="text-xl sm:text-2xl text-gray-300 mb-12">
          The new purpose-built IDE to harness magic
        </SparklesText>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/explore"
            className="px-8 py-4 bg-[#00FFB9] text-black rounded-full text-lg font-medium hover:bg-[#00FFB9]/90 transition-colors"
          >
            Explore Windsurf
          </Link>
          <Link
            href="/extensions"
            className="px-8 py-4 bg-white/10 text-white rounded-full text-lg font-medium hover:bg-white/20 transition-colors border border-white/20"
          >
            Codeium Extensions
          </Link>
        </div>

        <div className="mt-20">
          <BorderBeam>
            <Image
              src="https://exafunction.github.io/public/images/windsurf/windsurf-ide.png"
              alt="Windsurf Editor Interface"
              width={1200}
              height={675}
              className="rounded-2xl"
              priority
            />
          </BorderBeam>
        </div>
      </div>
    </section>
  );
} 