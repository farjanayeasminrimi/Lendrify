import Featured from "@/components/HomePage/Featured";
import Hero from "@/components/HomePage/Hero";
import Latest from "@/components/HomePage/Latest";
import ReadyToStart from "@/components/HomePage/ReadyToStart";
import MarqueeText from "@/components/Shared/MarqueeText";

export default function Home() {
  return (
    <div className=" ">
      {/* Hero Section */}
      <Hero></Hero>
      <MarqueeText></MarqueeText>
      {/* Featured Section */}
      <Featured></Featured>
      {/* Latest Books */}
      <Latest></Latest>
      {/* Start Section */}
      <ReadyToStart></ReadyToStart>
    </div>
  );
}
