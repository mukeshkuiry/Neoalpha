import Navbar from "@/components/Dashboard/Navbar";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-[#f3e8ff] to-[#f4f6f9] px-2 lg:px-10 text-black min-h-screen">
      <Navbar />
      {props.children}
    </div>
  );
}
