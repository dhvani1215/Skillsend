
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ExploreTopics from '@/components/ExploreTopics';
import { Dumbbell } from 'lucide-react';

const FitnessSkills = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-theme-tertiary/20 to-transparent opacity-70 -z-10"></div>
        <div className="absolute inset-0 bg-noise-subtle opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex flex-col items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-theme-tertiary flex items-center justify-center mb-4">
              <Dumbbell className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold">Fitness Skills</h1>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Explore workout routines, nutrition advice, and training techniques from fitness enthusiasts in our community.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-72 rounded-lg bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <ExploreTopics category="Fitness" />
          )}
        </div>
      </section>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default FitnessSkills;
