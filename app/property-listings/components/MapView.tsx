"use client";

import React, { useState, useEffect } from "react";
import Icon from "@/src/components/ui/AppIcon";

interface MapViewProps {
  properties: Array<{
    id: string;
    title: string;
    price: number;
    location: string;
    lat: number;
    lng: number;
  }>;
  onPropertySelect: (id: string) => void;
}

const MapView: React.FC<MapViewProps> = ({ properties, onPropertySelect }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center">
          <Icon
            name="MapIcon"
            size={48}
            className="text-muted-foreground mx-auto mb-3"
          />
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    );
  }

  const centerLat = properties.length > 0 ? properties[0].lat : 40.7128;
  const centerLng = properties.length > 0 ? properties[0].lng : -74.006;

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        title="Property Locations Map"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${centerLat},${centerLng}&z=12&output=embed`}
        className="border-0"
      />
      <div className="absolute top-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-elevated max-w-xs">
        <h4 className="text-sm font-cta font-semibold text-primary mb-2">
          {properties.length} Properties Found
        </h4>
        <p className="text-xs text-muted-foreground">
          Click on map markers to view property details
        </p>
      </div>
    </div>
  );
};

export default MapView;
