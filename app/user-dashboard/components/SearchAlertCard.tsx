import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface SearchAlert {
  id: string;
  name: string;
  criteria: {
    location: string;
    priceRange: string;
    propertyType: string;
    bedrooms: string;
  };
  frequency: "instant" | "daily" | "weekly";
  newMatches: number;
  lastNotified: string;
  isActive: boolean;
}

interface SearchAlertCardProps {
  alert: SearchAlert;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const SearchAlertCard: React.FC<SearchAlertCardProps> = ({
  alert,
  onToggle,
  onEdit,
  onDelete,
}) => {
  const getFrequencyIcon = (frequency: string) => {
    switch (frequency) {
      case "instant":
        return "BoltIcon";
      case "daily":
        return "CalendarDaysIcon";
      case "weekly":
        return "CalendarIcon";
      default:
        return "BellIcon";
    }
  };

  return (
    <div className="bg-card rounded-lg p-5 shadow-card hover:shadow-elevated transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-lg font-headline font-semibold text-foreground">
              {alert.name}
            </h3>
            {alert.newMatches > 0 && (
              <span className="px-2 py-1 bg-brand-amber text-brand-amber-foreground text-xs font-cta font-semibold rounded-full">
                {alert.newMatches} New
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name={getFrequencyIcon(alert.frequency) as any} size={16} />
            <span className="capitalize">{alert.frequency} alerts</span>
            <span>•</span>
            <span>Last: {alert.lastNotified}</span>
          </div>
        </div>
        <button
          onClick={() => onToggle(alert.id)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
            alert.isActive ? "bg-brand-green" : "bg-muted"
          }`}
          aria-label={alert.isActive ? "Deactivate alert" : "Activate alert"}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
              alert.isActive ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm">
          <Icon
            name="MapPinIcon"
            size={16}
            className="text-muted-foreground mr-2"
          />
          <span className="text-foreground">{alert.criteria.location}</span>
        </div>
        <div className="flex items-center text-sm">
          <Icon
            name="CurrencyDollarIcon"
            size={16}
            className="text-muted-foreground mr-2"
          />
          <span className="text-foreground">{alert.criteria.priceRange}</span>
        </div>
        <div className="flex items-center text-sm">
          <Icon
            name="HomeIcon"
            size={16}
            className="text-muted-foreground mr-2"
          />
          <span className="text-foreground">
            {alert.criteria.propertyType} • {alert.criteria.bedrooms}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-2 pt-4 border-t border-border">
        <button
          onClick={() => onEdit(alert.id)}
          className="flex-1 px-4 py-2 bg-primary/5 text-primary rounded-md font-cta font-medium text-sm hover:bg-primary/10 transition-colors duration-200"
        >
          Edit Criteria
        </button>
        <button
          onClick={() => onDelete(alert.id)}
          className="px-4 py-2 bg-error/5 text-error rounded-md font-cta font-medium text-sm hover:bg-error/10 transition-colors duration-200"
          aria-label="Delete alert"
        >
          <Icon name="TrashIcon" size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchAlertCard;
