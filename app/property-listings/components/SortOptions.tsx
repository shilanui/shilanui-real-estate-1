"use client";

import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface SortOptionsProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  viewMode: "grid" | "list" | "map";
  onViewModeChange: (mode: "grid" | "list" | "map") => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}) => {
  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
    { value: "area-large", label: "Largest Area" },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <label className="text-sm font-cta font-medium text-foreground">
          Sort by:
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 bg-card border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all duration-300"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => onViewModeChange("grid")}
          className={`p-2 rounded-md transition-all duration-300 ${
            viewMode === "grid"
              ? "bg-brand-blue text-brand-blue-foreground"
              : "bg-card text-foreground hover:bg-muted"
          }`}
          aria-label="Grid view"
        >
          <Icon name="Squares2X2Icon" size={20} />
        </button>
        <button
          onClick={() => onViewModeChange("list")}
          className={`p-2 rounded-md transition-all duration-300 ${
            viewMode === "list"
              ? "bg-brand-blue text-brand-blue-foreground"
              : "bg-card text-foreground hover:bg-muted"
          }`}
          aria-label="List view"
        >
          <Icon name="ListBulletIcon" size={20} />
        </button>
        <button
          onClick={() => onViewModeChange("map")}
          className={`p-2 rounded-md transition-all duration-300 ${
            viewMode === "map"
              ? "bg-brand-blue text-brand-blue-foreground"
              : "bg-card text-foreground hover:bg-muted"
          }`}
          aria-label="Map view"
        >
          <Icon name="MapIcon" size={20} />
        </button>
      </div>
    </div>
  );
};

export default SortOptions;
