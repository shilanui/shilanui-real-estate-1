import React from "react";
import Icon from "@/src/components/ui/AppIcon";
import AppImage from "@/src/components/ui/AppImage";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  alt: string;
  icon: string;
  featured?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  category,
  readTime,
  image,
  alt,
  icon,
  featured = false,
}) => {
  return (
    <div
      className={`group bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-elevated ${
        featured ? "border-2 border-accent" : "border border-border"
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-cta font-semibold rounded-full">
            {category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-cta font-semibold rounded-full flex items-center space-x-1">
              <Icon name="StarIcon" size={14} variant="solid" />
              <span>Featured</span>
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name={icon as any} size={20} className="text-secondary" />
          <span className="text-sm text-muted-foreground font-body">
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-headline font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ResourceCard;
