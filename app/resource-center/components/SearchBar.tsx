"use client";

import React, { useState } from "react";
import Icon from "@/src/components/ui/AppIcon";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search resources, guides, and tools...",
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="relative">
        <Icon
          name="MagnifyingGlassIcon"
          size={20}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3.5 bg-card border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        />
      </div>
    </form>
  );
};

export default SearchBar;
