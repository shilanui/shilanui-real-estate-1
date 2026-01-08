"use client";

import React, { useState, useEffect } from "react";
import Icon from "@/src/components/ui/AppIcon";
import ResourceCard from "./ResourceCard";
import CalculatorCard from "./CalculatorCard";
import VideoCard from "./VideoCard";
import DownloadCard from "./DownloadCard";
import FAQItem from "./FAQItem";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";
import NewsletterSignup from "./NewsletterSignup";

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  alt: string;
  icon: string;
  featured?: boolean;
}

interface Calculator {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Video {
  id: number;
  title: string;
  duration: string;
  views: string;
  thumbnail: string;
  alt: string;
  expert: string;
}

interface Download {
  id: number;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  downloads: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

const ResourceCenterInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCalculator, setActiveCalculator] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories: Category[] = [
    { id: "all", name: "All Resources", icon: "Squares2X2Icon", count: 24 },
    { id: "buying", name: "Buying Guide", icon: "HomeIcon", count: 8 },
    {
      id: "selling",
      name: "Selling Tips",
      icon: "CurrencyDollarIcon",
      count: 6,
    },
    { id: "investing", name: "Investment", icon: "ChartBarIcon", count: 5 },
    { id: "financing", name: "Financing", icon: "BanknotesIcon", count: 5 },
  ];

  const resources: Resource[] = [
    {
      id: 1,
      title: "Complete First-Time Home Buyer's Guide",
      description:
        "Everything you need to know about purchasing your first home, from pre-approval to closing day.",
      category: "Buying Guide",
      readTime: "15 min read",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_18ea73af1-1767664384639.png",
      alt: "Happy young couple holding house keys in front of their new modern home with white exterior",
      icon: "HomeIcon",
      featured: true,
    },
    {
      id: 2,
      title: "Investment Property ROI Calculator Guide",
      description:
        "Learn how to calculate returns on investment properties and make data-driven decisions.",
      category: "Investment",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1624204386084-dd8c05e32226",
      alt: "Modern luxury apartment building with glass balconies and contemporary architecture at sunset",
      icon: "ChartBarIcon",
      featured: true,
    },
    {
      id: 3,
      title: "Understanding Mortgage Types and Rates",
      description:
        "Comprehensive breakdown of fixed-rate, adjustable-rate, FHA, and VA loan options.",
      category: "Financing",
      readTime: "10 min read",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1e75efb72-1764670603153.png",
      alt: "Professional financial advisor showing mortgage documents to young couple at modern office desk",
      icon: "BanknotesIcon",
    },
    {
      id: 4,
      title: "Home Staging Secrets for Maximum Value",
      description:
        "Professional tips to prepare your home for sale and attract serious buyers quickly.",
      category: "Selling Tips",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1722942116453-55198a24aa1b",
      alt: "Beautifully staged modern living room with neutral colors, contemporary furniture, and natural lighting",
      icon: "SparklesIcon",
    },
    {
      id: 5,
      title: "Neighborhood Analysis Framework",
      description:
        "How to evaluate neighborhoods for investment potential and quality of life factors.",
      category: "Investment",
      readTime: "14 min read",
      image: "https://images.unsplash.com/photo-1659684382258-57e192658f0d",
      alt: "Aerial view of suburban neighborhood with tree-lined streets and well-maintained single-family homes",
      icon: "MapIcon",
    },
    {
      id: 6,
      title: "Pre-Approval vs Pre-Qualification Explained",
      description:
        "Understanding the difference and why pre-approval gives you a competitive advantage.",
      category: "Financing",
      readTime: "6 min read",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_18af4c431-1767793921543.png",
      alt: "Close-up of approved mortgage application stamp on financial documents with calculator nearby",
      icon: "DocumentCheckIcon",
    },
  ];

