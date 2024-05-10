import About from "@/components/About";
import Benifits from "@/components/Benifits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Protocols from "@/components/Protocols";
import Strategy from "@/components/Strategy";

export default function Home() {
  return (
    <div className="px-52">
      <Navbar />
      <Hero />
      <About />
      <Benifits/>
      <Protocols/>
      <Strategy/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
