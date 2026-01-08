import React from "react";
import Icon from "@/src/components/ui/AppIcon";

interface Activity {
  id: string;
  type: "saved" | "viewed" | "inquiry" | "alert" | "appointment";
  title: string;
  description: string;
  timestamp: string;
  propertyReference?: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "saved":
        return "HeartIcon";
      case "viewed":
        return "EyeIcon";
      case "inquiry":
        return "ChatBubbleLeftIcon";
      case "alert":
        return "BellIcon";
      case "appointment":
        return "CalendarIcon";
      default:
        return "ClockIcon";
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "saved":
        return "bg-error/10 text-error";
      case "viewed":
        return "bg-brand-blue/10 text-brand-blue";
      case "inquiry":
        return "bg-brand-green/10 text-brand-green";
      case "alert":
        return "bg-brand-amber/10 text-brand-amber";
      case "appointment":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-card overflow-hidden">
      <div className="p-5 border-b border-border">
        <h2 className="text-xl font-headline font-semibold text-foreground">
          Recent Activity
        </h2>
      </div>

      <div className="divide-y divide-border max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-5 hover:bg-primary/5 transition-colors duration-200"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}
              >
                <Icon name={getActivityIcon(activity.type) as any} size={20} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-body font-semibold text-foreground">
                    {activity.title}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {activity.timestamp}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-1">
                  {activity.description}
                </p>

                {activity.propertyReference && (
                  <div className="flex items-center text-xs text-primary">
                    <Icon name="HomeIcon" size={12} className="mr-1" />
                    <span>{activity.propertyReference}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
