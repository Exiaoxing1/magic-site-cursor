import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { EditorShowcase } from '@/components/EditorShowcase';
import { EnterpriseShowcase } from '@/components/EnterpriseShowcase';
import { ProductComparison } from '@/components/ProductComparison';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';
import { DiscoverMore } from '@/components/DiscoverMore';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EditorShowcase />
        <EnterpriseShowcase />
        <ProductComparison />
        <Testimonials />
        <CTASection />
        <DiscoverMore />
      </main>
      <Footer />
    </div>
  );
}
