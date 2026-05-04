import Featured from "@/components/HomePage/Featured";
import Hero from "@/components/HomePage/Hero";

export default function Home() {
  return (
    <div className="my-12 py-10">
      {/* Hero Section */}
      <Hero></Hero>
      {/* Featured Section */}
      <Featured></Featured>
    </div>
  );
}
