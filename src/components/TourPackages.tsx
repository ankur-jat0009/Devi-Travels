import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';

const PACKAGES = [
  {
    id: 1,
    title: "Coorg Nature Escape",
    image: "https://travelseewrite.com/wp-content/uploads/2022/04/Mercara-Gold-Estate-Coffee-and-Spices-Plantation-Coorg-min-1024x640.jpeg",
    duration: "2 Days / 1 Night",
    from: "Mangaluru",
    highlights: ["Abbey Falls", "Raja's Seat", "Coffee Plantation Tour"]
  },
  {
    id: 2,
    title: "Mysore Heritage Tour",
    image: "https://images7.alphacoders.com/593/thumbbig-593192.webp",
    duration: "1 Day Trip",
    from: "Mangaluru",
    highlights: ["Mysore Palace", "Chamundi Hill", "Brindavan Gardens"]
  },
  {
    id: 3,
    title: "Ooty Queen of Hills",
    image: "https://i0.wp.com/stampedmoments.com/wp-content/uploads/2025/07/ooty-landscape.jpg?fit=1024,576&ssl=1",
    duration: "3 Days / 2 Nights",
    from: "Mangaluru",
    highlights: ["Botanical Garden", "Ooty Lake", "Nilgiri Toy Train"]
  },
  {
    id: 4,
    title: "Kodaikanal Retreat",
    image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1709883449_view_from_upper_lake.jpg.webp",
    duration: "3 Days / 2 Nights",
    from: "Mangaluru",
    highlights: ["Kodai Lake", "Pillar Rocks", "Coaker's Walk"]
  },
  {
    id: 5,
    title: "Murudeshwar Coastal",
    image: "https://storage.googleapis.com/stateless-www-justwravel-com/2025/12/f31c000d-worlds-largest-statue-of-hindu-god-lord-shiva-located-in-murudeshwara-or-murudeshwar.jpg",
    duration: "1 Day Trip",
    from: "Mangaluru",
    highlights: ["Lord Shiva Statue", "Murudeshwar Beach", "Kanduka Hill Temple"]
  },
  {
    id: 6,
    title: "Chikmagalur Coffee Trail",
    image: "https://varenya.life/wp-content/uploads/2025/08/17.chikmagalur-trip.jpg",
    duration: "2 Days / 1 Night",
    from: "Mangaluru",
    highlights: ["Mullayanagiri Peak", "Hebbe Falls", "Baba Budangiri"]
  }
];

export const TourPackages = () => {
  return (
    <section id="tours" className="py-24 bg-gray-50 dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular <span className="text-primary">Tour Packages</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the beauty of Karnataka and South India with our carefully curated tour packages. Comfortable vehicles and expert drivers included.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-white/90">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-accent" /> {pkg.duration}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-accent" /> From {pkg.from}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" /> Trip Highlights
                  </h4>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#booking"
                  className="block w-full py-3 px-4 bg-primary text-primary-foreground text-center font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  Book Package
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
