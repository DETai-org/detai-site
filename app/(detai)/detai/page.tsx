import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DetaiHero from "@/components/sections/DetaiHero";
import DetaiPlatformSection from "@/components/sections/DetaiPlatformSection";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <DetaiHero />
        <DetaiPlatformSection />
      </main>
      <Footer />
    </div>
  );
}
