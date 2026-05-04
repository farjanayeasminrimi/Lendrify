import Featured from "@/components/HomePage/Featured";
import Hero from "@/components/HomePage/Hero";
import MarqueeText from "@/components/Shared/MarqueeText";

export default function Home() {
  return (
    <div className="my-12 py-10">
      {/* Hero Section */}
      <Hero></Hero>
      <MarqueeText></MarqueeText>
      {/* Featured Section */}
      <Featured></Featured>
    </div>
  );
}
