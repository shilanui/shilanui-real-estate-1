import type { Metadata } from "next";
import Header from "@/src/components/common/Header";
import HeroSection from "./homepage/components/HeroSection";
import FeaturedNeighborhoods from "./homepage/components/FeaturedNeighborhoods";
import MarketPulse from "./homepage/components/MarketPulse";
import SuccessStories from "./homepage/components/SuccessStories";
import QuickTools from "./homepage/components/QuickTools";
import AgentSpotlight from "./homepage/components/AgentSpotlight";
import Footer from "./homepage/components/Footer";

export const metadata: Metadata = {
  title: "Shilanui-real-estate - Your Property Journey, Intelligently Guided",
  description:
    "Discover your perfect home with AI-powered insights and comprehensive market intelligence. Shilanui-real-estate combines cutting-edge technology with local expertise for seamless property discovery.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturedNeighborhoods />
        <MarketPulse />
        <SuccessStories />
        <QuickTools />
        <AgentSpotlight />
      </main>
      <Footer />
    </div>
  );
}
