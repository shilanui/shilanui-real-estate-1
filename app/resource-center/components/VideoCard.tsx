import React from "react";
import Icon from "@/src/components/ui/AppIcon";
import AppImage from "@/src/components/ui/AppImage";

interface VideoCardProps {
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  alt: string;
  expert: string;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  duration,
  views,
  thumbnail,
  alt,
  expert,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="group w-full bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-elevated text-left"
    >
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={thumbnail}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <Icon
              name="PlayIcon"
              size={32}
              className="text-primary ml-1"
              variant="solid"
            />
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="px-2 py-1 bg-black/80 text-white text-xs font-cta font-medium rounded">
            {duration}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-base font-headline font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground font-body">
          <span className="flex items-center space-x-1">
            <Icon name="UserIcon" size={16} />
            <span>{expert}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Icon name="EyeIcon" size={16} />
            <span>{views}</span>
          </span>
        </div>
      </div>
    </button>
  );
};

export default VideoCard;
