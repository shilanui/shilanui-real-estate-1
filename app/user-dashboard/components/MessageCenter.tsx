import React from "react";
import AppImage from "@/src/components/ui/AppImage";
import Icon from "@/src/components/ui/AppIcon";

interface Message {
  id: string;
  sender: {
    name: string;
    role: "agent" | "seller" | "buyer";
    avatar: string;
    alt: string;
  };
  subject: string;
  preview: string;
  timestamp: string;
  isRead: boolean;
  propertyReference?: string;
}

interface MessageCenterProps {
  messages: Message[];
  onMessageClick: (id: string) => void;
  onMarkAsRead: (id: string) => void;
}

const MessageCenter: React.FC<MessageCenterProps> = ({
  messages,
  onMessageClick,
  onMarkAsRead,
}) => {
  const getRoleColor = (role: string) => {
    switch (role) {
      case "agent":
        return "text-brand-blue";
      case "seller":
        return "text-brand-green";
      case "buyer":
        return "text-brand-amber";
      default:
        return "text-muted-foreground";
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "agent":
        return "bg-brand-blue/10 text-brand-blue";
      case "seller":
        return "bg-brand-green/10 text-brand-green";
      case "buyer":
        return "bg-brand-amber/10 text-brand-amber";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="bg-card rounded-lg shadow-card overflow-hidden">
      <div className="p-5 border-b border-border">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-headline font-semibold text-foreground">
            Message Center
          </h2>
          <button className="text-sm font-cta font-medium text-brand-blue hover:text-brand-blue/80 transition-colors duration-200">
            View All
          </button>
        </div>
      </div>

      <div className="divide-y divide-border">
        {messages.map((message) => (
          <div
            key={message.id}
            onClick={() => onMessageClick(message.id)}
            className={`p-5 hover:bg-primary/5 transition-colors duration-200 cursor-pointer ${
              !message.isRead ? "bg-primary/5" : ""
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="relative flex-shrink-0">
                <AppImage
                  src={message.sender.avatar}
                  alt={message.sender.alt}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {!message.isRead && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-brand-amber rounded-full border-2 border-card" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-body font-semibold text-foreground">
                      {message.sender.name}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${getRoleBadge(message.sender.role)}`}
                    >
                      {message.sender.role.charAt(0).toUpperCase() +
                        message.sender.role.slice(1)}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp}
                  </span>
                </div>

                <p
                  className={`text-sm mb-2 ${!message.isRead ? "font-semibold text-foreground" : "text-foreground"}`}
                >
                  {message.subject}
                </p>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {message.preview}
                </p>

                {message.propertyReference && (
                  <div className="flex items-center text-xs text-primary">
                    <Icon name="HomeIcon" size={14} className="mr-1" />
                    <span>Re: {message.propertyReference}</span>
                  </div>
                )}
              </div>

              {!message.isRead && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarkAsRead(message.id);
                  }}
                  className="flex-shrink-0 p-2 hover:bg-primary/10 rounded-md transition-colors duration-200"
                  aria-label="Mark as read"
                >
                  <Icon name="CheckIcon" size={18} className="text-primary" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageCenter;
