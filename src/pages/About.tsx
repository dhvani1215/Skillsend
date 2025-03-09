
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Lightbulb, Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-[#050A44]/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SkillShare</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building a community where people can exchange skills and knowledge,
              creating meaningful connections while helping each other grow.
            </p>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="People sharing skills" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  SkillShare was founded on a simple idea: everyone has valuable skills to share,
                  and everyone has something they want to learn. We believe that by connecting
                  these individuals, we can create a more collaborative and skilled society.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our platform facilitates skill exchanges between community members,
                  whether they're separated by a few blocks or different continents.
                  By sharing what we know, we all grow together.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-[#B3B4BD]/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-[#0A21C0]/10 flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-[#0A21C0]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Community</h3>
                  <p className="text-muted-foreground text-center">
                    We believe in the power of people coming together to share and learn from each other.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-[#0A21C0]/10 flex items-center justify-center mx-auto">
                    <Lightbulb className="h-6 w-6 text-[#0A21C0]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Growth</h3>
                  <p className="text-muted-foreground text-center">
                    Learning is a lifelong journey, and we're committed to supporting personal development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-[#0A21C0]/10 flex items-center justify-center mx-auto">
                    <Heart className="h-6 w-6 text-[#0A21C0]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Inclusivity</h3>
                  <p className="text-muted-foreground text-center">
                    Everyone has something valuable to offer, regardless of background or experience level.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-[#0A21C0]/10 flex items-center justify-center mx-auto">
                    <Globe className="h-6 w-6 text-[#0A21C0]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Accessibility</h3>
                  <p className="text-muted-foreground text-center">
                    We strive to make skill-sharing accessible to everyone, breaking down traditional barriers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Founder & CEO",
                  bio: "Former education consultant with a passion for community building",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Miguel Rodriguez",
                  role: "CTO",
                  bio: "Tech enthusiast focused on making skill-sharing accessible to all",
                  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                {
                  name: "Aisha Patel",
                  role: "Community Manager",
                  bio: "Dedicated to fostering meaningful connections between members",
                  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
              ].map((member, index) => (
                <Card key={index} className="border-none shadow-md overflow-hidden">
                  <div className="aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-xl">{member.name}</h3>
                    <p className="text-[#0A21C0] font-medium">{member.role}</p>
                    <p className="mt-2 text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
