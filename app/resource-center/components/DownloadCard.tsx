import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface DownloadCardProps {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  downloads: string;
  onClick: () => void;
}

const DownloadCard: React.FC<DownloadCardProps> = ({
  title,
  description,
  fileType,
  fileSize,
  downloads,
  onClick,
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-elevated hover:border-primary">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center">
          <Icon name="DocumentTextIcon" size={24} className="text-brand-blue" />
        </div>
        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-cta font-medium rounded uppercase">
          {fileType}
        </span>
      </div>
      <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center justify-between text-xs text-muted-foreground font-body mb-4">
        <span>{fileSize}</span>
        <span className="flex items-center space-x-1">
          <Icon name="ArrowDownTrayIcon" size={14} />
          <span>{downloads} downloads</span>
        </span>
      </div>
      <button
        onClick={onClick}
        className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-md font-cta font-semibold text-sm hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <Icon name="ArrowDownTrayIcon" size={18} />
        <span>Download Now</span>
      </button>
    </div>
  );
};

export default DownloadCard;
