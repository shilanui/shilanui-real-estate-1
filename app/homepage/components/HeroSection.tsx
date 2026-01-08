"use client";

import React, { useState, useEffect } from "react";
import AppImage from "@/src/components/ui/AppImage";
import Icon from "@/src/components/ui/AppIcon";

interface Property {
  id: number;
  image: string;
  alt: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
}

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const featuredProperties: Property[] = [
    {
      id: 1,
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_14a6850ea-1764685734780.png",
      alt: "Modern luxury home with white exterior, large windows, and manicured front lawn at sunset",
      title: "Modern Luxury Estate",
      location: "Beverly Hills, CA",
      price: "$4,850,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      type: "Single Family",
    },
    {
      id: 2,
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1422de345-1767518738409.png",
      alt: "Contemporary two-story house with gray siding, large glass windows, and landscaped garden",
      title: "Contemporary Masterpiece",
      location: "Malibu, CA",
      price: "$6,200,000",
      beds: 6,
      baths: 5,
      sqft: "5,800",
      type: "Single Family",
    },
    {
      id: 3,
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1730720c2-1765275854491.png",
      alt: "Elegant white colonial style mansion with columns, symmetrical design, and circular driveway",
      title: "Elegant Colonial Estate",
      location: "Newport Beach, CA",
      price: "$5,500,000",
      beds: 7,
      baths: 6,
      sqft: "6,500",
      type: "Single Family",
    },
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, featuredProperties.length]);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + featuredProperties.length) % featuredProperties.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProperties.length);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", { searchQuery, propertyType, priceRange });
  };

  if (!isHydrated) {
    return (
      <section className="relative h-[600px] lg:h-[700px] bg-gradient-to-br from-primary to-brand-teal">
        <div className="absolute inset-0 bg-black/20" />
      </section>
    );
  }

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        {featuredProperties.map((property, index) => (
          <div
            key={property.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <AppImage
              src={property.image}
              alt={property.alt}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        aria-label="Previous property"
      >
        <Icon name="ChevronLeftIcon" size={24} className="text-primary" />
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
        aria-label="Next property"
      >
        <Icon name="ChevronRightIcon" size={24} className="text-primary" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {featuredProperties.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-semibold text-white mb-4 leading-tight">
              Your Property Journey,
              <br />
              Intelligently Guided
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 font-body">
              Where data meets dreams. Discover your perfect home with
              AI-powered insights and comprehensive market intelligence.
            </p>

            <form
              onSubmit={handleSearch}
              className="bg-white rounded-lg shadow-elevated p-4 sm:p-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="search"
                    className="block text-sm font-cta font-medium text-foreground mb-2"
                  >
                    Location or Property
                  </label>
                  <div className="relative">
                    <Icon
                      name="MagnifyingGlassIcon"
                      size={20}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                      id="search"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="City, neighborhood, or address..."
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-cta font-medium text-foreground mb-2"
                  >
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="land">Land</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="priceRange"
                    className="block text-sm font-cta font-medium text-foreground mb-2"
                  >
                    Price Range
                  </label>
                  <select
                    id="priceRange"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="all">Any Price</option>
                    <option value="0-500k">Under $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-2m">$1M - $2M</option>
                    <option value="2m+">$2M+</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-amber hover:bg-brand-amber/90 text-brand-amber-foreground font-cta font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center space-x-2"
              >
                <Icon name="MagnifyingGlassIcon" size={20} />
                <span>Search Properties</span>
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-md font-cta text-sm transition-all duration-300 flex items-center space-x-2">
                <Icon name="MapPinIcon" size={16} />
                <span>Browse by Map</span>
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-md font-cta text-sm transition-all duration-300 flex items-center space-x-2">
                <Icon name="ChartBarIcon" size={16} />
                <span>Market Trends</span>
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-md font-cta text-sm transition-all duration-300 flex items-center space-x-2">
                <Icon name="CalculatorIcon" size={16} />
                <span>Affordability Calculator</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-8 z-10 bg-white rounded-lg shadow-elevated p-4 max-w-xs hidden lg:block">
        <div className="flex items-start space-x-3">
          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <AppImage
              src={featuredProperties[currentSlide].image}
              alt={featuredProperties[currentSlide].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-headline font-semibold text-foreground text-sm mb-1 truncate">
              {featuredProperties[currentSlide].title}
            </h3>
            <p className="text-xs text-muted-foreground mb-2 flex items-center">
              <Icon name="MapPinIcon" size={12} className="mr-1" />
              {featuredProperties[currentSlide].location}
            </p>
            <p className="text-lg font-cta font-semibold text-brand-amber">
              {featuredProperties[currentSlide].price}
            </p>
            <div className="flex items-center space-x-3 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center">
                <Icon name="HomeIcon" size={12} className="mr-1" />
                {featuredProperties[currentSlide].beds} beds
              </span>
              <span className="flex items-center">
                <Icon name="Square3Stack3DIcon" size={12} className="mr-1" />
                {featuredProperties[currentSlide].baths} baths
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
