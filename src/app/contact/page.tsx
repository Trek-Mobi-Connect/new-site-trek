import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Websites from "@/components/Websites";
import Apps from "@/components/our-apps/OurApps";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Websites />
      <Apps />
      <Footer />
    </>
  );
}