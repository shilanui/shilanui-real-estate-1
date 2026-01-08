import React from "react";
import AppImage from "@/src/components/ui/AppImage";
import Icon from "@/src/components/ui/AppIcon";

interface Neighborhood {
  id: number;
  name: string;
  city: string;
  image: string;
  alt: string;
  avgPrice: string;
  priceChange: string;
  priceChangePositive: boolean;
  properties: number;
  walkScore: number;
  highlights: string[];
}

const FeaturedNeighborhoods = () => {
  const neighborhoods: Neighborhood[] = [
    {
      id: 1,
      name: "Downtown Arts District",
      city: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1485448095201-016d61b199b5",
      alt: "Urban downtown street with modern art galleries, cafes, and pedestrians walking on sunny day",
      avgPrice: "$875,000",
      priceChange: "+12.5%",
      priceChangePositive: true,
      properties: 142,
      walkScore: 95,
      highlights: ["Art galleries", "Trendy restaurants", "Public transit"],
    },
    {
      id: 2,
      name: "Coastal Heights",
      city: "San Diego, CA",
      image: "https://images.unsplash.com/photo-1661037177531-646f11829db6",
      alt: "Coastal neighborhood with ocean view, palm trees, and beachfront properties at golden hour",
      avgPrice: "$1,250,000",
      priceChange: "+8.3%",
      priceChangePositive: true,
      properties: 89,
      walkScore: 78,
      highlights: ["Ocean views", "Beach access", "Family-friendly"],
    },
    {
      id: 3,
      name: "Tech Valley",
      city: "San Jose, CA",
      image: "https://images.unsplash.com/photo-1673142729889-892f5eeaff8f",
      alt: "Modern suburban neighborhood with contemporary homes, tree-lined streets, and green spaces",
      avgPrice: "$1,450,000",
      priceChange: "+15.2%",
      priceChangePositive: true,
      properties: 203,
      walkScore: 82,
      highlights: ["Tech hub", "Top schools", "Parks & trails"],
    },
    {
      id: 4,
      name: "Historic Riverside",
      city: "Sacramento, CA",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_17cdb8483-1767793919759.png",
      alt: "Historic riverside district with Victorian homes, tree-lined streets, and waterfront promenade",
      avgPrice: "$625,000",
      priceChange: "+6.8%",
      priceChangePositive: true,
      properties: 167,
      walkScore: 88,
      highlights: ["Historic charm", "Waterfront", "Community events"],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-semibold text-foreground mb-4">
            Featured Neighborhoods
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover thriving communities with strong market performance and
            exceptional lifestyle amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood.id}
              className="group bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={neighborhood.image}
                  alt={neighborhood.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Icon
                    name="MapPinIcon"
                    size={14}
                    className="text-brand-amber"
                  />
                  <span className="text-xs font-cta font-medium text-foreground">
                    {neighborhood.walkScore}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-headline font-semibold text-foreground mb-1">
                  {neighborhood.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex items-center">
                  <Icon name="MapPinIcon" size={14} className="mr-1" />
                  {neighborhood.city}
                </p>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Avg. Price
                    </p>
                    <p className="text-xl font-cta font-semibold text-foreground">
                      {neighborhood.avgPrice}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">
                      12-Month
                    </p>
                    <p
                      className={`text-sm font-cta font-semibold flex items-center ${
                        neighborhood.priceChangePositive
                          ? "text-brand-green"
                          : "text-error"
                      }`}
                    >
                      <Icon
                        name={
                          neighborhood.priceChangePositive
                            ? "ArrowTrendingUpIcon"
                            : "ArrowTrendingDownIcon"
                        }
                        size={16}
                        className="mr-1"
                      />

                      {neighborhood.priceChange}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">
                    {neighborhood.properties} properties available
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md font-cta font-medium text-sm transition-all duration-300">
                  Explore Area
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-cta font-semibold transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center space-x-2">
            <span>View All Neighborhoods</span>
            <Icon name="ArrowRightIcon" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNeighborhoods;
