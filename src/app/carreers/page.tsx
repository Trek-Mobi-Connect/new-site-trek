import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkWithUs from "@/components/carreers/WorkWithUs";
import Websites from "@/components/Websites";
import Apps from "@/components/Apps";

export default function CarrersPage() {
  return (
    <>
      <Navbar />
      <WorkWithUs />
      <Websites />
      <Apps />
      <Footer />
    </>
  );
}