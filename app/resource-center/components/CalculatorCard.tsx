import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  onClick: () => void;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({
  title,
  description,
  icon,
  color,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="group w-full bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-elevated hover:border-primary text-left"
    >
      <div
        className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon name={icon as any} size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-headline font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground font-body leading-relaxed">
        {description}
      </p>
      <div className="flex items-center space-x-2 mt-4 text-primary">
        <span className="text-sm font-cta font-medium">Launch Calculator</span>
        <Icon
          name="ArrowRightIcon"
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </button>
  );
};

export default CalculatorCard;
