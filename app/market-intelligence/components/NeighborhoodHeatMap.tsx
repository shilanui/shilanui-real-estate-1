"use client";

import React, { useState } from "react";
import Icon from "@/src/components/ui/AppIcon";

interface NeighborhoodData {
  name: string;
  medianPrice: number;
  priceChange: number;
  inventory: number;
  daysOnMarket: number;
  hotness: "hot" | "warm" | "cool" | "cold";
}

interface NeighborhoodHeatMapProps {
  neighborhoods: NeighborhoodData[];
}

const NeighborhoodHeatMap: React.FC<NeighborhoodHeatMapProps> = ({
  neighborhoods,
}) => {
  const [sortBy, setSortBy] = useState<
    "price" | "change" | "inventory" | "days"
  >("change");
  const [filterHotness, setFilterHotness] = useState<string>("all");

  const getHotnessColor = (hotness: string) => {
    switch (hotness) {
      case "hot":
        return "bg-error/10 text-error border-error/20";
      case "warm":
        return "bg-warning/10 text-warning border-warning/20";
      case "cool":
        return "bg-brand-blue/10 text-brand-blue border-brand-blue/20";
      case "cold":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getHotnessLabel = (hotness: string) => {
    switch (hotness) {
      case "hot":
        return "Hot Market";
      case "warm":
        return "Warm Market";
      case "cool":
        return "Cool Market";
      case "cold":
        return "Cold Market";
      default:
        return "Unknown";
    }
  };

  const sortedNeighborhoods = [...neighborhoods].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return b.medianPrice - a.medianPrice;
      case "change":
        return b.priceChange - a.priceChange;
      case "inventory":
        return b.inventory - a.inventory;
      case "days":
        return a.daysOnMarket - b.daysOnMarket;
      default:
        return 0;
    }
  });

  const filteredNeighborhoods =
    filterHotness === "all"
      ? sortedNeighborhoods
      : sortedNeighborhoods.filter((n) => n.hotness === filterHotness);

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl font-headline font-semibold text-foreground mb-1">
            Neighborhood Heat Map
          </h2>
          <p className="text-sm text-muted-foreground">
            Market activity and price trends by area
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-muted-foreground">
              Sort by:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 bg-muted border border-border rounded-md text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="change">Price Change</option>
              <option value="price">Median Price</option>
              <option value="inventory">Inventory</option>
              <option value="days">Days on Market</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-xs font-medium text-muted-foreground">
              Filter:
            </label>
            <select
              value={filterHotness}
              onChange={(e) => setFilterHotness(e.target.value)}
              className="px-3 py-1.5 bg-muted border border-border rounded-md text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Markets</option>
              <option value="hot">Hot Markets</option>
              <option value="warm">Warm Markets</option>
              <option value="cool">Cool Markets</option>
              <option value="cold">Cold Markets</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNeighborhoods.map((neighborhood, index) => (
          <div
            key={index}
            className="bg-background border border-border rounded-lg p-4 hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-base font-cta font-semibold text-foreground">
                {neighborhood.name}
              </h3>
              <span
                className={`px-2 py-1 rounded-md text-xs font-medium border ${getHotnessColor(
                  neighborhood.hotness
                )}`}
              >
                {getHotnessLabel(neighborhood.hotness)}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Median Price
                </span>
                <span className="text-sm font-semibold text-foreground">
                  ${neighborhood.medianPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Price Change
                </span>
                <div className="flex items-center space-x-1">
                  <Icon
                    name={
                      neighborhood.priceChange >= 0
                        ? "ArrowTrendingUpIcon"
                        : "ArrowTrendingDownIcon"
                    }
                    size={14}
                    className={
                      neighborhood.priceChange >= 0
                        ? "text-brand-green"
                        : "text-error"
                    }
                  />
                  <span
                    className={`text-sm font-semibold ${
                      neighborhood.priceChange >= 0
                        ? "text-brand-green"
                        : "text-error"
                    }`}
                  >
                    {neighborhood.priceChange > 0 ? "+" : ""}
                    {neighborhood.priceChange}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Active Listings
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {neighborhood.inventory}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Avg. Days on Market
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {neighborhood.daysOnMarket} days
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNeighborhoods.length === 0 && (
        <div className="text-center py-12">
          <Icon
            name="MapIcon"
            size={48}
            className="text-muted-foreground mx-auto mb-4"
          />
          <p className="text-muted-foreground">
            No neighborhoods match your filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default NeighborhoodHeatMap;
