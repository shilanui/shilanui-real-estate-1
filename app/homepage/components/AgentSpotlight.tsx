import React from "react";
import AppImage from "@/src/components/ui/AppImage";
import Icon from "@/src/components/ui/AppIcon";

interface Agent {
  id: number;
  name: string;
  image: string;
  alt: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  propertiesSold: number;
  avgSalePrice: string;
  specialties: string[];
}

const AgentSpotlight = () => {
  const topAgents: Agent[] = [
    {
      id: 1,
      name: "Jennifer Martinez",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_121a098e2-1763295710359.png",
      alt: "Professional Hispanic woman with long dark hair in business attire smiling confidently",
      title: "Senior Real Estate Advisor",
      location: "Silicon Valley, CA",
      rating: 4.9,
      reviews: 127,
      propertiesSold: 89,
      avgSalePrice: "$1.2M",
      specialties: [
        "Luxury Homes",
        "First-Time Buyers",
        "Investment Properties",
      ],
    },
    {
      id: 2,
      name: "Robert Kim",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1c15365ad-1763294170508.png",
      alt: "Asian businessman in dark suit with glasses smiling professionally at camera",
      title: "Investment Property Specialist",
      location: "Los Angeles, CA",
      rating: 5.0,
      reviews: 94,
      propertiesSold: 156,
      avgSalePrice: "$2.5M",
      specialties: ["Commercial", "Multi-Family", "Investment Analysis"],
    },
    {
      id: 3,
      name: "Amanda Foster",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_183106c5b-1763295018262.png",
      alt: "Blonde woman in professional blazer with warm smile in modern office setting",
      title: "Residential Sales Expert",
      location: "San Diego, CA",
      rating: 4.8,
      reviews: 203,
      propertiesSold: 234,
      avgSalePrice: "$875K",
      specialties: ["Family Homes", "Relocation", "Coastal Properties"],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Top-Rated Agents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with verified professionals who deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-card border border-border rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <AppImage
                  src={agent.image}
                  alt={agent.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
                  <Icon
                    name="StarIcon"
                    size={16}
                    className="text-brand-amber"
                    variant="solid"
                  />
                  <span className="text-sm font-cta font-semibold text-foreground">
                    {agent.rating}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-1">
                  {agent.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {agent.title}
                </p>
                <p className="text-sm text-muted-foreground mb-4 flex items-center">
                  <Icon name="MapPinIcon" size={14} className="mr-1" />
                  {agent.location}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-border">
                  <div className="text-center">
                    <p className="text-2xl font-cta font-semibold text-primary">
                      {agent.propertiesSold}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Properties Sold
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-cta font-semibold text-primary">
                      {agent.reviews}
                    </p>
                    <p className="text-xs text-muted-foreground">Reviews</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-cta font-semibold text-primary">
                      {agent.avgSalePrice}
                    </p>
                    <p className="text-xs text-muted-foreground">Avg. Sale</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-md"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-cta font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <Icon name="ChatBubbleLeftRightIcon" size={18} />
                  <span>Contact Agent</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md font-cta font-semibold transition-all duration-300 inline-flex items-center space-x-2">
            <span>View All Agents</span>
            <Icon name="ArrowRightIcon" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgentSpotlight;
