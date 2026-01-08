"use client";

import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onSearch,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Icon
          name="MagnifyingGlassIcon"
          size={20}
          className="text-muted-foreground"
        />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search by location, property type, or keywords..."
        className="w-full pl-12 pr-32 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all duration-300"
      />
      <button
        onClick={onSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2.5 bg-brand-blue text-brand-blue-foreground rounded-md font-cta font-semibold hover:bg-brand-blue/90 transition-all duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
