import React from 'react';
import { motion } from 'framer-motion';
import { DeviTravelsLogo } from './Logo';

export const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
      onAnimationComplete={(definition) => {
        // We handle removal in App.tsx by setting state
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-background"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <DeviTravelsLogo className="h-16 mb-8" />
        
        <div className="flex flex-col items-center gap-4">
          <div className="h-2 w-48 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Loading...
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};