  const calculators: Calculator[] = [
    {
      id: 1,
      title: "Mortgage Affordability Calculator",
      description:
        "Determine how much house you can afford based on your income and expenses.",
      icon: "CalculatorIcon",
      color: "bg-brand-blue",
    },
    {
      id: 2,
      title: "Monthly Payment Estimator",
      description:
        "Calculate your estimated monthly mortgage payment including taxes and insurance.",
      icon: "CurrencyDollarIcon",
      color: "bg-brand-green",
    },
    {
      id: 3,
      title: "Investment ROI Calculator",
      description:
        "Analyze potential returns on investment properties with detailed projections.",
      icon: "ChartBarIcon",
      color: "bg-brand-amber",
    },
    {
      id: 4,
      title: "Closing Cost Estimator",
      description:
        "Get an estimate of all closing costs and fees for your home purchase.",
      icon: "DocumentTextIcon",
      color: "bg-secondary",
    },
  ];

  const videos: Video[] = [
    {
      id: 1,
      title: "First-Time Home Buyer Process: Step-by-Step Walkthrough",
      duration: "18:42",
      views: "12.5K",
      thumbnail:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1f930205d-1764676806048.png",
      alt: "Real estate expert presenting to camera in modern office with property photos on wall behind",
      expert: "Sarah Mitchell",
    },
    {
      id: 2,
      title: "How to Negotiate the Best Price on Your Dream Home",
      duration: "14:28",
      views: "8.3K",
      thumbnail:
        "https://img.rocket.new/generatedImages/rocket_gen_img_18e224df9-1767636708698.png",
      alt: "Professional negotiation scene with real estate agent and clients reviewing contract at conference table",
      expert: "Michael Chen",
    },
    {
      id: 3,
      title: "Investment Property Analysis: Finding Hidden Gems",
      duration: "22:15",
      views: "15.7K",
      thumbnail:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1370e02cd-1766487882870.png",
      alt: "Investment analyst pointing at property market charts and graphs on large screen display",
      expert: "David Rodriguez",
    },
    {
      id: 4,
      title: "Understanding Home Inspections: What to Look For",
      duration: "16:33",
      views: "9.2K",
      thumbnail:
        "https://img.rocket.new/generatedImages/rocket_gen_img_184103fe9-1766871992066.png",
      alt: "Home inspector examining property foundation with flashlight in basement area",
      expert: "Jennifer Adams",
    },
  ];

