"use client";

import React from "react";
import Link from "next/link";
import AppImage from "@/src/components/ui/AppImage";
import Icon from "@/src/components/ui/AppIcon";

interface PropertyListItemProps {
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
    description: string;
  };
  onSave: (id: string) => void;
  isSaved: boolean;
}

const PropertyListItem: React.FC<PropertyListItemProps> = ({
  property,
  onSave,
  isSaved,
}) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 flex">
      <div className="relative w-80 h-64 flex-shrink-0 overflow-hidden">
        <AppImage
          src={property.image}
          alt={property.alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {property.featured && (
          <div className="absolute top-4 left-4 bg-brand-amber text-brand-amber-foreground px-3 py-1 rounded-md text-sm font-cta font-semibold">
            Featured
          </div>
        )}
        {property.roi && (
          <div className="absolute bottom-4 left-4 bg-brand-green text-brand-green-foreground px-3 py-1 rounded-md text-sm font-cta font-semibold">
            {property.roi}% ROI
          </div>
        )}
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-headline font-semibold text-primary mb-2 hover:text-brand-blue transition-colors duration-300">
              {property.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mb-3">
              <Icon name="MapPinIcon" size={16} className="mr-1" />
              <span>{property.location}</span>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {property.description}
            </p>
          </div>
          <div className="text-right ml-6">
            <div className="text-2xl font-headline font-bold text-primary mb-1">
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

        <div className="flex items-center space-x-6 py-3 border-t border-b border-border my-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="HomeIcon" size={16} className="mr-1" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="BuildingOfficeIcon" size={16} className="mr-1" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Square3Stack3DIcon" size={16} className="mr-1" />
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="ClockIcon" size={16} className="mr-1" />
            <span>{property.daysOnMarket} days</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <button
            onClick={() => onSave(property.id)}
            className="flex items-center space-x-2 px-4 py-2 bg-background hover:bg-muted rounded-md transition-colors duration-300"
          >
            <Icon
              name="HeartIcon"
              variant={isSaved ? "solid" : "outline"}
              size={20}
              className={isSaved ? "text-error" : "text-foreground"}
            />
            <span className="text-sm font-cta font-medium text-foreground">
              {isSaved ? "Saved" : "Save"}
            </span>
          </button>
          <Link
            href={`/property-listings/${property.id}`}
            className="px-5 py-2.5 bg-brand-blue text-brand-blue-foreground rounded-md font-cta font-semibold hover:bg-brand-blue/90 transition-all duration-300 flex items-center"
          >
            View Details
            <Icon name="ArrowRightIcon" size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyListItem;
