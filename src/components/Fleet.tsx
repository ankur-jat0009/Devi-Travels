import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, Snowflake } from 'lucide-react';

const VEHICLES = [
  { 
    id: 1, 
    name: "Toyota Etios", 
    category: "Sedan", 
    seats: 4, 
    luggage: 2, 
    ac: true, 
    image: "https://s1.cdn.autoevolution.com/images/news/toyora-etios-sedan-looks-to-conquer-indian-market-27686_1.jpg",
    desc: "Comfortable entry-level sedan, ideal for city commutes and short outstation trips."
  },
  { 
    id: 2, 
    name: "Maruti Swift Dzire", 
    category: "Sedan", 
    seats: 4, 
    luggage: 2, 
    ac: true, 
    image: "/dzire.jpg",
    desc: "India's favourite compact sedan. Fuel-efficient, smooth and spacious boot."
  },
  { 
    id: 3, 
    name: "Honda City", 
    category: "Sedan", 
    seats: 4, 
    luggage: 2, 
    ac: true, 
    image: "https://imgd-ct.aeplcdn.com/664x415/n/m4iqv8b_1943740.jpg?q=80",
    desc: "Premium sedan with a plush cabin — perfect for business and airport transfers."
  },
  { 
    id: 4, 
    name: "Toyota Innova", 
    category: "SUV", 
    seats: 6, 
    luggage: 4, 
    ac: true, 
    image: "https://imgd-ct.aeplcdn.com/664x415/n/kx6jb0b_1622179.jpg?q=80",
    desc: "The most trusted MUV in India. Commanding road presence with excellent comfort."
  },
  { 
    id: 5, 
    name: "Innova Crysta", 
    category: "SUV", 
    seats: 7, 
    luggage: 4, 
    ac: true, 
    image: "https://cdn-s3.autocarindia.com/legacy/cdni/Galleries/20201015102234_2021-Toyota-Innova-Crysta-facelift-white-studio.jpg?w=728&q=75",
    desc: "Premium MUV with captain seats, ample legroom — a favourite for family trips."
  },
  { 
    id: 6, 
    name: "Mahindra XUV", 
    category: "SUV", 
    seats: 7, 
    luggage: 4, 
    ac: true, 
    image: "https://cdn1.acedms.com/q75/photos/listing/2024-11-24/15980157bc9103f95eb79c68a1b0f05e_large.jpg.webp?width=640",
    desc: "Rugged premium SUV — ideal for hill station trips and long Karnataka drives."
  },

  { 
    id: 11, 
    name: "Mini Bus 35 Seat", 
    category: "Bus", 
    seats: 35, 
    luggage: 30, 
    ac: true, 
    image: "https://tiimg.tistatic.com/fp/1/001/787/traveller-mini-white-bus-003.jpg",
    desc: "Full-size mini bus for large groups — school trips, wedding parties, and corporate events."
  }
];

const CATEGORIES = ["All", "Sedan", "SUV", "Bus"];

export const Fleet = () => {
  const [filter, setFilter] = useState("All");

  const filteredVehicles = VEHICLES.filter(v => filter === "All" || v.category === filter);

  return (
    <section id="fleet" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Premium <span className="text-primary">Fleet</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From comfortable sedans to spacious SUVs and mini buses — every vehicle is well-maintained, sanitised and driven by professional chauffeurs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'bg-gray-100 dark:bg-card text-foreground hover:bg-gray-200 dark:hover:bg-card/80 border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredVehicles.map(vehicle => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80';
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                    <Snowflake className="w-3 h-3 text-primary" /> AC
                  </div>
                  <div className="absolute top-3 left-3 bg-primary/90 text-white px-2.5 py-1 rounded-full text-xs font-semibold">
                    {vehicle.category}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-1">{vehicle.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">{vehicle.desc}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{vehicle.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>{vehicle.luggage} Bags</span>
                    </div>
                  </div>
                  
                  <a 
                    href="#booking"
                    className="block w-full py-2.5 px-4 bg-gray-100 dark:bg-gray-800 text-center text-foreground text-sm font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Book This Vehicle
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
