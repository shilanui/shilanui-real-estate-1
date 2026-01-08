"use client";

import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import PropertyListItem from "./PropertyListItem";
import FilterPanel from "./FilterPanel";
import SearchBar from "./SearchBar";
import SortOptions from "./SortOptions";
import MapView from "./MapView";
import SavedSearches from "./SavedSearches";

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
  alt: string;
  featured: boolean;
  roi?: number;
  priceChange?: number;
  daysOnMarket: number;
  description: string;
  lat: number;
  lng: number;
}

interface SavedSearch {
  id: string;
  name: string;
  criteria: string;
  resultsCount: number;
  lastUpdated: string;
}

const PropertyListingsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid");
  const [savedProperties, setSavedProperties] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 5000000] as [number, number],
    propertyType: "All Types",
    bedrooms: "Any",
    bathrooms: "Any",
    minArea: "",
    maxArea: "",
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockProperties: Property[] = [
    {
      id: "1",
      title: "Modern Downtown Loft",
      price: 875000,
      location: "Downtown District, Manhattan",
      bedrooms: 2,
      bathrooms: 2,
      area: 1450,
      type: "Apartment",
      image: "https://images.unsplash.com/photo-1553882233-a45c5c9b5af8",
      alt: "Modern open-concept loft with floor-to-ceiling windows, exposed brick walls, and contemporary furniture in downtown Manhattan",
      featured: true,
      roi: 8.5,
      priceChange: 3.2,
      daysOnMarket: 12,
      description:
        "Stunning loft with panoramic city views, high ceilings, and premium finishes. Walking distance to major attractions and transit.",
      lat: 40.7589,
      lng: -73.9851,
    },
    {
      id: "2",
      title: "Luxury Waterfront Villa",
      price: 2450000,
      location: "Harbor Bay, Miami Beach",
      bedrooms: 5,
      bathrooms: 4,
      area: 4200,
      type: "Villa",
      image: "https://images.unsplash.com/photo-1730944524570-44f1c584fd54",
      alt: "Luxurious white Mediterranean-style villa with infinity pool overlooking turquoise ocean waters and palm trees",
      featured: true,
      roi: 12.3,
      priceChange: 5.8,
      daysOnMarket: 8,
      description:
        "Breathtaking waterfront estate with private dock, infinity pool, and direct ocean access. Ultimate luxury living.",
      lat: 25.7907,
      lng: -80.13,
    },
    {
      id: "3",
      title: "Suburban Family Home",
      price: 625000,
      location: "Maple Grove, Austin",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      type: "House",
      image: "https://images.unsplash.com/photo-1601245805791-0dc7e08e20f8",
      alt: "Spacious two-story suburban home with white exterior, manicured lawn, and large front porch in family-friendly neighborhood",
      featured: false,
      priceChange: -1.5,
      daysOnMarket: 28,
      description:
        "Perfect family home in top-rated school district. Large backyard, updated kitchen, and finished basement.",
      lat: 30.2672,
      lng: -97.7431,
    },
    {
      id: "4",
      title: "Urban Condo with Skyline Views",
      price: 495000,
      location: "Financial District, San Francisco",
      bedrooms: 1,
      bathrooms: 1,
      area: 850,
      type: "Condo",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_11d2c7f0a-1766748559533.png",
      alt: "Contemporary high-rise condo interior with floor-to-ceiling windows showcasing San Francisco skyline and bay views",
      featured: false,
      roi: 6.8,
      daysOnMarket: 19,
      description:
        "Sleek modern condo with stunning views, building amenities include gym, rooftop terrace, and concierge.",
      lat: 37.7749,
      lng: -122.4194,
    },
    {
      id: "5",
      title: "Historic Brownstone Townhouse",
      price: 1850000,
      location: "Brooklyn Heights, New York",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      type: "Townhouse",
      image: "https://images.unsplash.com/photo-1673560438262-f4e246e706fc",
      alt: "Classic red brick brownstone townhouse with ornate entrance, black iron railings, and tree-lined historic street",
      featured: true,
      roi: 9.2,
      priceChange: 4.1,
      daysOnMarket: 15,
      description:
        "Beautifully restored historic townhouse with original details, modern updates, and private garden.",
      lat: 40.6955,
      lng: -73.9937,
    },
    {
      id: "6",
      title: "Mountain View Ranch Estate",
      price: 1275000,
      location: "Aspen Valley, Colorado",
      bedrooms: 5,
      bathrooms: 4,
      area: 5100,
      type: "House",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_161aea8a7-1765807489125.png",
      alt: "Rustic luxury ranch home with log exterior, stone accents, and panoramic mountain views with snow-capped peaks",
      featured: false,
      roi: 10.5,
      priceChange: 2.7,
      daysOnMarket: 22,
      description:
        "Spectacular mountain estate with panoramic views, gourmet kitchen, and outdoor entertainment spaces.",
      lat: 39.1911,
      lng: -106.8175,
    },
  ];

  const mockSavedSearches: SavedSearch[] = [
    {
      id: "s1",
      name: "Downtown Apartments",
      criteria: "$500k-$1M, 2+ beds, Manhattan",
      resultsCount: 24,
      lastUpdated: "2 hours ago",
    },
    {
      id: "s2",
      name: "Investment Properties",
      criteria: "ROI &gt; 8%, All types, Any location",
      resultsCount: 18,
      lastUpdated: "1 day ago",
    },
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-12 bg-muted rounded-lg w-3/4" />
            <div className="h-64 bg-muted rounded-lg" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="h-96 bg-muted rounded-lg" />
              <div className="h-96 bg-muted rounded-lg" />
              <div className="h-96 bg-muted rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      priceRange: [0, 5000000],
      propertyType: "All Types",
      bedrooms: "Any",
      bathrooms: "Any",
      minArea: "",
      maxArea: "",
    });
  };

  const handleSaveProperty = (id: string) => {
    setSavedProperties((prev) =>
      prev.includes(id) ? prev.filter((propId) => propId !== id) : [...prev, id]
    );
  };

  const handleLoadSearch = (id: string) => {
    console.log("Loading saved search:", id);
  };

  const handleDeleteSearch = (id: string) => {
    console.log("Deleting saved search:", id);
  };

  const handlePropertySelect = (id: string) => {
    console.log("Selected property:", id);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-headline font-bold text-primary mb-3">
            Discover Your Perfect Property
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore {mockProperties.length} premium properties with intelligent
            matching and comprehensive insights
          </p>
        </div>

        <div className="mb-8">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearch={() => console.log("Searching:", searchQuery)}
          />
        </div>

        <SavedSearches
          searches={mockSavedSearches}
          onLoadSearch={handleLoadSearch}
          onDeleteSearch={handleDeleteSearch}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <SortOptions
                sortBy={sortBy}
                onSortChange={setSortBy}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
              />
            </div>

            {viewMode === "map" ? (
              <div className="h-[800px]">
                <MapView
                  properties={mockProperties.map((p) => ({
                    id: p.id,
                    title: p.title,
                    price: p.price,
                    location: p.location,
                    lat: p.lat,
                    lng: p.lng,
                  }))}
                  onPropertySelect={handlePropertySelect}
                />
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onSave={handleSaveProperty}
                    isSaved={savedProperties.includes(property.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {mockProperties.map((property) => (
                  <PropertyListItem
                    key={property.id}
                    property={property}
                    onSave={handleSaveProperty}
                    isSaved={savedProperties.includes(property.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingsInteractive;
