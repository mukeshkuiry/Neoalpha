import About from "@/components/About";
import Benifits from "@/components/Benifits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Powered from "@/components/Powered";
import Protocols from "@/components/Protocols";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
      <div>
        <Navbar />
        <div className="px-10 md:px-16 lg:px-32">
          <Hero />
          <About />
          <Benifits />
          <Protocols />
          <Powered />
          {/* <Strategy /> */}
          <FAQ />
          <Footer />
        </div>
      </div>
  );
}
