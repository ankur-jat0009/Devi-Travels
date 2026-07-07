import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white dark:bg-card text-foreground shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-border"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        href="tel:+919481851873"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-transform hover:scale-110"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      <motion.a
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        href="https://wa.me/919481851873"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-transform hover:scale-110"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
};