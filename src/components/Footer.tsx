import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { DeviTravelsLogo } from './Logo';
import { SiGoogle, SiFacebook, SiInstagram } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="bg-[#05162a] pt-20 pb-6 text-white border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <DeviTravelsLogo className="h-12 mb-6" />
            <p className="text-white/70 mb-8 leading-relaxed">
              Your trusted travel partner in Karnataka. We provide premium taxi services, luxury car rentals, and memorable tour packages with professional drivers.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <SiGoogle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Fleet', 'Services', 'Tour Packages', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
                    <span className="text-accent/50 text-sm">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {['Airport Transfer', 'Outstation Taxi', 'Local City Rides', 'Car Rental', 'Tour Packages', 'Corporate Travel'].map((service) => (
                <li key={service}>
                  <span className="text-white/70 flex items-center gap-2">
                    <span className="text-accent/50 text-sm">›</span> {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>BAJAL MELMANE HOUSE, 3-136-2, BAJAL PADPU, Mangaluru 575009</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+919481851873" className="hover:text-white transition-colors">+91 94818 51873</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MessageCircle className="w-5 h-5 text-accent shrink-0" />
                <a href="https://wa.me/919481851873" className="hover:text-white transition-colors">+91 94818 51873</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Devi Travels. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};