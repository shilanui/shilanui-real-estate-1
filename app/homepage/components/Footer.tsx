"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/src/components/ui/AppIcon";

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const currentYear = isHydrated ? new Date().getFullYear() : 2026;

  const footerLinks = {
    discover: [
      { label: "Property Listings", href: "/property-listings" },
      { label: "Neighborhoods", href: "/neighborhoods" },
      { label: "Market Intelligence", href: "/market-intelligence" },
      { label: "Virtual Tours", href: "/virtual-tours" },
    ],
    resources: [
      { label: "Buyer Guides", href: "/resource-center" },
      { label: "Seller Resources", href: "/seller-resources" },
      { label: "Investment Tools", href: "/investment-tools" },
      { label: "Market Reports", href: "/market-reports" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Agents", href: "/agents" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: "ShareIcon", href: "#" },
    { name: "Twitter", icon: "ChatBubbleLeftIcon", href: "#" },
    { name: "Instagram", icon: "PhotoIcon", href: "#" },
    { name: "LinkedIn", icon: "BriefcaseIcon", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="8"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M20 10L12 16V28C12 28.5304 12.2107 29.0391 12.5858 29.4142C12.9609 29.7893 13.4696 30 14 30H18V24C18 23.4696 18.2107 22.9609 18.5858 22.5858C18.9609 22.2107 19.4696 22 20 22C20.5304 22 21.0391 22.2107 21.4142 22.5858C21.7893 22.9609 22 23.4696 22 24V30H26C26.5304 30 27.0391 29.7893 27.4142 29.4142C27.7893 29.0391 28 28.5304 28 28V16L20 10Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-headline font-semibold tracking-tight">
                  Shilanui-real-estate
                </span>
                <span className="text-xs font-accent text-primary-foreground/80 tracking-wide">
                  Intelligent Property Discovery
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 mb-6 max-w-sm">
              Your trusted partner in finding the perfect property. We combine
              cutting-edge technology with local expertise to make your real
              estate journey seamless.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-cta font-semibold text-white mb-4">Discover</h3>
            <ul className="space-y-2">
              {footerLinks.discover.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-cta font-semibold text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-cta font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-cta font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-primary-foreground/80">
              <p>
                &copy; {currentYear} Shilanui-real-estate. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Icon name="ShieldCheckIcon" size={16} className="mr-1" />
                  Secure Platform
                </span>
                <span className="flex items-center">
                  <Icon name="CheckBadgeIcon" size={16} className="mr-1" />
                  Verified Listings
                </span>
              </div>
            </div>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full sm:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/60 w-full sm:w-64"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-brand-amber hover:bg-brand-amber/90 text-brand-amber-foreground rounded-r-md font-cta font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
