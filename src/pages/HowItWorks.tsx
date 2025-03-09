
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
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
            How SkillShare Works
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-bottom">
            Our platform makes it easy to connect with others, exchange skills, and grow together as a community.
          </p>
        </div>
      </section>
      
      {/* Step by Step Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl p-8 shadow-subtle flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-theme-blue text-white flex items-center justify-center mb-6 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
              <p className="text-muted-foreground mb-6">
                Sign up and list the skills you can offer and the ones you want to learn. Add details about your experience and availability.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-subtle flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-theme-blue text-white flex items-center justify-center mb-6 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4">Find Matches</h3>
              <p className="text-muted-foreground mb-6">
                Browse through profiles or use our search feature to find people with complementary skills. Filter by location, category, or rating.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link to="/skills">Browse Skills</Link>
              </Button>
            </div>
            
            <div className="bg-background rounded-xl p-8 shadow-subtle flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-theme-blue text-white flex items-center justify-center mb-6 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4">Connect & Exchange</h3>
              <p className="text-muted-foreground mb-6">
                Message potential skill partners and arrange sessions. After successful exchanges, leave reviews to help the community.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link to="/messages">Message Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Is SkillShare free to use?</h3>
              <p className="text-muted-foreground">
                Yes, our basic platform is completely free to use. We believe in the power of community and skill exchange without barriers.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How do I know if someone is reliable?</h3>
              <p className="text-muted-foreground">
                Our review and rating system helps ensure quality interactions. Users can rate their experiences, providing valuable feedback for the community.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can I offer more than one skill?</h3>
              <p className="text-muted-foreground">
                Absolutely! You can list multiple skills that you're willing to share. The more you offer, the more opportunities you'll have to connect with others.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How do skill exchanges work?</h3>
              <p className="text-muted-foreground">
                You can either exchange skills directly (I teach you Spanish, you teach me photography) or use our point system to track exchanges across different users.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join our community today and start sharing your skills and learning from others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/signup">Create an Account</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/skills">Browse Skills</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
