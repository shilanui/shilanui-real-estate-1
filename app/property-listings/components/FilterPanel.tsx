"use client";

import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface FilterPanelProps {
  filters: {
    priceRange: [number, number];
    propertyType: string;
    bedrooms: string;
    bathrooms: string;
    minArea: string;
    maxArea: string;
  };
  onFilterChange: (key: string, value: any) => void;
  onReset: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
  onReset,
}) => {
  const propertyTypes = [
    "All Types",
    "House",
    "Apartment",
    "Condo",
    "Townhouse",
    "Villa",
  ];
  const bedroomOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];
  const bathroomOptions = ["Any", "1+", "2+", "3+", "4+"];

  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-headline font-semibold text-primary">
          Filters
        </h3>
        <button
          onClick={onReset}
          className="text-sm font-cta font-medium text-brand-blue hover:text-brand-blue/80 transition-colors duration-300"
        >
          Reset All
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-cta font-medium text-foreground mb-3">
            Price Range
          </label>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${filters.priceRange[0].toLocaleString()}</span>
              <span>${filters.priceRange[1].toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5000000"
              step="50000"
              value={filters.priceRange[1]}
              onChange={(e) =>
                onFilterChange("priceRange", [
                  filters.priceRange[0],
                  parseInt(e.target.value),
                ])
              }
              className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-brand-blue"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-cta font-medium text-foreground mb-3">
            Property Type
          </label>
          <select
            value={filters.propertyType}
            onChange={(e) => onFilterChange("propertyType", e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all duration-300"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-cta font-medium text-foreground mb-3">
            Bedrooms
          </label>
          <div className="grid grid-cols-3 gap-2">
            {bedroomOptions.map((option) => (
              <button
                key={option}
                onClick={() => onFilterChange("bedrooms", option)}
                className={`px-3 py-2 rounded-md text-sm font-cta font-medium transition-all duration-300 ${
                  filters.bedrooms === option
                    ? "bg-brand-blue text-brand-blue-foreground"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-cta font-medium text-foreground mb-3">
            Bathrooms
          </label>
          <div className="grid grid-cols-3 gap-2">
            {bathroomOptions.map((option) => (
              <button
                key={option}
                onClick={() => onFilterChange("bathrooms", option)}
                className={`px-3 py-2 rounded-md text-sm font-cta font-medium transition-all duration-300 ${
                  filters.bathrooms === option
                    ? "bg-brand-blue text-brand-blue-foreground"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-cta font-medium text-foreground mb-3">
            Area (sqft)
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Min"
              value={filters.minArea}
              onChange={(e) => onFilterChange("minArea", e.target.value)}
              className="px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all duration-300"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxArea}
              onChange={(e) => onFilterChange("maxArea", e.target.value)}
              className="px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all duration-300"
            />
          </div>
        </div>

        <button className="w-full px-5 py-3 bg-brand-amber text-brand-amber-foreground rounded-md font-cta font-semibold hover:bg-brand-amber/90 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center">
          <Icon name="FunnelIcon" size={20} className="mr-2" />
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
