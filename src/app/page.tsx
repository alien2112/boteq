import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { ContactSection } from "@/components/sections/ContactSection";
import { VisualServices } from "@/components/sections/VisualServices";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Hero />
      <Services />
      <VisualServices />
      <Gallery />
      <ContactSection />
    </main>
  );
}
