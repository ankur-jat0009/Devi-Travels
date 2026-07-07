import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DeviTravelsLogo } from './Logo';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'Services', href: '#services' },
  { name: 'Tour Packages', href: '#tours' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="relative z-50">
            <DeviTravelsLogo className={isScrolled ? 'h-10' : 'h-12'} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={`text-sm font-medium hover:text-accent transition-colors ${
                      isScrolled ? 'text-foreground' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'text-foreground hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white hover:bg-white/20'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a 
              href="tel:+919481851873" 
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-semibold transition-colors ${
                isScrolled 
                  ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' 
                  : 'border-white text-white hover:bg-white hover:text-primary'
              }`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a 
              href="#booking"
              className="px-6 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden relative z-50">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isScrolled ? 'text-foreground' : 'text-white'}`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isScrolled || mobileMenuOpen ? 'text-foreground' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-foreground"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="h-px bg-border my-4" />
              
              <a 
                href="tel:+919481851873" 
                className="flex items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 border-primary text-primary font-semibold w-full"
              >
                <Phone className="w-5 h-5" />
                +91 94818 51873
              </a>
              <a 
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-4 rounded-xl bg-accent text-accent-foreground font-semibold text-center w-full shadow-lg shadow-accent/20"
              >
                Book Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};