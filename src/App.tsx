import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useEffect, useState } from 'react';

// Providers
import { ThemeProvider } from './components/ThemeProvider';

// Components
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Fleet } from './components/Fleet';
import { Services } from './components/Services';
import { TourPackages } from './components/TourPackages';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { BookingForm } from './components/BookingForm';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

const queryClient = new QueryClient();

function HomePage() {
  return (
    <div className="min-h-screen w-full font-sans bg-white dark:bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Fleet />
        <Services />
        <TourPackages />
        <Gallery />
        <Reviews />
        <BookingForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 1.5s delay + 0.5s fade

    // Update document title and meta tags
    document.title = "Devi Travels | Premium Taxi, Car Rental & Tour Packages in Karnataka";
    
    // Add favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚗</text></svg>";
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚗</text></svg>";
      document.head.appendChild(newLink);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="devi-travels-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {isLoading && <LoadingScreen />}
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;