
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Code, Languages, Music, Palette, Utensils, Dumbbell } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SkillCard from '@/components/SkillCard';
import SkillCategory from '@/components/SkillCategory';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { subscribeToNewsletter } from '@/utils/emailService';
import { skillsData } from '@/data/skillsData';

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubscribing, setIsSubscribing] = useState(false);
  // Show all skills from the skillsData array, limited to 6 for the featured section
  const featuredSkills = skillsData.slice(0, 6);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      setIsSubscribing(true);
      await subscribeToNewsletter(email);
      
      toast.success("Thanks for subscribing! We'll keep you updated.");
      setEmail('');
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.error("Subscription error:", error);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-secondary/50 to-transparent opacity-70 -z-10"></div>
        <div className="absolute inset-0 bg-noise-subtle opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            Share Your Skills.<br />Learn from Others.
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-bottom" style={{ animationDelay: '100ms' }}>
            Join our community where people exchange their knowledge and expertise. Find someone to teach you something new or share your skills with others.
          </p>
          
          <div className="mt-10 flex justify-center animate-slide-in-bottom" style={{ animationDelay: '200ms' }}>
            <Button size="lg" variant="outline" asChild>
              <Link to="/share-skills">Share Your Skills</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Explore Skill Categories</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Browse through different skills categories and find what interests you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <SkillCategory 
              icon={<Code className="h-6 w-6 text-white" />}
              name="Technology"
              count={145}
              color="bg-primary"
            />
            
            <SkillCategory 
              icon={<Languages className="h-6 w-6 text-white" />}
              name="Languages"
              count={98}
              color="bg-accent"
            />
            
            <SkillCategory 
              icon={<Palette className="h-6 w-6 text-white" />}
              name="Arts & Crafts"
              count={76}
              color="bg-[#EDC7B7]"
            />
            
            <SkillCategory 
              icon={<Music className="h-6 w-6 text-white" />}
              name="Music"
              count={84}
              color="bg-[#123C69]"
            />
            
            <SkillCategory 
              icon={<Utensils className="h-6 w-6 text-white" />}
              name="Cooking"
              count={62}
              color="bg-[#AC3B61]"
            />
            
            <SkillCategory 
              icon={<Dumbbell className="h-6 w-6 text-white" />}
              name="Fitness"
              count={53}
              color="bg-[#BAB2B5]"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Featured Skills</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Skills shared by our community members.
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
                <div key={n} className="h-72 rounded-lg bg-slate-100 animate-pulse"></div>
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
      
      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Exchange skills with people in your community in a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                <span className="text-white text-xl font-semibold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
              <p className="text-muted-foreground">
                Sign up and list the skills you can offer and the ones you want to learn.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#EDC7B7] flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-semibold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Matches</h3>
              <p className="text-muted-foreground">
                Browse through profiles to find people with complementary skills.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                <span className="text-white text-xl font-semibold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Exchange Skills</h3>
              <p className="text-muted-foreground">
                Connect and arrange skill exchange sessions on your own schedule.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card p-10 rounded-2xl text-center bg-gradient-to-br from-[#EEE2DC]/80 to-[#EDC7B7]/50">
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about new skills and community events.
            </p>
            
            <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" disabled={isSubscribing}>
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            
            <p className="mt-4 text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
