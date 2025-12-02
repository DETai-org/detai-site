import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AudienceSection from "../components/sections/AudienceSection";
import DetToDetaiBridge from "../components/sections/DetToDetaiBridge";
import DetDetaiSplit from "../components/sections/DetDetaiSplit";
import FundamentDetSection from "../components/sections/FundamentDetSection";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import Projects from "../components/sections/Projects";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-basic-light text-basic-dark">
      <Header />
      <main className="flex flex-1 flex-col gap-0">
        <Hero />
        <DetToDetaiBridge />
        <DetDetaiSplit />
        <AudienceSection />
        <Projects />
        <FundamentDetSection />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}
