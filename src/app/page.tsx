// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/HomeAbout";
import Websites from "@/components/Websites";
import Apps from "@/components/Apps";
import Carreers from "@/components/Carreers";
import Footer from "@/components/Footer";
import HighlightsMarquee from "@/components/HighlightsMarquee";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Websites />
      <HighlightsMarquee />
      <Apps />
      <Carreers />
      <Footer />
    </>
  );
}