  const downloads: Download[] = [
    {
      id: 1,
      title: "Home Buying Checklist",
      description:
        "Complete step-by-step checklist for first-time home buyers covering every stage of the process.",
      fileType: "PDF",
      fileSize: "2.4 MB",
      downloads: "3,247",
    },
    {
      id: 2,
      title: "Property Investment Worksheet",
      description:
        "Comprehensive analysis template for evaluating investment property opportunities and ROI.",
      fileType: "XLSX",
      fileSize: "1.8 MB",
      downloads: "1,892",
    },
    {
      id: 3,
      title: "Mortgage Comparison Template",
      description:
        "Side-by-side comparison tool for evaluating different mortgage offers and lenders.",
      fileType: "PDF",
      fileSize: "1.2 MB",
      downloads: "2,654",
    },
    {
      id: 4,
      title: "Home Selling Preparation Guide",
      description:
        "Room-by-room preparation checklist to maximize your home's value before listing.",
      fileType: "PDF",
      fileSize: "3.1 MB",
      downloads: "1,523",
    },
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How much money do I need for a down payment?",
      answer:
        "Down payment requirements vary by loan type. Conventional loans typically require 3-20%, FHA loans require as little as 3.5%, and VA loans may require 0% down for qualified veterans. Your credit score, income, and the property type will influence the exact amount needed.",
    },
    {
      id: 2,
      question:
        "What is the difference between pre-qualification and pre-approval?",
      answer:
        "Pre-qualification is an informal estimate of how much you might be able to borrow based on self-reported financial information. Pre-approval is a formal process where a lender verifies your financial information and commits to lending you a specific amount, making your offer more competitive.",
    },
    {
      id: 3,
      question: "How long does the home buying process typically take?",
      answer:
        "From offer acceptance to closing, the typical home buying process takes 30-45 days. However, this timeline can vary based on financing type, inspection results, appraisal scheduling, and any negotiations that arise during the process.",
    },
    {
      id: 4,
      question: "What are closing costs and how much should I expect to pay?",
      answer:
        "Closing costs are fees associated with finalizing your home purchase, including loan origination fees, title insurance, appraisal fees, and attorney fees. Typically, buyers should expect to pay 2-5% of the home's purchase price in closing costs.",
    },
    {
      id: 5,
      question: "Should I get a home inspection?",
      answer:
        "Yes, a professional home inspection is highly recommended. It can reveal potential issues with the property that may not be visible during a showing, giving you negotiating power or the option to walk away if major problems are discovered.",
    },
    {
      id: 6,
      question: "What credit score do I need to buy a home?",
      answer:
        "While requirements vary by lender and loan type, most conventional loans require a minimum credit score of 620. FHA loans may accept scores as low as 580 with a 3.5% down payment, or 500 with a 10% down payment. Higher scores typically result in better interest rates.",
    },
  ];

  const handleCalculatorClick = (calculatorId: number) => {
    setActiveCalculator(calculatorId);
    setTimeout(() => setActiveCalculator(null), 2000);
  };

  const handleVideoClick = (videoId: number) => {
    setActiveVideo(videoId);
    setTimeout(() => setActiveVideo(null), 2000);
  };

  const handleDownloadClick = (downloadId: number) => {
    console.log(`Downloading resource ${downloadId}`);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded w-1/3"></div>
              <div className="h-6 bg-muted rounded w-2/3"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-96 bg-muted rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-brand-teal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-full mb-6">
              <Icon name="AcademicCapIcon" size={20} />
              <span className="font-cta font-semibold text-sm">
                Educational Hub
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-semibold text-foreground mb-6">
              Real Estate Resource Center
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Comprehensive guides, interactive tools, and expert insights to
              help you make confident real estate decisions
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar onSearch={setSearchQuery} />
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-headline font-semibold text-foreground mb-2">
                Featured Guides & Articles
              </h2>
              <p className="text-muted-foreground font-body">
                Expert-written content to guide your real estate journey
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-headline font-semibold text-foreground mb-3">
              Interactive Calculators & Tools
            </h2>
            <p className="text-muted-foreground font-body">
              Make informed decisions with our suite of financial calculators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculators.map((calculator) => (
              <CalculatorCard
                key={calculator.id}
                {...calculator}
                onClick={() => handleCalculatorClick(calculator.id)}
              />
            ))}
          </div>

          {activeCalculator && (
            <div className="mt-8 p-6 bg-success/10 border border-success/20 rounded-lg flex items-center space-x-3">
              <Icon
                name="CheckCircleIcon"
                size={24}
                className="text-success"
                variant="solid"
              />
              <span className="font-cta font-medium text-success">
                Calculator launched successfully! Opening in new window...
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-headline font-semibold text-foreground mb-3">
              Video Learning Library
            </h2>
            <p className="text-muted-foreground font-body">
              Watch expert tutorials and walkthroughs from industry
              professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                {...video}
                onClick={() => handleVideoClick(video.id)}
              />
            ))}
          </div>

          {activeVideo && (
            <div className="mt-8 p-6 bg-success/10 border border-success/20 rounded-lg flex items-center space-x-3">
              <Icon
                name="PlayIcon"
                size={24}
                className="text-success"
                variant="solid"
              />
              <span className="font-cta font-medium text-success">
                Loading video player...
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-headline font-semibold text-foreground mb-3">
              Downloadable Resources
            </h2>
            <p className="text-muted-foreground font-body">
              Free templates, checklists, and worksheets to support your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((download) => (
              <DownloadCard
                key={download.id}
                {...download}
                onClick={() => handleDownloadClick(download.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-semibold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground font-body">
              Quick answers to common real estate questions
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-brand-teal rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-headline font-semibold text-white mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-white/90 font-body text-lg mb-8 max-w-2xl mx-auto">
              Connect with our expert advisors for one-on-one consultation and
              tailored recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-white text-primary rounded-lg font-cta font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="PhoneIcon" size={20} />
                <span>Schedule Consultation</span>
              </button>
              <button className="px-8 py-3.5 bg-transparent border-2 border-white text-white rounded-lg font-cta font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                <span>Live Chat Support</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceCenterInteractive;
