"use client";

import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface SavedSearch {
  id: string;
  name: string;
  criteria: string;
  resultsCount: number;
  lastUpdated: string;
}

interface SavedSearchesProps {
  searches: SavedSearch[];
  onLoadSearch: (id: string) => void;
  onDeleteSearch: (id: string) => void;
}

const SavedSearches: React.FC<SavedSearchesProps> = ({
  searches,
  onLoadSearch,
  onDeleteSearch,
}) => {
  if (searches.length === 0) {
    return null;
  }

  return (
    <div className="bg-card rounded-lg p-6 shadow-card mb-6">
      <h3 className="text-lg font-headline font-semibold text-primary mb-4">
        Saved Searches
      </h3>
      <div className="space-y-3">
        {searches.map((search) => (
          <div
            key={search.id}
            className="flex items-center justify-between p-4 bg-background rounded-md hover:bg-muted transition-colors duration-300"
          >
            <div className="flex-1">
              <h4 className="text-sm font-cta font-semibold text-foreground mb-1">
                {search.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">
                {search.criteria}
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>{search.resultsCount} properties</span>
                <span>Updated {search.lastUpdated}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => onLoadSearch(search.id)}
                className="p-2 text-brand-blue hover:bg-brand-blue/10 rounded-md transition-colors duration-300"
                aria-label="Load search"
              >
                <Icon name="MagnifyingGlassIcon" size={18} />
              </button>
              <button
                onClick={() => onDeleteSearch(search.id)}
                className="p-2 text-error hover:bg-error/10 rounded-md transition-colors duration-300"
                aria-label="Delete search"
              >
                <Icon name="TrashIcon" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedSearches;
