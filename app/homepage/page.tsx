import type { Metadata } from "next";
import Header from "@/src/components/common/Header";
import HeroSection from "./components/HeroSection";
import FeaturedNeighborhoods from "./components/FeaturedNeighborhoods";
import MarketPulse from "./components/MarketPulse";
import SuccessStories from "./components/SuccessStories";
import QuickTools from "./components/QuickTools";
import AgentSpotlight from "./components/AgentSpotlight";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Shilanui-real-estate - Your Property Journey, Intelligently Guided",
  description:
    "Discover your perfect home with AI-powered insights and comprehensive market intelligence. Shilanui-real-estate combines cutting-edge technology with local expertise for seamless property discovery.",
};

export default function Homepage() {
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
