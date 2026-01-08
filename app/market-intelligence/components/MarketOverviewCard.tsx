import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface MarketMetric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: string;
}

interface MarketOverviewCardProps {
  metrics: MarketMetric[];
}

const MarketOverviewCard: React.FC<MarketOverviewCardProps> = ({ metrics }) => {
  const getTrendColor = (trend: "up" | "down" | "neutral") => {
    switch (trend) {
      case "up":
        return "text-brand-green";
      case "down":
        return "text-error";
      default:
        return "text-muted-foreground";
    }
  };

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Icon
                name={metric.icon as any}
                size={24}
                className="text-primary"
              />
            </div>
            <div
              className={`flex items-center space-x-1 ${getTrendColor(metric.trend)}`}
            >
              <Icon name={getTrendIcon(metric.trend) as any} size={16} />
              <span className="text-sm font-semibold">{metric.change}</span>
            </div>
          </div>
          <h3 className="text-2xl font-headline font-semibold text-foreground mb-1">
            {metric.value}
          </h3>
          <p className="text-sm text-muted-foreground">{metric.label}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketOverviewCard;
