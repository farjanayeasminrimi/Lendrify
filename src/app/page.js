import Featured from "@/components/HomePage/Featured";
import Footer from "@/components/HomePage/Footer";
import Hero from "@/components/HomePage/Hero";
import Latest from "@/components/HomePage/Latest";
import ReadyToStart from "@/components/HomePage/ReadyToStart";
import MarqueeText from "@/components/Shared/MarqueeText";

export default function Home() {
  return (
    <div className="mt-12 pt-10">
      {/* Hero Section */}
      <Hero></Hero>
      <MarqueeText></MarqueeText>
      {/* Featured Section */}
      <Featured></Featured>
      {/* Latest Books */}
      <Latest></Latest>
      {/* Start Section */}
      <ReadyToStart></ReadyToStart>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
