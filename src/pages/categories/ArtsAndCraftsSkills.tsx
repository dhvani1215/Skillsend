
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SkillCard, { SkillProps } from '@/components/SkillCard';
import { skillsData } from '@/data/skillsData';
import { Palette } from 'lucide-react';

const ArtsAndCraftsSkills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState<SkillProps[]>([]);

  useEffect(() => {
    // Filter skills by Arts category
    const artsSkills = skillsData.filter(skill => skill.category === 'Arts');
    
    // Simulate loading
    const timer = setTimeout(() => {
      setSkills(artsSkills);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-50/20 to-transparent opacity-70 -z-10"></div>
        <div className="absolute inset-0 bg-noise-subtle opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex flex-col items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-purple-500 flex items-center justify-center mb-4">
              <Palette className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold">Arts & Crafts Skills</h1>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Explore painting, drawing, pottery, and other creative skills shared by our artistic community members.
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
            <>
              {skills.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No arts & crafts skills available at the moment.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default ArtsAndCraftsSkills;
