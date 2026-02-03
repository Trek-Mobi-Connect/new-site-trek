import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Websites from "@/components/Websites";
import Apps from "@/components/Apps";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Websites />
      <Apps />
      <Footer />
    </>
  );
}