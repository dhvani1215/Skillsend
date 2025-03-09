
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Guidelines = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#050A44]/10 to-transparent opacity-70 -z-10"></div>
        <div className="absolute inset-0 bg-noise-subtle opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-8">
            Community Guidelines
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            These guidelines help ensure SkillShare remains a positive, respectful, and productive community for everyone.
          </p>
          
          <div className="bg-background rounded-xl p-8 shadow-subtle">
            <h2 className="text-2xl font-semibold mb-6">Respect & Inclusivity</h2>
            <div className="space-y-4">
              <p>
                <strong>Be respectful:</strong> Treat all community members with respect, regardless of background, skill level, or experience.
              </p>
              <p>
                <strong>Be inclusive:</strong> Our community welcomes people of all backgrounds, identities, and skill levels. Discrimination of any kind is not tolerated.
              </p>
              <p>
                <strong>Be patient:</strong> Remember that people learn at different paces and have different teaching styles. Patience is key to successful skill exchanges.
              </p>
            </div>
          </div>
          
          <div className="bg-background rounded-xl p-8 shadow-subtle mt-8">
            <h2 className="text-2xl font-semibold mb-6">Communication & Conduct</h2>
            <div className="space-y-4">
              <p>
                <strong>Clear communication:</strong> Be clear about your expectations, availability, and skill level when arranging exchanges.
              </p>
              <p>
                <strong>Constructive feedback:</strong> When providing feedback, be constructive and kind. Focus on helping others improve.
              </p>
              <p>
                <strong>Appropriate content:</strong> Share content that is appropriate and relevant to the skill being exchanged. No offensive, illegal, or harmful content.
              </p>
              <p>
                <strong>Reliable commitments:</strong> Honor your commitments. If you need to reschedule or cancel, provide as much notice as possible.
              </p>
            </div>
          </div>
          
          <div className="bg-background rounded-xl p-8 shadow-subtle mt-8">
            <h2 className="text-2xl font-semibold mb-6">Safety & Privacy</h2>
            <div className="space-y-4">
              <p>
                <strong>Personal information:</strong> Be cautious about sharing personal information. Use the platform's messaging system when possible.
              </p>
              <p>
                <strong>Meeting safety:</strong> For in-person skill exchanges, meet in public places initially. Consider virtual meetings when possible.
              </p>
              <p>
                <strong>Report concerns:</strong> If you encounter content or behavior that violates our guidelines, please report it immediately.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              By using SkillShare, you agree to follow these community guidelines. Violations may result in warnings or account suspension.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Guidelines;
