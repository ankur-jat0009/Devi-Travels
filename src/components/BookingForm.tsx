import React from 'react';
import { motion } from 'framer-motion';
import { Send, Car, Calendar, MapPin, Users, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const BookingForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "We have received your request. Mr. Prem will contact you shortly to confirm the details.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="booking" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0a2342] to-primary z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-card text-foreground rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-5">
            {/* Left Info Panel */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#0a2342] to-[#05162a] text-white p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">Book Your Ride</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Fill out the form and we'll get back to you with the best quote within 15 minutes.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Instant Quote</h4>
                    <p className="text-sm text-white/60">No hidden charges</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Verified Drivers</h4>
                    <p className="text-sm text-white/60">Professional & polite</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Clean Vehicles</h4>
                    <p className="text-sm text-white/60">Sanitized before every trip</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="md:col-span-3 p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="bf-name" className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input id="bf-name" required type="text" className="w-full bg-gray-50 dark:bg-background px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent outline-none transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="bf-phone" className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input id="bf-phone" required type="tel" className="w-full bg-gray-50 dark:bg-background px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent outline-none transition-shadow" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="bf-pickup" className="block text-sm font-medium text-foreground mb-2">Pickup City *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input id="bf-pickup" required type="text" className="w-full bg-gray-50 dark:bg-background pl-10 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent outline-none transition-shadow" placeholder="Mangalore" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bf-drop" className="block text-sm font-medium text-foreground mb-2">Drop City *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input id="bf-drop" required type="text" className="w-full bg-gray-50 dark:bg-background pl-10 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent outline-none transition-shadow" placeholder="Coorg" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="bf-pickup-date" className="block text-sm font-medium text-foreground mb-2">Pickup Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input id="bf-pickup-date" required type="date" className="w-full bg-gray-50 dark:bg-background pl-10 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent outline-none transition-shadow text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bf-return-date" className="block text-sm font-medium text-foreground mb-2">Return Date (Optional)</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input id="bf-return-date" type="date" className="w-full bg-gray-50 dark:bg-background pl-10 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent outline-none transition-shadow text-sm" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="bf-vehicle" className="block text-sm font-medium text-foreground mb-2">Vehicle Type *</label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <select id="bf-vehicle" required defaultValue="" className="w-full bg-gray-50 dark:bg-background pl-10 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent outline-none transition-shadow appearance-none">
                        <option value="" disabled>Select Vehicle</option>
                        <option value="sedan">Sedan (4 Seats)</option>
                        <option value="suv">SUV (7 Seats)</option>
                        <option value="innova">Toyota Innova</option>
                        <option value="bus">Mini Bus</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bf-passengers" className="block text-sm font-medium text-foreground mb-2">Passengers *</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <input id="bf-passengers" required type="number" min="1" max="50" className="w-full bg-gray-50 dark:bg-background pl-10 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent outline-none transition-shadow" placeholder="2" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="bf-notes" className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-4 text-muted-foreground w-4 h-4" />
                    <textarea id="bf-notes" className="w-full bg-gray-50 dark:bg-background pl-10 pr-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent outline-none transition-shadow h-24 resize-none" placeholder="Any specific requirements..."></textarea>
                  </div>
                </div>

                <button type="submit" className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
                  <Send className="w-5 h-5" />
                  Send Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Internal icon helper
const CheckCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);