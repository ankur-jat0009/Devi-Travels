import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Users, Car, ShieldCheck, Banknote, Clock, Plane, Heart, Gem, Map } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const REASONS = [
  { icon: Star, title: "4.9 Google Rating", desc: "Top-rated travel service" },
  { icon: Users, title: "371+ Happy Customers", desc: "Trust in every journey" },
  { icon: ShieldCheck, title: "Professional Drivers", desc: "Verified & experienced" },
  { icon: Car, title: "Clean Sanitized Cars", desc: "Spotless interiors always" },
  { icon: Banknote, title: "Affordable Prices", desc: "Transparent billing" },
  { icon: Clock, title: "24x7 Support", desc: "Always here for you" },
  { icon: Plane, title: "Airport Pickup", desc: "Punctual transfers" },
  { icon: Heart, title: "Safe Family Travel", desc: "Comfort for loved ones" },
  { icon: Gem, title: "Luxury Vehicles", desc: "Premium fleet available" },
  { icon: Map, title: "Local Experts", desc: "We know every route" },
];

const Counter = ({ end, duration = 2, label }: { end: number, duration?: number, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary/90 mb-2">
        {count}{label === "Rating" ? ".9" : "+"}
      </div>
      <div className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
};

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Devi Travels</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with Karnataka's most trusted travel partner. We deliver premium service without the corporate coldness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto border-b border-border pb-20">
          <Counter end={4} label="Rating" />
          <Counter end={371} label="Reviews" />
          <Counter end={50} label="Vehicles" />
          <Counter end={15} label="Years Exp." />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {REASONS.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};