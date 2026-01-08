import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  trend,
  color,
}) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevated transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color} mb-4`}
          >
            <Icon name={icon as any} size={24} className="text-white" />
          </div>
          <p className="text-sm font-body text-muted-foreground mb-1">
            {label}
          </p>
          <p className="text-3xl font-headline font-semibold text-foreground">
            {value}
          </p>
          {trend && (
            <div className="flex items-center mt-2 space-x-1">
              <Icon
                name={
                  trend.isPositive
                    ? "ArrowTrendingUpIcon"
                    : "ArrowTrendingDownIcon"
                }
                size={16}
                className={trend.isPositive ? "text-success" : "text-error"}
              />
              <span
                className={`text-sm font-medium ${trend.isPositive ? "text-success" : "text-error"}`}
              >
                {trend.value}
              </span>
              <span className="text-sm text-muted-foreground">
                vs last month
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface DashboardStatsProps {
  stats: StatCardProps[];
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;
