import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Powered from "@/components/Powered";
import Neural from "@/components/Neural";
import Solutions from "@/components/Solutions";
import Price from "@/components/Price";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Powered />
      <Neural />
      <Solutions />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
}
