"use client";

import React, { useState } from "react";
import Icon from "@/src/components/ui/AppIcon";

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

interface MarketReportsProps {
  reports: Report[];
}

const MarketReports: React.FC<MarketReportsProps> = ({ reports }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(reports.map((r) => r.category))),
  ];

  const filteredReports =
    selectedCategory === "all"
      ? reports
      : reports.filter((r) => r.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "quarterly":
        return "CalendarIcon";
      case "annual":
        return "DocumentChartBarIcon";
      case "forecast":
        return "ChartBarSquareIcon";
      case "neighborhood":
        return "MapIcon";
      default:
        return "DocumentTextIcon";
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl font-headline font-semibold text-foreground mb-1">
            Market Reports & Analysis
          </h2>
          <p className="text-sm text-muted-foreground">
            Comprehensive insights and trend forecasts
          </p>
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-md text-xs font-cta font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className={`bg-background border rounded-lg p-5 hover:shadow-elevated transition-shadow duration-300 ${
              report.featured ? "border-accent" : "border-border"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-start space-x-4 flex-1">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon
                    name={getCategoryIcon(report.category) as any}
                    size={24}
                    className="text-primary"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-base font-cta font-semibold text-foreground">
                      {report.title}
                    </h3>
                    {report.featured && (
                      <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-semibold rounded-md">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {report.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="CalendarIcon" size={14} />
                      <span>{report.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="DocumentTextIcon" size={14} />
                      <span>{report.pages} pages</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="ArrowDownTrayIcon" size={14} />
                      <span>
                        {report.downloadCount.toLocaleString()} downloads
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-cta font-semibold text-sm hover:bg-primary/90 transition-colors duration-200 flex items-center space-x-2 whitespace-nowrap">
                <Icon name="ArrowDownTrayIcon" size={16} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="text-center py-12">
          <Icon
            name="DocumentTextIcon"
            size={48}
            className="text-muted-foreground mx-auto mb-4"
          />
          <p className="text-muted-foreground">
            No reports available in this category
          </p>
        </div>
      )}
    </div>
  );
};

export default MarketReports;
