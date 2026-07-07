import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Ajith V",
    text: "We had booked a Coorg trip with Devi Travels. Driver Pawan was very patient and professional. Highly recommend their service for family trips.",
    rating: 5,
    initials: "AV"
  },
  {
    id: 2,
    name: "Vignesh Krishnamoorthy",
    text: "The cab was spotless and comfortable. Driver Chendu explained every tourist place well. Amazing experience overall.",
    rating: 5,
    initials: "VK"
  },
  {
    id: 3,
    name: "Dorin Roche",
    text: "Mr Prem was very helpful. Pricing was reasonable compared to others. The driver was punctual and professional throughout the journey.",
    rating: 5,
    initials: "DR"
  },
  {
    id: 4,
    name: "Priya Shetty",
    text: "Best service for airport pickup. On time, clean car, polite driver. Will definitely use Devi Travels again for my next trip.",
    rating: 5,
    initials: "PS"
  },
  {
    id: 5,
    name: "Ravi Kumar",
    text: "Booked Ooty package. Everything was perfect. The planning, the vehicle, and the behavior of the staff. Devi Travels is simply the best.",
    rating: 5,
    initials: "RK"
  }
];

export const Reviews = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  return (
    <section id="reviews" className="py-24 bg-gray-50 dark:bg-background overflow-hidden relative">
      {/* Decorative large quotes */}
      <Quote className="absolute top-20 left-10 w-64 h-64 text-primary/5 dark:text-primary/10 -rotate-12 pointer-events-none" />
      <Quote className="absolute bottom-20 right-10 w-64 h-64 text-accent/5 dark:text-accent/10 rotate-12 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full mb-6"></div>
            <p className="text-muted-foreground">
              Don't just take our word for it. Read about the experiences of our happy customers who trusted us with their journeys.
            </p>
          </div>

          <div className="flex items-center gap-6 bg-white dark:bg-card p-6 rounded-2xl shadow-md border border-border">
            <div className="text-5xl font-bold text-foreground">4.9</div>
            <div>
              <div className="flex gap-1 text-accent mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                371+ Google Reviews
              </div>
            </div>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {REVIEWS.map((review) => (
              <div key={review.id} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6">
                <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border h-full flex flex-col relative">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-muted/30" />
                  
                  <div className="flex gap-1 text-accent mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed mb-8 flex-grow italic">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};