"use client";

import React, { useState, useEffect } from "react";
import DashboardStats from "./DashboardStats";
import SavedPropertyCard from "./SavedPropertyCard";
import SearchAlertCard from "./SearchAlertCard";
import MessageCenter from "./MessageCenter";
import UpcomingAppointments from "./UpcomingAppointments";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

interface DashboardInteractiveProps {}

const DashboardInteractive: React.FC<DashboardInteractiveProps> = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "properties" | "alerts" | "messages" | "appointments"
  >("properties");

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const statsData = [
    {
      icon: "HeartIcon",
      label: "Saved Properties",
      value: 12,
      trend: { value: "+3", isPositive: true },
      color: "bg-error",
    },
    {
      icon: "BellIcon",
      label: "Active Alerts",
      value: 5,
      trend: { value: "+2", isPositive: true },
      color: "bg-brand-amber",
    },
    {
      icon: "ChatBubbleLeftIcon",
      label: "Unread Messages",
      value: 8,
      color: "bg-brand-green",
    },
    {
      icon: "CalendarIcon",
      label: "Upcoming Viewings",
      value: 3,
      color: "bg-brand-blue",
    },
  ];

  const savedProperties = [
    {
      id: "1",
      title: "Modern Downtown Loft",
      address: "123 Main Street, Downtown District",
      price: "$850,000",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1450,
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_119ec0046-1766943286769.png",
      alt: "Modern open-concept loft with exposed brick walls, large windows, and contemporary furnishings",
      savedDate: "Jan 5, 2026",
      status: "active" as const,
      tags: ["New Listing", "Price Drop"],
    },
    {
      id: "2",
      title: "Suburban Family Home",
      address: "456 Oak Avenue, Riverside Community",
      price: "$625,000",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1616758712559-7f97cce3accc",
      alt: "Two-story colonial style house with white exterior, black shutters, and manicured front lawn",
      savedDate: "Jan 3, 2026",
      status: "active" as const,
      tags: ["Great Schools", "Large Yard"],
    },
    {
      id: "3",
      title: "Waterfront Condo",
      address: "789 Harbor View, Marina District",
      price: "$1,200,000",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1850,
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1716ff18f-1765306666752.png",
      alt: "Luxury waterfront condominium with floor-to-ceiling windows overlooking marina and city skyline",
      savedDate: "Jan 1, 2026",
      status: "pending" as const,
      tags: ["Waterfront", "Luxury"],
    },
  ];

  const searchAlerts = [
    {
      id: "1",
      name: "Downtown Condos",
      criteria: {
        location: "Downtown District",
        priceRange: "$700K - $1M",
        propertyType: "Condo",
        bedrooms: "2-3 Beds",
      },
      frequency: "instant" as const,
      newMatches: 3,
      lastNotified: "2 hours ago",
      isActive: true,
    },
    {
      id: "2",
      name: "Family Homes Riverside",
      criteria: {
        location: "Riverside Community",
        priceRange: "$500K - $750K",
        propertyType: "Single Family",
        bedrooms: "3-4 Beds",
      },
      frequency: "daily" as const,
      newMatches: 5,
      lastNotified: "Yesterday",
      isActive: true,
    },
    {
      id: "3",
      name: "Investment Properties",
      criteria: {
        location: "Multiple Areas",
        priceRange: "$300K - $500K",
        propertyType: "Multi-Family",
        bedrooms: "Any",
      },
      frequency: "weekly" as const,
      newMatches: 0,
      lastNotified: "3 days ago",
      isActive: false,
    },
  ];

  const messages = [
    {
      id: "1",
      sender: {
        name: "Sarah Johnson",
        role: "agent" as const,
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_18403c4e4-1763295192007.png",
        alt: "Professional headshot of Hispanic woman with long dark hair in navy blazer smiling at camera",
      },
      subject: "Viewing Confirmation - Modern Downtown Loft",
      preview:
        "Hi! I wanted to confirm your viewing appointment for tomorrow at 2 PM. The property owner will also be present to answer any questions you might have about the recent renovations.",
      timestamp: "2 hours ago",
      isRead: false,
      propertyReference: "123 Main Street",
    },
    {
      id: "2",
      sender: {
        name: "Michael Chen",
        role: "seller" as const,
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_13a48293d-1763296098326.png",
        alt: "Professional headshot of Asian man with short black hair in gray suit smiling confidently",
      },
      subject: "Price Adjustment Notification",
      preview:
        "Good news! The seller has agreed to reduce the asking price by $15,000 based on your offer. Please review the updated terms and let me know if you would like to proceed.",
      timestamp: "5 hours ago",
      isRead: false,
      propertyReference: "456 Oak Avenue",
    },
    {
      id: "3",
      sender: {
        name: "Emily Rodriguez",
        role: "agent" as const,
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_1b5600450-1763294005133.png",
        alt: "Professional headshot of Caucasian woman with blonde hair in white blouse smiling warmly",
      },
      subject: "New Listings Matching Your Criteria",
      preview:
        "I found 3 new properties that match your search criteria in the Riverside Community area. All are within your budget and feature the amenities you requested.",
      timestamp: "Yesterday",
      isRead: true,
    },
  ];

  const appointments = [
    {
      id: "1",
      type: "viewing" as const,
      title: "Property Viewing - Modern Downtown Loft",
      date: "Jan 8, 2026",
      time: "2:00 PM",
      location: "123 Main Street, Downtown District",
      agent: {
        name: "Sarah Johnson",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_18403c4e4-1763295192007.png",
        alt: "Professional headshot of Hispanic woman with long dark hair in navy blazer smiling at camera",
      },
      propertyImage:
        "https://img.rocket.new/generatedImages/rocket_gen_img_119ec0046-1766943286769.png",
      propertyImageAlt:
        "Modern open-concept loft with exposed brick walls and large windows",
      status: "confirmed" as const,
    },
    {
      id: "2",
      type: "consultation" as const,
      title: "Financing Consultation",
      date: "Jan 10, 2026",
      time: "10:00 AM",
      location: "Shilanui-real-estate Office, Suite 200",
      agent: {
        name: "David Martinez",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_1215564b9-1763294454695.png",
        alt: "Professional headshot of Hispanic man with short dark hair in charcoal suit smiling professionally",
      },
      status: "confirmed" as const,
    },
    {
      id: "3",
      type: "viewing" as const,
      title: "Property Viewing - Waterfront Condo",
      date: "Jan 12, 2026",
      time: "4:00 PM",
      location: "789 Harbor View, Marina District",
      agent: {
        name: "Emily Rodriguez",
        avatar:
          "https://img.rocket.new/generatedImages/rocket_gen_img_1b5600450-1763294005133.png",
        alt: "Professional headshot of Caucasian woman with blonde hair in white blouse smiling warmly",
      },
      propertyImage:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1716ff18f-1765306666752.png",
      propertyImageAlt:
        "Luxury waterfront condominium with floor-to-ceiling windows overlooking marina",
      status: "pending" as const,
    },
  ];

  const activities = [
    {
      id: "1",
      type: "saved" as const,
      title: "Saved Property",
      description: "You saved Modern Downtown Loft to your favorites",
      timestamp: "2 hours ago",
      propertyReference: "123 Main Street",
    },
    {
      id: "2",
      type: "inquiry" as const,
      title: "Sent Inquiry",
      description: "You sent an inquiry about Suburban Family Home",
      timestamp: "5 hours ago",
      propertyReference: "456 Oak Avenue",
    },
    {
      id: "3",
      type: "alert" as const,
      title: "New Alert Match",
      description: "3 new properties match your Downtown Condos alert",
      timestamp: "8 hours ago",
    },
    {
      id: "4",
      type: "appointment" as const,
      title: "Appointment Scheduled",
      description: "Viewing scheduled for Modern Downtown Loft",
      timestamp: "Yesterday",
      propertyReference: "123 Main Street",
    },
    {
      id: "5",
      type: "viewed" as const,
      title: "Viewed Property",
      description: "You viewed Waterfront Condo details",
      timestamp: "2 days ago",
      propertyReference: "789 Harbor View",
    },
  ];

  const quickActions = [
    {
      label: "Search Properties",
      icon: "MagnifyingGlassIcon",
      href: "/property-listings",
      color: "bg-brand-blue",
      description: "Find your perfect home",
    },
    {
      label: "Market Insights",
      icon: "ChartBarIcon",
      href: "/market-intelligence",
      color: "bg-brand-green",
      description: "View market trends",
    },
    {
      label: "Resources",
      icon: "BookOpenIcon",
      href: "/resource-center",
      color: "bg-brand-amber",
      description: "Learn about buying",
    },
    {
      label: "Contact Agent",
      icon: "UserGroupIcon",
      href: "/homepage",
      color: "bg-primary",
      description: "Get expert help",
    },
  ];

  const handleRemoveProperty = (id: string) => {
    if (!isHydrated) return;
    console.log("Remove property:", id);
  };

  const handleCompareProperty = (id: string) => {
    if (!isHydrated) return;
    console.log("Compare property:", id);
  };

  const handleToggleAlert = (id: string) => {
    if (!isHydrated) return;
    console.log("Toggle alert:", id);
  };

  const handleEditAlert = (id: string) => {
    if (!isHydrated) return;
    console.log("Edit alert:", id);
  };

  const handleDeleteAlert = (id: string) => {
    if (!isHydrated) return;
    console.log("Delete alert:", id);
  };

  const handleMessageClick = (id: string) => {
    if (!isHydrated) return;
    console.log("Open message:", id);
  };

  const handleMarkAsRead = (id: string) => {
    if (!isHydrated) return;
    console.log("Mark as read:", id);
  };

  const handleReschedule = (id: string) => {
    if (!isHydrated) return;
    console.log("Reschedule appointment:", id);
  };

  const handleCancel = (id: string) => {
    if (!isHydrated) return;
    console.log("Cancel appointment:", id);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-muted rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <DashboardStats stats={statsData} />

      <div className="flex flex-wrap gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("properties")}
          className={`px-4 py-3 font-cta font-medium text-sm transition-all duration-200 border-b-2 ${
            activeTab === "properties"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Saved Properties
        </button>
        <button
          onClick={() => setActiveTab("alerts")}
          className={`px-4 py-3 font-cta font-medium text-sm transition-all duration-200 border-b-2 ${
            activeTab === "alerts"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Search Alerts
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`px-4 py-3 font-cta font-medium text-sm transition-all duration-200 border-b-2 ${
            activeTab === "messages"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Messages
        </button>
        <button
          onClick={() => setActiveTab("appointments")}
          className={`px-4 py-3 font-cta font-medium text-sm transition-all duration-200 border-b-2 ${
            activeTab === "appointments"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          Appointments
        </button>
      </div>

      {activeTab === "properties" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProperties.map((property) => (
            <SavedPropertyCard
              key={property.id}
              property={property}
              onRemove={handleRemoveProperty}
              onCompare={handleCompareProperty}
            />
          ))}
        </div>
      )}

      {activeTab === "alerts" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchAlerts.map((alert) => (
            <SearchAlertCard
              key={alert.id}
              alert={alert}
              onToggle={handleToggleAlert}
              onEdit={handleEditAlert}
              onDelete={handleDeleteAlert}
            />
          ))}
        </div>
      )}

      {activeTab === "messages" && (
        <MessageCenter
          messages={messages}
          onMessageClick={handleMessageClick}
          onMarkAsRead={handleMarkAsRead}
        />
      )}

      {activeTab === "appointments" && (
        <UpcomingAppointments
          appointments={appointments}
          onReschedule={handleReschedule}
          onCancel={handleCancel}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity activities={activities} />
        </div>
        <div>
          <QuickActions actions={quickActions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardInteractive;
