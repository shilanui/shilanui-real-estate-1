"use client";

import React, { useState, useEffect } from "react";
import AppImage from "@/src/components/ui/AppImage";
import Icon from "@/src/components/ui/AppIcon";

interface Story {
  id: number;
  clientName: string;
  clientImage: string;
  clientAlt: string;
  propertyImage: string;
  propertyAlt: string;
  location: string;
  type: string;
  testimonial: string;
  soldPrice: string;
  daysOnMarket: number;
  agentName: string;
}

const SuccessStories = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const stories: Story[] = [
    {
      id: 1,
      clientName: "Sarah & Michael Chen",
      clientImage:
        "https://images.unsplash.com/photo-1583444199419-e6b83744a705",
      clientAlt:
        "Happy Asian couple in casual attire smiling together outdoors in natural lighting",
      propertyImage:
        "https://img.rocket.new/generatedImages/rocket_gen_img_13ab31cce-1765297074779.png",
      propertyAlt:
        "Modern two-story family home with white exterior, large windows, and landscaped front yard",
      location: "Palo Alto, CA",
      type: "First-Time Buyers",
      testimonial:
        "Shilanui-real-estate made our first home purchase seamless. The market insights helped us make a confident offer, and we found our dream home in just 3 weeks. The virtual tours saved us so much time!",
      soldPrice: "$1,250,000",
      daysOnMarket: 21,
      agentName: "Jennifer Martinez",
    },
    {
      id: 2,
      clientName: "David Thompson",
      clientImage:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1f5688881-1763294086051.png",
      clientAlt:
        "Professional businessman with beard in navy suit smiling confidently at camera",
      propertyImage:
        "https://img.rocket.new/generatedImages/rocket_gen_img_122316905-1765261230654.png",
      propertyAlt:
        "Luxury waterfront property with modern architecture, infinity pool, and ocean views at dusk",
      location: "Newport Beach, CA",
      type: "Investment Property",
      testimonial:
        "The investment analytics tools were game-changing. I identified a high-growth area and secured a property that has already appreciated 15% in 6 months. Best investment decision I have made.",
      soldPrice: "$2,850,000",
      daysOnMarket: 14,
      agentName: "Robert Kim",
    },
    {
      id: 3,
      clientName: "Emily Rodriguez",
      clientImage:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1f225624a-1763293838525.png",
      clientAlt:
        "Young Hispanic woman with long dark hair in professional attire smiling warmly",
      propertyImage:
        "https://images.unsplash.com/photo-1597203294638-a359e99f4262",
      propertyAlt:
        "Charming suburban home with brick facade, white trim, and flower garden in front",
      location: "San Diego, CA",
      type: "Relocation",
      testimonial:
        "Moving from out of state was stressful, but Shilanui-real-estate neighborhood guides gave me confidence. I found the perfect community for my family without multiple trips. The virtual tours were incredibly detailed.",
      soldPrice: "$875,000",
      daysOnMarket: 18,
      agentName: "Amanda Foster",
    },
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isHydrated, stories.length]);

  if (!isHydrated) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-96 bg-card rounded-lg animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real clients, real results. Discover how Shilanui-real-estate helped
            people find their perfect properties
          </p>
        </div>

        <div className="relative">
          <div className="bg-card border border-border rounded-lg shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <AppImage
                  src={stories[currentStory].propertyImage}
                  alt={stories[currentStory].propertyAlt}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-brand-amber text-brand-amber-foreground px-4 py-2 rounded-md font-cta font-semibold text-sm">
                  {stories[currentStory].type}
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <AppImage
                      src={stories[currentStory].clientImage}
                      alt={stories[currentStory].clientAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-semibold text-foreground">
                      {stories[currentStory].clientName}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Icon name="MapPinIcon" size={14} className="mr-1" />
                      {stories[currentStory].location}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <Icon
                    name="ChatBubbleLeftIcon"
                    size={32}
                    className="text-primary/20 mb-4"
                  />
                  <p className="text-lg text-foreground leading-relaxed italic">
                    &quot;{stories[currentStory].testimonial}&quot;
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Sold Price
                    </p>
                    <p className="text-lg font-cta font-semibold text-brand-green">
                      {stories[currentStory].soldPrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Days on Market
                    </p>
                    <p className="text-lg font-cta font-semibold text-foreground">
                      {stories[currentStory].daysOnMarket}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Agent</p>
                    <p className="text-sm font-cta font-medium text-foreground">
                      {stories[currentStory].agentName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStory(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentStory
                            ? "bg-primary w-8"
                            : "bg-border"
                        }`}
                        aria-label={`View story ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button className="text-primary hover:text-primary/80 font-cta font-medium text-sm flex items-center space-x-1 transition-colors duration-300">
                    <span>Read Full Story</span>
                    <Icon name="ArrowRightIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-cta font-semibold transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center space-x-2">
            <span>View All Success Stories</span>
            <Icon name="ArrowRightIcon" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
