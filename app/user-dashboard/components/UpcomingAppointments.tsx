import React from "react";
import Icon from "@/src/components/ui/AppIcon";
import AppImage from "@/src/components/ui/AppImage";

interface Appointment {
  id: string;
  type: "viewing" | "consultation" | "closing";
  title: string;
  date: string;
  time: string;
  location: string;
  agent: {
    name: string;
    avatar: string;
    alt: string;
  };
  propertyImage?: string;
  propertyImageAlt?: string;
  status: "confirmed" | "pending" | "cancelled";
}

interface UpcomingAppointmentsProps {
  appointments: Appointment[];
  onReschedule: (id: string) => void;
  onCancel: (id: string) => void;
}

const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({
  appointments,
  onReschedule,
  onCancel,
}) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "viewing":
        return "EyeIcon";
      case "consultation":
        return "ChatBubbleLeftRightIcon";
      case "closing":
        return "DocumentCheckIcon";
      default:
        return "CalendarIcon";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "viewing":
        return "bg-brand-blue/10 text-brand-blue";
      case "consultation":
        return "bg-brand-green/10 text-brand-green";
      case "closing":
        return "bg-brand-amber/10 text-brand-amber";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-success/10 text-success";
      case "pending":
        return "bg-warning/10 text-warning";
      case "cancelled":
        return "bg-error/10 text-error";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-card overflow-hidden">
      <div className="p-5 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-headline font-semibold text-foreground">
            Upcoming Appointments
          </h2>
          <button className="text-sm font-cta font-medium text-brand-blue hover:text-brand-blue/80 transition-colors duration-200">
            View Calendar
          </button>
        </div>
      </div>

      <div className="divide-y divide-border">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="p-5 hover:bg-primary/5 transition-colors duration-200"
          >
            <div className="flex items-start space-x-4">
              {appointment.propertyImage && (
                <div className="flex-shrink-0">
                  <AppImage
                    src={appointment.propertyImage}
                    alt={appointment.propertyImageAlt || "Property image"}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-cta font-semibold ${getTypeColor(appointment.type)}`}
                    >
                      <Icon
                        name={getTypeIcon(appointment.type) as any}
                        size={14}
                        className="inline mr-1"
                      />
                      {appointment.type.charAt(0).toUpperCase() +
                        appointment.type.slice(1)}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(appointment.status)}`}
                    >
                      {appointment.status.charAt(0).toUpperCase() +
                        appointment.status.slice(1)}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-body font-semibold text-foreground mb-2">
                  {appointment.title}
                </h3>

                <div className="space-y-1 mb-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="CalendarIcon" size={16} className="mr-2" />
                    <span>
                      {appointment.date} at {appointment.time}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="MapPinIcon" size={16} className="mr-2" />
                    <span>{appointment.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AppImage
                      src={appointment.agent.avatar}
                      alt={appointment.agent.alt}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {appointment.agent.name}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onReschedule(appointment.id)}
                      className="px-3 py-1.5 bg-primary/5 text-primary rounded-md font-cta font-medium text-xs hover:bg-primary/10 transition-colors duration-200"
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => onCancel(appointment.id)}
                      className="px-3 py-1.5 bg-error/5 text-error rounded-md font-cta font-medium text-xs hover:bg-error/10 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingAppointments;
