import React from 'react';
import { MapPin, Phone, Clock, Star, MessageCircle, Navigation } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or need to book a ride urgently? Reach out to us. We are available 24/7 to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-white dark:bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
            
            <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    BAJAL MELMANE HOUSE, 3-136-2,<br />
                    BAJAL PADPU, Bajal Jalligudde,<br />
                    Mangaluru, Karnataka – 575009
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                  <p className="text-muted-foreground mb-1">+91 94818 51873 (Prem)</p>
                  <p className="text-muted-foreground">+91 73377 71451</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">Open 24 Hours, 7 Days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-1">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Customer Rating</h4>
                  <p className="text-muted-foreground">4.9/5 | 371+ Google Reviews</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 relative z-10">
              <a 
                href="tel:+919481851873"
                className="flex-1 bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" /> Call
              </a>
              <a 
                href="https://wa.me/919481851873"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a 
                href="https://www.google.com/maps/place/Devi+Travels/@12.8622979,74.891673,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-100 dark:bg-gray-800 text-foreground font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Navigation className="w-5 h-5" /> Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-border bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3!2d74.88942!3d12.86230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35973ffffffc5%3A0xa02a03885bc0bea9!2sDevi%20Travels!5e0!3m2!1sen!2sin!4v1720272000000!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Devi Travels - Mangaluru Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};