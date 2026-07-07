import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, Phone, MessageCircle } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#0a2342] dark:from-[#05162a] dark:to-[#020b16] z-0" />
      
      {/* Karnataka Road / Travel Background Overlay */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-overlay z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://imgs.mongabay.com/wp-content/uploads/sites/30/2020/09/23213537/An_Indian_Highway_in_Karnataka_2009-768x512.jpg')" }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white pt-12 lg:pt-0"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-sm font-medium tracking-wide"
          >
            ⭐ 4.9/5 Rating • 371+ Google Reviews
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-sans">
            Your <span className="text-accent">Trusted</span> Travel Partner Across Karnataka
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            Premium Taxi Services, Airport Transfers, Luxury Car Rentals & Holiday Packages. Experience comfort and reliability with every ride.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#booking"
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/90 transition-colors shadow-[0_0_20px_rgba(244,180,0,0.3)] flex items-center gap-2"
            >
              Book Ride Now
            </a>
            <a 
              href="tel:+919481851873"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href="https://wa.me/919481851873"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20bd5a] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right Content - Booking Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
        >
          <div className="bg-white/10 dark:bg-card/40 backdrop-blur-xl border border-white/20 dark:border-white/10 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Booking</h3>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Pickup City/Location" 
                  className="w-full bg-white dark:bg-card pl-12 pr-4 py-3.5 rounded-xl border-none focus:ring-2 focus:ring-accent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Drop City/Location" 
                  className="w-full bg-white dark:bg-card pl-12 pr-4 py-3.5 rounded-xl border-none focus:ring-2 focus:ring-accent outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Pickup Date" 
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => e.target.type = e.target.value ? 'date' : 'text'}
                    className="w-full bg-white dark:bg-card pl-10 pr-4 py-3.5 rounded-xl border-none focus:ring-2 focus:ring-accent outline-none text-foreground placeholder:text-muted-foreground text-sm"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Return Date" 
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => e.target.type = e.target.value ? 'date' : 'text'}
                    className="w-full bg-white dark:bg-card pl-10 pr-4 py-3.5 rounded-xl border-none focus:ring-2 focus:ring-accent outline-none text-foreground placeholder:text-muted-foreground text-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <select defaultValue="" className="w-full bg-white dark:bg-card px-4 py-3.5 rounded-xl border-none focus:ring-2 focus:ring-accent outline-none text-foreground appearance-none cursor-pointer" aria-label="Select vehicle type">
                  <option value="" disabled>Select Vehicle Type</option>
                  <option value="sedan">Sedan (4 Seats)</option>
                  <option value="suv">SUV (7 Seats)</option>
                  <option value="innova">Toyota Innova</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none" />
              </div>

              <button type="submit" className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl mt-2 hover:bg-accent/90 transition-colors">
                Continue Booking
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};