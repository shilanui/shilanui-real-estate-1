"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Icon from "@/src/components/ui/AppIcon";

interface ChartDataPoint {
  month: string;
  medianPrice: number;
  averagePrice: number;
  listingVolume: number;
}

interface PriceTrendChartProps {
  data: ChartDataPoint[];
}

const PriceTrendChart: React.FC<PriceTrendChartProps> = ({ data }) => {
  const [timeRange, setTimeRange] = useState<"6M" | "1Y" | "2Y" | "5Y">("1Y");
  const [chartType, setChartType] = useState<"line" | "area">("area");

  const timeRanges = [
    { label: "6 Months", value: "6M" as const },
    { label: "1 Year", value: "1Y" as const },
    { label: "2 Years", value: "2Y" as const },
    { label: "5 Years", value: "5Y" as const },
  ];

  const formatPrice = (value: number) => {
    return `$${(value / 1000).toFixed(0)}K`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-4 shadow-elevated">
          <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4 mb-1"
            >
              <span className="text-xs text-muted-foreground">
                {entry.name}:
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: entry.color }}
              >
                {entry.name === "Listing Volume"
                  ? entry.value.toLocaleString()
                  : formatPrice(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl font-headline font-semibold text-foreground mb-1">
            Price Trend Analysis
          </h2>
          <p className="text-sm text-muted-foreground">
            Historical price movements and market activity
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-3 py-1.5 rounded-md text-xs font-cta font-medium transition-all duration-200 ${
                  timeRange === range.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
            <button
              onClick={() => setChartType("area")}
              className={`p-2 rounded-md transition-all duration-200 ${
                chartType === "area"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Area chart"
            >
              <Icon name="ChartBarIcon" size={16} />
            </button>
            <button
              onClick={() => setChartType("line")}
              className={`p-2 rounded-md transition-all duration-200 ${
                chartType === "line"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Line chart"
            >
              <Icon name="ChartBarSquareIcon" size={16} />
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full h-80"
        aria-label="Price trend chart showing median and average prices over time"
      >
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "area" ? (
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorMedian" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2B4C7E" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2B4C7E" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2C5F7C" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2C5F7C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E9F0" />
              <XAxis
                dataKey="month"
                stroke="#5A6B7D"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                tickFormatter={formatPrice}
                stroke="#5A6B7D"
                style={{ fontSize: "12px" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Area
                type="monotone"
                dataKey="medianPrice"
                name="Median Price"
                stroke="#2B4C7E"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorMedian)"
              />
              <Area
                type="monotone"
                dataKey="averagePrice"
                name="Average Price"
                stroke="#2C5F7C"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorAverage)"
              />
            </AreaChart>
          ) : (
            <LineChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E9F0" />
              <XAxis
                dataKey="month"
                stroke="#5A6B7D"
                style={{ fontSize: "12px" }}
              />
              <YAxis
                tickFormatter={formatPrice}
                stroke="#5A6B7D"
                style={{ fontSize: "12px" }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Line
                type="monotone"
                dataKey="medianPrice"
                name="Median Price"
                stroke="#2B4C7E"
                strokeWidth={2}
                dot={{ fill: "#2B4C7E", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="averagePrice"
                name="Average Price"
                stroke="#2C5F7C"
                strokeWidth={2}
                dot={{ fill: "#2C5F7C", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceTrendChart;
