"use client";

import React, { useState, useEffect } from "react";
import Icon from "@/src/components/ui/AppIcon";

interface MarketStat {
  id: number;
  label: string;
  value: string;
  change: string;
  changePositive: boolean;
  icon: string;
}

interface TrendingArea {
  id: number;
  name: string;
  growth: string;
  avgPrice: string;
}

const MarketPulse = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"stats" | "trending">("stats");

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const marketStats: MarketStat[] = [
    {
      id: 1,
      label: "Median Home Price",
      value: "$685,000",
      change: "+5.2%",
      changePositive: true,
      icon: "HomeIcon",
    },
    {
      id: 2,
      label: "Active Listings",
      value: "12,847",
      change: "-3.8%",
      changePositive: false,
      icon: "BuildingOfficeIcon",
    },
    {
      id: 3,
      label: "Avg. Days on Market",
      value: "28 days",
      change: "-12%",
      changePositive: true,
      icon: "ClockIcon",
    },
    {
      id: 4,
      label: "Price per Sq Ft",
      value: "$425",
      change: "+7.1%",
      changePositive: true,
      icon: "Square3Stack3DIcon",
    },
  ];

  const trendingAreas: TrendingArea[] = [
    { id: 1, name: "Silicon Valley", growth: "+18.5%", avgPrice: "$1.8M" },
    { id: 2, name: "Austin Metro", growth: "+16.2%", avgPrice: "$625K" },
    { id: 3, name: "Miami Beach", growth: "+14.8%", avgPrice: "$890K" },
    { id: 4, name: "Denver Highlands", growth: "+13.4%", avgPrice: "$745K" },
    { id: 5, name: "Portland Downtown", growth: "+11.9%", avgPrice: "$580K" },
  ];

  if (!isHydrated) {
    return (
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 bg-background rounded-lg animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Market Pulse
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time market insights and trending areas to guide your property
            decisions
          </p>
        </div>

        <div className="bg-background rounded-lg shadow-card p-6 lg:p-8">
          <div className="flex border-b border-border mb-8">
            <button
              onClick={() => setSelectedTab("stats")}
              className={`px-6 py-3 font-cta font-medium transition-all duration-300 ${
                selectedTab === "stats"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Market Statistics
            </button>
            <button
              onClick={() => setSelectedTab("trending")}
              className={`px-6 py-3 font-cta font-medium transition-all duration-300 ${
                selectedTab === "trending"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Trending Areas
            </button>
          </div>

          {selectedTab === "stats" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketStats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon
                        name={stat.icon as any}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    <span
                      className={`text-sm font-cta font-semibold flex items-center ${
                        stat.changePositive ? "text-brand-green" : "text-error"
                      }`}
                    >
                      <Icon
                        name={
                          stat.changePositive
                            ? "ArrowTrendingUpIcon"
                            : "ArrowTrendingDownIcon"
                        }
                        size={16}
                        className="mr-1"
                      />
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-cta font-semibold text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {selectedTab === "trending" && (
            <div className="space-y-4">
              {trendingAreas.map((area, index) => (
                <div
                  key={area.id}
                  className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-brand-amber/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-cta font-semibold text-brand-amber">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-cta font-semibold text-foreground">
                        {area.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Avg. Price: {area.avgPrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-cta font-semibold text-brand-green flex items-center">
                      <Icon
                        name="ArrowTrendingUpIcon"
                        size={20}
                        className="mr-1"
                      />
                      {area.growth}
                    </span>
                    <Icon
                      name="ChevronRightIcon"
                      size={20}
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <p className="text-sm text-muted-foreground">
                Data updated: January 7, 2026 at 1:30 PM PST
              </p>
              <button className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md font-cta font-medium text-sm transition-all duration-300 inline-flex items-center space-x-2">
                <Icon name="ChartBarIcon" size={18} />
                <span>View Full Market Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPulse;
