"use client";

import React, { useState, useEffect } from "react";
import MarketOverviewCard from "./MarketOverviewCard";
import PriceTrendChart from "./PriceTrendChart";
import NeighborhoodHeatMap from "./NeighborhoodHeatMap";
import InvestmentOpportunities from "./InvestmentOpportunities";
import MarketReports from "./MarketReports";
import EconomicIndicators from "./EconomicIndicators";

interface MarketMetric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: string;
}

interface ChartDataPoint {
  month: string;
  medianPrice: number;
  averagePrice: number;
  listingVolume: number;
}

interface NeighborhoodData {
  name: string;
  medianPrice: number;
  priceChange: number;
  inventory: number;
  daysOnMarket: number;
  hotness: "hot" | "warm" | "cool" | "cold";
}

interface Opportunity {
  id: number;
  title: string;
  location: string;
  image: string;
  alt: string;
  currentPrice: number;
  projectedROI: number;
  appreciationRate: number;
  rentalYield: number;
  marketScore: number;
  tags: string[];
}

interface Report {
  id: number;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  pages: number;
  downloadCount: number;
  featured: boolean;
}

interface Indicator {
  name: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  impact: "positive" | "negative" | "neutral";
  description: string;
}

const MarketIntelligenceInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const marketMetrics: MarketMetric[] = [
    {
      label: "Median Home Price",
      value: "$485,000",
      change: "+5.2%",
      trend: "up",
      icon: "HomeIcon",
    },
    {
      label: "Active Listings",
      value: "12,847",
      change: "-8.3%",
      trend: "down",
      icon: "BuildingOfficeIcon",
    },
    {
      label: "Days on Market",
      value: "32 days",
      change: "-12.5%",
      trend: "down",
      icon: "ClockIcon",
    },
    {
      label: "Price per Sq Ft",
      value: "$285",
      change: "+3.8%",
      trend: "up",
      icon: "ChartBarIcon",
    },
  ];

  const chartData: ChartDataPoint[] = [
    {
      month: "Jan 2025",
      medianPrice: 465000,
      averagePrice: 492000,
      listingVolume: 1250,
    },
    {
      month: "Feb 2025",
      medianPrice: 468000,
      averagePrice: 495000,
      listingVolume: 1180,
    },
    {
      month: "Mar 2025",
      medianPrice: 472000,
      averagePrice: 498000,
      listingVolume: 1320,
    },
    {
      month: "Apr 2025",
      medianPrice: 475000,
      averagePrice: 502000,
      listingVolume: 1450,
    },
    {
      month: "May 2025",
      medianPrice: 478000,
      averagePrice: 505000,
      listingVolume: 1580,
    },
    {
      month: "Jun 2025",
      medianPrice: 480000,
      averagePrice: 508000,
      listingVolume: 1620,
    },
    {
      month: "Jul 2025",
      medianPrice: 482000,
      averagePrice: 510000,
      listingVolume: 1550,
    },
    {
      month: "Aug 2025",
      medianPrice: 483000,
      averagePrice: 512000,
      listingVolume: 1480,
    },
    {
      month: "Sep 2025",
      medianPrice: 484000,
      averagePrice: 514000,
      listingVolume: 1420,
    },
    {
      month: "Oct 2025",
      medianPrice: 485000,
      averagePrice: 516000,
      listingVolume: 1380,
    },
    {
      month: "Nov 2025",
      medianPrice: 485000,
      averagePrice: 517000,
      listingVolume: 1290,
    },
    {
      month: "Dec 2025",
      medianPrice: 485000,
      averagePrice: 518000,
      listingVolume: 1150,
    },
  ];

  const neighborhoods: NeighborhoodData[] = [
    {
      name: "Downtown District",
      medianPrice: 625000,
      priceChange: 8.5,
      inventory: 145,
      daysOnMarket: 18,
      hotness: "hot",
    },
    {
      name: "Riverside Heights",
      medianPrice: 485000,
      priceChange: 6.2,
      inventory: 287,
      daysOnMarket: 25,
      hotness: "hot",
    },
    {
      name: "Oakwood Estates",
      medianPrice: 395000,
      priceChange: 4.8,
      inventory: 412,
      daysOnMarket: 32,
      hotness: "warm",
    },
    {
      name: "Sunset Valley",
      medianPrice: 525000,
      priceChange: 5.5,
      inventory: 198,
      daysOnMarket: 28,
      hotness: "warm",
    },
    {
      name: "Maple Grove",
      medianPrice: 365000,
      priceChange: 2.3,
      inventory: 523,
      daysOnMarket: 45,
      hotness: "cool",
    },
    {
      name: "Harbor View",
      medianPrice: 725000,
      priceChange: 7.8,
      inventory: 89,
      daysOnMarket: 15,
      hotness: "hot",
    },
    {
      name: "Parkside Commons",
      medianPrice: 425000,
      priceChange: 3.5,
      inventory: 356,
      daysOnMarket: 38,
      hotness: "cool",
    },
    {
      name: "Hillcrest Manor",
      medianPrice: 295000,
      priceChange: 1.2,
      inventory: 678,
      daysOnMarket: 58,
      hotness: "cold",
    },
    {
      name: "Tech Corridor",
      medianPrice: 685000,
      priceChange: 9.2,
      inventory: 112,
      daysOnMarket: 12,
      hotness: "hot",
    },
  ];

  const opportunities: Opportunity[] = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1641029494872-a598874aaaab",
      alt: "Modern high-rise condominium building with glass facade and balconies in downtown urban setting",
      currentPrice: 425000,
      projectedROI: 18.5,
      appreciationRate: 8.2,
      rentalYield: 5.8,
      marketScore: 9.2,
      tags: ["appreciation", "rental", "urban"],
    },
    {
      id: 2,
      title: "Riverside Investment Property",
      location: "Riverside Heights",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_170269a72-1766971533526.png",
      alt: "Contemporary two-story residential home with white exterior and landscaped front yard near waterfront",
      currentPrice: 385000,
      projectedROI: 22.3,
      appreciationRate: 9.5,
      rentalYield: 6.2,
      marketScore: 8.8,
      tags: ["high-growth", "rental", "waterfront"],
    },
    {
      id: 3,
      title: "Tech Corridor Townhouse",
      location: "Tech Corridor",
      image: "https://images.unsplash.com/photo-1664056405509-d6472dd61705",
      alt: "Modern townhouse row with brick and stone facade in technology district neighborhood",
      currentPrice: 565000,
      projectedROI: 16.8,
      appreciationRate: 7.8,
      rentalYield: 5.2,
      marketScore: 8.5,
      tags: ["appreciation", "tech-hub", "commuter"],
    },
    {
      id: 4,
      title: "Harbor View Luxury Unit",
      location: "Harbor View",
      image: "https://images.unsplash.com/photo-1536840974014-bc63f640d74e",
      alt: "Luxury waterfront apartment building with marina views and premium amenities",
      currentPrice: 685000,
      projectedROI: 15.2,
      appreciationRate: 6.8,
      rentalYield: 4.5,
      marketScore: 9.0,
      tags: ["luxury", "waterfront", "appreciation"],
    },
  ];

  const reports: Report[] = [
    {
      id: 1,
      title: "Q4 2025 Market Performance Report",
      description:
        "Comprehensive analysis of market trends, price movements, and transaction volumes across all major neighborhoods. Includes year-over-year comparisons and forward-looking projections for Q1 2026.",
      category: "quarterly",
      publishDate: "December 15, 2025",
      pages: 42,
      downloadCount: 3847,
      featured: true,
    },
    {
      id: 2,
      title: "2026 Real Estate Market Forecast",
      description:
        "Expert predictions and data-driven insights into expected market conditions, interest rate impacts, and investment opportunities for the upcoming year. Features scenario analysis and risk assessments.",
      category: "forecast",
      publishDate: "December 1, 2025",
      pages: 58,
      downloadCount: 5234,
      featured: true,
    },
    {
      id: 3,
      title: "Downtown District Neighborhood Analysis",
      description:
        "Deep dive into the Downtown District market dynamics, including demographic trends, development pipeline, and comparative pricing analysis. Essential reading for urban investors.",
      category: "neighborhood",
      publishDate: "November 20, 2025",
      pages: 35,
      downloadCount: 2156,
      featured: false,
    },
    {
      id: 4,
      title: "Annual Market Review 2025",
      description:
        "Complete retrospective of the 2025 real estate market performance, highlighting key trends, major transactions, and market-moving events. Includes comprehensive statistical appendix.",
      category: "annual",
      publishDate: "December 28, 2025",
      pages: 78,
      downloadCount: 6892,
      featured: true,
    },
    {
      id: 5,
      title: "Tech Corridor Investment Guide",
      description:
        "Specialized analysis of the rapidly growing Tech Corridor area, examining employment growth, infrastructure development, and property appreciation patterns. Includes ROI case studies.",
      category: "neighborhood",
      publishDate: "November 5, 2025",
      pages: 28,
      downloadCount: 1823,
      featured: false,
    },
  ];

  const indicators: Indicator[] = [
    {
      name: "Mortgage Interest Rates",
      value: "6.85%",
      change: "-0.25%",
      trend: "down",
      impact: "positive",
      description:
        "Average 30-year fixed mortgage rate, affecting buyer affordability and demand",
    },
    {
      name: "Employment Growth",
      value: "+3.2%",
      change: "+0.8%",
      trend: "up",
      impact: "positive",
      description:
        "Year-over-year job growth in the metropolitan area, driving housing demand",
    },
    {
      name: "Housing Inventory",
      value: "2.8 months",
      change: "-0.4 months",
      trend: "down",
      impact: "negative",
      description:
        "Months of supply at current sales pace, indicating market tightness",
    },
    {
      name: "Construction Permits",
      value: "1,245",
      change: "+12.5%",
      trend: "up",
      impact: "neutral",
      description:
        "New residential building permits issued, affecting future supply",
    },
    {
      name: "Consumer Confidence",
      value: "108.5",
      change: "+2.3",
      trend: "up",
      impact: "positive",
      description:
        "Consumer sentiment index, reflecting buyer willingness to make major purchases",
    },
    {
      name: "Rental Vacancy Rate",
      value: "4.2%",
      change: "-0.6%",
      trend: "down",
      impact: "positive",
      description:
        "Percentage of vacant rental units, indicating rental market strength",
    },
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16" />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-32 bg-muted rounded-lg" />
            <div className="h-96 bg-muted rounded-lg" />
            <div className="h-64 bg-muted rounded-lg" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <MarketOverviewCard metrics={marketMetrics} />
      <PriceTrendChart data={chartData} />
      <NeighborhoodHeatMap neighborhoods={neighborhoods} />
      <InvestmentOpportunities opportunities={opportunities} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MarketReports reports={reports} />
        </div>
        <div className="lg:col-span-1">
          <EconomicIndicators indicators={indicators} />
        </div>
      </div>
    </div>
  );
};

export default MarketIntelligenceInteractive;
