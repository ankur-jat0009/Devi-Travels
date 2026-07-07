import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const PHOTOS = [
  // Cars
  { id: 1, category: "Cars", url: "/dzire.jpg", alt: "Maruti Swift Dzire cab" },
  { id: 2, category: "Cars", url: "https://s1.cdn.autoevolution.com/images/news/toyora-etios-sedan-looks-to-conquer-indian-market-27686_1.jpg", alt: "Toyota Etios sedan" },
  { id: 3, category: "Cars", url: "https://imgd-ct.aeplcdn.com/664x415/n/m4iqv8b_1943740.jpg?q=80", alt: "Honda City premium sedan" },
  // SUVs
  { id: 4, category: "SUVs", url: "https://imgd-ct.aeplcdn.com/664x415/n/kx6jb0b_1622179.jpg?q=80", alt: "Toyota Innova Hycross" },
  { id: 5, category: "SUVs", url: "https://cdn-s3.autocarindia.com/legacy/cdni/Galleries/20201015102234_2021-Toyota-Innova-Crysta-facelift-white-studio.jpg?w=728&q=75", alt: "Toyota Innova Crysta" },
  { id: 6, category: "SUVs", url: "https://cdn1.acedms.com/q75/photos/listing/2024-11-24/15980157bc9103f95eb79c68a1b0f05e_large.jpg.webp?width=640", alt: "Mahindra XUV SUV" },
  // Destinations
  { id: 7, category: "Destinations", url: "https://images7.alphacoders.com/593/thumbbig-593192.webp", alt: "Mysore Palace illuminated at night" },
  { id: 8, category: "Destinations", url: "https://storage.googleapis.com/stateless-www-justwravel-com/2025/12/f31c000d-worlds-largest-statue-of-hindu-god-lord-shiva-located-in-murudeshwara-or-murudeshwar.jpg", alt: "Murudeshwar Shiva Statue" },
  { id: 9, category: "Destinations", url: "https://travelseewrite.com/wp-content/uploads/2022/04/Mercara-Gold-Estate-Coffee-and-Spices-Plantation-Coorg-min-1024x640.jpeg", alt: "Coorg coffee plantation" },
  { id: 10, category: "Destinations", url: "https://i0.wp.com/stampedmoments.com/wp-content/uploads/2025/07/ooty-landscape.jpg?fit=1024,576&ssl=1", alt: "Ooty Nilgiris landscape" },
  // Travel
  { id: 11, category: "Travel", url: "https://imgs.mongabay.com/wp-content/uploads/sites/30/2020/09/23213537/An_Indian_Highway_in_Karnataka_2009-768x512.jpg", alt: "Karnataka highway road trip" },
  { id: 12, category: "Travel", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/NH-212_through_Bandhipur_forest_roads_in_Kerala_India.jpg", alt: "Bandipur forest road Karnataka" },

];

const CATEGORIES = ["All", "Cars", "SUVs", "Destinations", "Travel"];

export const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; alt: string } | null>(null);

  const filteredPhotos = PHOTOS.filter(p => filter === "All" || p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse of our premium fleet and the stunning destinations we cover across Karnataka and South India.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'bg-gray-100 dark:bg-card text-foreground hover:bg-gray-200 dark:hover:bg-card/80 border border-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl overflow-hidden break-inside-avoid shadow-sm cursor-pointer"
                onClick={() => setSelectedPhoto({ url: photo.url, alt: photo.alt })}
              >
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                  <p className="text-white text-xs font-medium px-4 text-center">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white/70 text-center text-sm mt-3">{selectedPhoto.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
