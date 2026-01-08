import React from "react";
import Link from "next/link";
import Icon from "@/src/components/ui/AppIcon";

interface QuickAction {
  label: string;
  icon: string;
  href: string;
  color: string;
  description: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
  return (
    <div className="bg-card rounded-lg shadow-card p-6">
      <h2 className="text-xl font-headline font-semibold text-foreground mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className="group p-4 bg-background rounded-lg border border-border hover:border-primary hover:shadow-card transition-all duration-300"
          >
            <div className="flex items-start space-x-3">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-lg ${action.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
              >
                <Icon
                  name={action.icon as any}
                  size={24}
                  className="text-white"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-body font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                  {action.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
              <Icon
                name="ChevronRightIcon"
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors duration-200"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
