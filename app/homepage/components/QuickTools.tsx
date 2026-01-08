"use client";

import React, { useState, useEffect } from "react";
import Icon from "@/src/components/ui/AppIcon";

interface Tool {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const QuickTools = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const tools: Tool[] = [
    {
      id: 1,
      name: "Affordability Calculator",
      description:
        "Determine your budget based on income, debts, and down payment",
      icon: "CalculatorIcon",
      color: "bg-brand-blue",
    },
    {
      id: 2,
      name: "Mortgage Calculator",
      description: "Estimate monthly payments with taxes and insurance",
      icon: "CurrencyDollarIcon",
      color: "bg-brand-green",
    },
    {
      id: 3,
      name: "ROI Analyzer",
      description: "Calculate potential investment returns and cash flow",
      icon: "ChartBarIcon",
      color: "bg-brand-amber",
    },
    {
      id: 4,
      name: "Rent vs Buy",
      description: "Compare the financial impact of renting versus buying",
      icon: "ScaleIcon",
      color: "bg-primary",
    },
  ];

  if (!isHydrated) {
    return (
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-64 bg-background rounded-lg animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Quick Tools & Calculators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make informed decisions with our suite of financial planning tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="group bg-background rounded-lg p-6 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer border border-transparent hover:border-primary"
            >
              <div
                className={`w-14 h-14 ${tool.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon
                  name={tool.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                {tool.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {tool.description}
              </p>
              <button className="text-primary hover:text-primary/80 font-cta font-medium text-sm flex items-center space-x-1 transition-colors duration-300">
                <span>Try Calculator</span>
                <Icon name="ArrowRightIcon" size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-brand-teal rounded-lg p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-headline font-semibold text-white mb-4">
            Need Personalized Financial Guidance?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Connect with our certified financial advisors for customized
            property investment strategies
          </p>
          <button className="px-8 py-3 bg-white hover:bg-white/90 text-primary rounded-md font-cta font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center space-x-2">
            <Icon name="UserGroupIcon" size={20} />
            <span>Schedule Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickTools;
