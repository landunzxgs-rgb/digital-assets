import FreeResources from "../components/FreeResources";
import FeaturedKnowledge from "../components/FeaturedKnowledge";
import CaseStudy from "../components/CaseStudy";
 
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChoose from "../components/home/WhyChoose";
 
 

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />
      <Hero />
      <WhyChoose />
      <CaseStudy />
      <FreeResources />
      <FeaturedKnowledge />
       
      
    </main>
  );
}