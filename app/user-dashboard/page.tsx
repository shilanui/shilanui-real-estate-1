import type { Metadata } from "next";
import Header from "@/src/components/common/Header";
import DashboardInteractive from "./components/DashboardInteractive";
import Icon from "@/src/components/ui/AppIcon";

export const metadata: Metadata = {
  title: "User Dashboard - Shilanui-real-estate",
  description:
    "Manage your saved properties, search alerts, messages, and appointments in your personalized Shilanui-real-estate command center for efficient property tracking and transaction management.",
};

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-4xl font-headline font-semibold text-foreground mb-2">
                  Welcome Back, John
                </h1>
                <p className="text-lg text-muted-foreground">
                  Here's what's happening with your property search
                </p>
              </div>
              <button className="px-6 py-3 bg-brand-amber text-brand-amber-foreground rounded-md font-cta font-semibold text-base hover:bg-brand-amber/90 transition-all duration-300 shadow-sm hover:shadow-md flex items-center space-x-2">
                <Icon name="PlusIcon" size={20} />
                <span>Create New Alert</span>
              </button>
            </div>
          </div>

          <DashboardInteractive />
        </div>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Shilanui-real-estate. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Help Center
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
