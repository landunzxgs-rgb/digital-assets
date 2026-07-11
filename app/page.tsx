import CTA from "../components/home/CTA";
 import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChoose from "../components/home/WhyChoose";
import ToolsSection from "../components/home/ToolsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />
      <Hero />
      <WhyChoose />
      <ToolsSection />
      <CTA />
      <Footer />
    </main>
  );
}