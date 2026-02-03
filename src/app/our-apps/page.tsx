import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurApps from "@/components/our-apps/OurApps";
import AppsDetail from "@/components/our-apps/AppsDetail";
import Websites from "@/components/Websites";

export default function OurAppsPage() {
  return (
    <>
      <Navbar />
      <OurApps />
      <AppsDetail />
      <Websites />
      <Footer />
    </>
  );
}