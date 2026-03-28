import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
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
        <Hero />
        <Services />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
