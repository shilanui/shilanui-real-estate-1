import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface Indicator {
  name: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  impact: "positive" | "negative" | "neutral";
  description: string;
}

interface EconomicIndicatorsProps {
  indicators: Indicator[];
}

const EconomicIndicators: React.FC<EconomicIndicatorsProps> = ({
  indicators,
}) => {
  const getTrendIcon = (trend: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up":
        return "ArrowTrendingUpIcon";
      case "down":
        return "ArrowTrendingDownIcon";
      default:
        return "MinusIcon";
    }
  };

  const getImpactColor = (impact: "positive" | "negative" | "neutral") => {
    switch (impact) {
      case "positive":
        return "text-brand-green";
      case "negative":
        return "text-error";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="mb-6">
        <h2 className="text-xl font-headline font-semibold text-foreground mb-1">
          Economic Indicators
        </h2>
        <p className="text-sm text-muted-foreground">
          Key factors affecting the real estate market
        </p>
      </div>

      <div className="space-y-4">
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className="bg-background border border-border rounded-lg p-4 hover:shadow-sm transition-shadow duration-300"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-base font-cta font-semibold text-foreground mb-1">
                  {indicator.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {indicator.description}
                </p>
              </div>
              <div
                className={`flex items-center space-x-1 ml-4 ${getImpactColor(indicator.impact)}`}
              >
                <Icon name={getTrendIcon(indicator.trend) as any} size={16} />
                <span className="text-sm font-semibold">
                  {indicator.change}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <span className="text-xs text-muted-foreground">
                Current Value
              </span>
              <span className="text-base font-semibold text-foreground">
                {indicator.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EconomicIndicators;
