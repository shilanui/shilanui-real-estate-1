"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/src/components/ui/AppIcon";

interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems: NavigationItem[] = [
    { label: "Home", href: "/homepage", icon: "HomeIcon" },
    {
      label: "Properties",
      href: "/property-listings",
      icon: "BuildingOfficeIcon",
    },
    {
      label: "Market Intelligence",
      href: "/market-intelligence",
      icon: "ChartBarIcon",
    },
    { label: "Resources", href: "/resource-center", icon: "BookOpenIcon" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-elevated" : "bg-card"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Link href="/homepage" className="flex items-center space-x-3 group">
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                <path
                  d="M20 10L12 16V28C12 28.5304 12.2107 29.0391 12.5858 29.4142C12.9609 29.7893 13.4696 30 14 30H18V24C18 23.4696 18.2107 22.9609 18.5858 22.5858C18.9609 22.2107 19.4696 22 20 22C20.5304 22 21.0391 22.2107 21.4142 22.5858C21.7893 22.9609 22 23.4696 22 24V30H26C26.5304 30 27.0391 29.7893 27.4142 29.4142C27.7893 29.0391 28 28.5304 28 28V16L20 10Z"
                  fill="white"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                    <stop stopColor="#2B4C7E" />
                    <stop offset="1" stopColor="#2C5F7C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-headline font-semibold text-primary tracking-tight">
                Shilanui-real-estate
              </span>
              <span className="text-xs font-accent text-muted-foreground tracking-wide">
                Intelligent Property Discovery
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-md font-cta font-medium text-sm transition-all duration-300 ${
                  isActiveRoute(item.href)
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
                {isActiveRoute(item.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/user-dashboard"
              className="px-4 py-2 rounded-md font-cta font-medium text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 flex items-center space-x-2"
            >
              <Icon name="UserCircleIcon" size={20} />
              <span>Dashboard</span>
            </Link>
            <button className="px-5 py-2.5 rounded-md font-cta font-semibold text-sm bg-brand-amber text-brand-amber-foreground hover:bg-brand-amber/90 transition-all duration-300 shadow-sm hover:shadow-md">
              Start Your Search
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-primary/5 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? "XMarkIcon" : "Bars3Icon"}
              size={24}
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-card z-40">
          <nav className="flex flex-col p-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md font-cta font-medium text-base transition-all duration-300 ${
                  isActiveRoute(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.icon && <Icon name={item.icon as any} size={20} />}
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <Link
                href="/user-dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-md font-cta font-medium text-base text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                <Icon name="UserCircleIcon" size={20} />
                <span>Dashboard</span>
              </Link>
              <button className="w-full px-5 py-3 rounded-md font-cta font-semibold text-base bg-brand-amber text-brand-amber-foreground hover:bg-brand-amber/90 transition-all duration-300 shadow-sm">
                Start Your Search
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
