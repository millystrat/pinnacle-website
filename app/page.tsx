import { Nav } from "@/components/nav";
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";
import { Services } from "@/components/services";
import { Pricing } from "@/components/pricing";
import { WhyUs } from "@/components/why-us";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <HeroSection distortion={1.2} speed={0.8} />
        <Services />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
