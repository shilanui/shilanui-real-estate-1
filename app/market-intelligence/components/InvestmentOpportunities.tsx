"use client";

import React, { useState } from "react";
import Icon from "@/src/components/ui/AppIcon";
import AppImage from "@/src/components/ui/AppImage";

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

interface InvestmentOpportunitiesProps {
  opportunities: Opportunity[];
}

const InvestmentOpportunities: React.FC<InvestmentOpportunitiesProps> = ({
  opportunities,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const allTags = [
    "all",
    ...Array.from(new Set(opportunities.flatMap((o) => o.tags))),
  ];

  const filteredOpportunities =
    selectedTag === "all"
      ? opportunities
      : opportunities.filter((o) => o.tags.includes(selectedTag));

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-brand-green bg-brand-green/10";
    if (score >= 6) return "text-brand-blue bg-brand-blue/10";
    return "text-warning bg-warning/10";
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl font-headline font-semibold text-foreground mb-1">
            Investment Opportunities
          </h2>
          <p className="text-sm text-muted-foreground">
            High-potential properties based on market analysis
          </p>
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-md text-xs font-cta font-medium whitespace-nowrap transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredOpportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <AppImage
                src={opportunity.image}
                alt={opportunity.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 flex items-center space-x-2">
                <span
                  className={`px-3 py-1 rounded-md text-xs font-semibold ${getScoreColor(
                    opportunity.marketScore
                  )}`}
                >
                  Score: {opportunity.marketScore}/10
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-4">
                <h3 className="text-lg font-cta font-semibold text-foreground mb-1">
                  {opportunity.title}
                </h3>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Icon name="MapPinIcon" size={14} />
                  <span>{opportunity.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Current Price
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    ${opportunity.currentPrice.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Projected ROI
                  </p>
                  <p className="text-base font-semibold text-brand-green">
                    {opportunity.projectedROI}%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Appreciation Rate
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {opportunity.appreciationRate}%/yr
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Rental Yield
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {opportunity.rentalYield}%
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {opportunity.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full px-4 py-2.5 bg-brand-amber text-brand-amber-foreground rounded-md font-cta font-semibold text-sm hover:bg-brand-amber/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="ChartBarIcon" size={16} />
                <span>View Full Analysis</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="text-center py-12">
          <Icon
            name="BuildingOfficeIcon"
            size={48}
            className="text-muted-foreground mx-auto mb-4"
          />
          <p className="text-muted-foreground">
            No opportunities match your selected criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default InvestmentOpportunities;
