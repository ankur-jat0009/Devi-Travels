import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What areas do you cover?",
    answer: "We cover all major locations across Karnataka, including Mangaluru, Coorg, Mysore, Ooty, Kodaikanal, Udupi, and Chikmagalur. We also offer outstation services and airport transfers to Bangalore and Kerala."
  },
  {
    question: "How do I book a ride?",
    answer: "You can book a ride by filling out the booking form on this website, calling us directly at +91 94818 51873, or sending us a message on WhatsApp. We provide quick confirmations."
  },
  {
    question: "Do you offer one-way trips?",
    answer: "Yes, we offer one-way taxi services across Karnataka. You only pay for the drop, making it an affordable option for intercity travel."
  },
  {
    question: "Are prices negotiable?",
    answer: "We offer highly competitive and transparent pricing. While our base rates are fixed to ensure quality service and fair driver compensation, we do offer special packages for multi-day tours."
  },
  {
    question: "Do drivers speak English?",
    answer: "Yes, the majority of our professional drivers can communicate in English, Kannada, and Hindi. They are well-trained to assist tourists and corporate clients."
  },
  {
    question: "Is 24/7 support available?",
    answer: "Absolutely. Our customer support and services operate 24/7. Whether you need a late-night airport pickup or emergency assistance during a tour, we are always reachable."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-white dark:bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 dark:bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};