import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, Train, Hotel, Briefcase, Car, ArrowRightLeft, 
  MapPin, Heart, Landmark, Palmtree, Map, Diamond 
} from 'lucide-react';

const SERVICES = [
  { icon: Plane, title: "Airport Transfer", desc: "Reliable pickup and drop-off to Mangalore and Bangalore airports." },
  { icon: Car, title: "Local Taxi", desc: "City travel made easy with our comfortable local cabs." },
  { icon: ArrowRightLeft, title: "Round Trip", desc: "Hassle-free two-way journeys for your weekend getaways." },
  { icon: MapPin, title: "One Way Taxi", desc: "Pay only for the drop. Affordable outstation travel." },
  { icon: Palmtree, title: "Holiday Packages", desc: "Customized tours to Coorg, Ooty, Mysore and more." },
  { icon: Landmark, title: "Temple Tours", desc: "Pilgrimage packages across coastal Karnataka and Kerala." },
  { icon: Briefcase, title: "Corporate Travel", desc: "Professional travel solutions for businesses and executives." },
  { icon: Diamond, title: "Luxury Car Rental", desc: "Premium vehicles for VIPs and special occasions." },
  { icon: Heart, title: "Wedding Cars", desc: "Elegant vehicles to make your special day memorable." },
  { icon: Hotel, title: "Hotel Pickup", desc: "Seamless transfers from your accommodation." },
  { icon: Train, title: "Railway Pickup", desc: "Punctual railway station transfers day or night." },
  { icon: Map, title: "Family Tours", desc: "Spacious vehicles perfect for large family vacations." },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive travel solutions tailored to your needs. From quick airport runs to week-long luxury holidays.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-accent transition-all group"
            >
              <service.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};