import React from "react";
import Link from "next/link";
import AppImage from "@/src/components/ui/AppImage";
import Icon from "@/src/components/ui/AppIcon";

interface SavedProperty {
  id: string;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  alt: string;
  savedDate: string;
  status: "active" | "pending" | "sold";
  tags: string[];
}

interface SavedPropertyCardProps {
  property: SavedProperty;
  onRemove: (id: string) => void;
  onCompare: (id: string) => void;
}

const SavedPropertyCard: React.FC<SavedPropertyCardProps> = ({
  property,
  onRemove,
  onCompare,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "sold":
        return "bg-error text-error-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={property.image}
          alt={property.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <button
            onClick={() => onCompare(property.id)}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
            aria-label="Add to comparison"
          >
            <Icon name="ScaleIcon" size={18} className="text-primary" />
          </button>
          <button
            onClick={() => onRemove(property.id)}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
            aria-label="Remove from saved"
          >
            <Icon
              name="HeartIcon"
              size={18}
              className="text-error"
              variant="solid"
            />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-cta font-semibold ${getStatusColor(property.status)}`}
          >
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-headline font-semibold text-foreground mb-1 line-clamp-1">
              {property.title}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center">
              <Icon name="MapPinIcon" size={16} className="mr-1" />
              {property.address}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl font-headline font-bold text-primary">
            {property.price}
          </p>
        </div>

        <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-border">
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="HomeIcon" size={16} className="mr-1" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Square3Stack3DIcon" size={16} className="mr-1" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="ArrowsPointingOutIcon" size={16} className="mr-1" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {property.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/5 text-primary text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Saved on {property.savedDate}
          </p>
          <Link
            href="/property-listings"
            className="text-sm font-cta font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors duration-200"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SavedPropertyCard;
