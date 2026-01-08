"use client";

import React, { useState } from "react";
import Icon from "@/src/components/ui/AppIcon";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-brand-teal rounded-xl p-8 md:p-10">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="EnvelopeIcon" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-headline font-semibold text-white mb-3">
          Stay Informed with Expert Insights
        </h2>
        <p className="text-white/90 font-body text-base mb-8">
          Get weekly real estate tips, market updates, and exclusive educational
          content delivered to your inbox.
        </p>
        {!isSubmitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3.5 bg-white rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-accent text-accent-foreground rounded-lg font-cta font-semibold text-sm hover:bg-accent/90 transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap"
            >
              <span>Subscribe</span>
              <Icon name="ArrowRightIcon" size={18} />
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-2 text-white">
            <Icon name="CheckCircleIcon" size={24} variant="solid" />
            <span className="font-cta font-medium">
              Thank you for subscribing!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
