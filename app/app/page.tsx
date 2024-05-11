import Footer from "@/components/Dashboard/Footer";
import Indexes from "@/components/Dashboard/Indexes";
import Portfolio from "@/components/Dashboard/Portfolio";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center mt-8 lg:px-32">
      <Portfolio />
      <Indexes />
      <Footer />
    </div>
  );
}
