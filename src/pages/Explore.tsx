
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Languages, Music, Palette, Utensils, Dumbbell, ArrowRight } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SkillCategory from '@/components/SkillCategory';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { skillsData } from '@/data/skillsData';
import SkillCard, { SkillProps } from '@/components/SkillCard';

const Explore = () => {
  const [featuredSkills, setFeaturedSkills] = useState<SkillProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and get a random 3 skills from the data
    const timer = setTimeout(() => {
      const shuffled = [...skillsData].sort(() => 0.5 - Math.random());
      setFeaturedSkills(shuffled.slice(0, 3));
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#050A44]/10 to-transparent opacity-70 -z-10"></div>
        <div className="absolute inset-0 bg-noise-subtle opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in">
            Explore Our Skill Categories
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-in-bottom" style={{ animationDelay: '100ms' }}>
            Discover specialized skills across different categories. Whether you want to learn programming, music, cooking or languages, find the perfect match for your interests.
          </p>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Popular Categories</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Browse through skill categories and find what interests you the most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <SkillCategory 
              icon={<Code className="h-6 w-6 text-white" />}
              name="Technology"
              count={145}
              color="bg-blue-500"
            />
            
            <SkillCategory 
              icon={<Languages className="h-6 w-6 text-white" />}
              name="Languages"
              count={98}
              color="bg-green-500"
            />
            
            <SkillCategory 
              icon={<Palette className="h-6 w-6 text-white" />}
              name="Arts & Crafts"
              count={76}
              color="bg-purple-500"
            />
            
            <SkillCategory 
              icon={<Music className="h-6 w-6 text-white" />}
              name="Music"
              count={84}
              color="bg-pink-500"
            />
            
            <SkillCategory 
              icon={<Utensils className="h-6 w-6 text-white" />}
              name="Cooking"
              count={62}
              color="bg-amber-500"
            />
            
            <SkillCategory 
              icon={<Dumbbell className="h-6 w-6 text-white" />}
              name="Fitness"
              count={53}
              color="bg-red-500"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Trending Skills</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Discover the most popular skills our community is sharing right now.
              </p>
            </div>
            
            <Button variant="outline" asChild>
              <Link to="/skills" className="hidden sm:flex group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-72 rounded-lg bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-10 sm:hidden">
            <Button variant="outline" asChild>
              <Link to="/skills" className="group">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Explore;
