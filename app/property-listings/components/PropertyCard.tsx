"use client";

import React from "react";
import Link from "next/link";
import AppImage from "@/src/components/ui/AppImage";
import Icon from "@/src/components/ui/AppIcon";

interface PropertyCardProps {
  property: {
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
  };
  onSave: (id: string) => void;
  isSaved: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSave,
  isSaved,
}) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={property.image}
          alt={property.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {property.featured && (
          <div className="absolute top-4 left-4 bg-brand-amber text-brand-amber-foreground px-3 py-1 rounded-md text-sm font-cta font-semibold">
            Featured
          </div>
        )}
        <button
          onClick={() => onSave(property.id)}
          className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm p-2 rounded-full hover:bg-card transition-colors duration-300"
          aria-label={isSaved ? "Remove from saved" : "Save property"}
        >
          <Icon
            name="HeartIcon"
            variant={isSaved ? "solid" : "outline"}
            size={20}
            className={isSaved ? "text-error" : "text-foreground"}
          />
        </button>
        {property.roi && (
          <div className="absolute bottom-4 left-4 bg-brand-green text-brand-green-foreground px-3 py-1 rounded-md text-sm font-cta font-semibold">
            {property.roi}% ROI
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-headline font-semibold text-primary mb-1 group-hover:text-brand-blue transition-colors duration-300">
              {property.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <Icon name="MapPinIcon" size={16} className="mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-headline font-bold text-primary">
              ${property.price.toLocaleString()}
            </div>
            {property.priceChange && (
              <div
                className={`text-sm font-cta font-medium ${
                  property.priceChange > 0 ? "text-brand-green" : "text-error"
                }`}
              >
                {property.priceChange > 0 ? "+" : ""}
                {property.priceChange}%
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between py-3 border-t border-border">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Icon name="HomeIcon" size={16} className="mr-1" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Icon name="BuildingOfficeIcon" size={16} className="mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Icon name="Square3Stack3DIcon" size={16} className="mr-1" />
              <span>{property.area.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3">
          <span className="text-sm text-muted-foreground">
            {property.daysOnMarket} days on market
          </span>
          <Link
            href={`/property-listings/${property.id}`}
            className="text-brand-blue hover:text-brand-blue/80 font-cta font-medium text-sm flex items-center transition-colors duration-300"
          >
            View Details
            <Icon name="ArrowRightIcon" size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
