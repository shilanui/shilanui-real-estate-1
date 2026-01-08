import type { Metadata } from "next";
import Header from "@/src/components/common/Header";
import MarketIntelligenceInteractive from "./components/MarketIntelligenceInteractive";

export const metadata: Metadata = {
  title: "Market Intelligence - Shilanui-real-estate",
  description:
    "Access real-time market data, price trends, and investment analysis tools. Make informed real estate decisions with comprehensive market insights and neighborhood analytics.",
};

export default function MarketIntelligencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="h-16" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-headline font-semibold text-foreground mb-3">
            Market Intelligence Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Real-time market data, comprehensive analytics, and investment
            insights to guide your property decisions with confidence and
            clarity.
          </p>
        </div>

        <MarketIntelligenceInteractive />
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Shilanui-real-estate. All rights
              reserved. Market data updated in real-time from verified sources.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
