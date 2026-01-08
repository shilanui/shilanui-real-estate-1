"use client";

import React, { useState } from "react";
import Icon from "@/src/components/ui/AppIcon";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-start justify-between text-left transition-colors duration-300 hover:text-primary"
      >
        <span className="text-base font-headline font-semibold text-foreground pr-4">
          {question}
        </span>
        <Icon
          name="ChevronDownIcon"
          size={20}
          className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted-foreground font-body leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
