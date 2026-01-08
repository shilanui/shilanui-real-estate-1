"use client";

import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2.5 rounded-lg font-cta font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
            activeCategory === category.id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-card text-foreground border border-border hover:border-primary hover:text-primary"
          }`}
        >
          <Icon name={category.icon as any} size={18} />
          <span>{category.name}</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
              activeCategory === category.id
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
