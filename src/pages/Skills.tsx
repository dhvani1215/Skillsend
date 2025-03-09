import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Search, Filter, ArrowRight } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SkillCard, { SkillProps } from '@/components/SkillCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { skillsData } from '@/data/skillsData';

const Skills = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredSkills, setFilteredSkills] = useState<SkillProps[]>(skillsData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let results = skillsData;

    if (searchTerm) {
      results = results.filter(skill =>
        skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      results = results.filter(skill => skill.category === selectedCategory);
    }

    if (selectedLocation) {
      results = results.filter(skill => skill.user.location.toLowerCase().includes(selectedLocation.toLowerCase()));
    }

    setFilteredSkills(results);
  }, [searchTerm, selectedCategory, selectedLocation]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set('category', value);
    } else {
      url.searchParams.delete('category');
    }
    window.history.pushState({}, '', url.toString());
  };

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#050A44]/10 to-transparent opacity-70 -z-10"></div>
        <div className="absolute inset-0 bg-noise-subtle opacity-10 -z-10"></div>

        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
            Find the Perfect Skill to Learn
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-in-bottom" style={{ animationDelay: '100ms' }}>
            Explore a wide range of skills shared by our community members. Find someone to teach you something new or share your skills with others.
          </p>
        </div>
      </section>

      <section className="py-12 bg-secondary border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Search for skills..."
                className="md:max-w-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute top-3 right-3 h-5 w-5 text-muted-foreground" />
            </div>

            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full md:max-w-xs">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {[...new Set(skillsData.map(skill => skill.category))].map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Enter a location..."
                className="md:max-w-sm"
                value={selectedLocation}
                onChange={(e) => handleLocationChange(e.target.value)}
              />
              <MapPin className="absolute top-3 right-3 h-5 w-5 text-muted-foreground" />
            </div>

            <Button variant="outline" className="md:max-w-fit w-full">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 categories-section">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Explore Skills</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl">
                Discover a variety of skills shared by our talented community members.
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
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-72 rounded-lg bg-slate-100 dark:bg-slate-800 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))
              ) : (
                <div className="col-span-full text-center">
                  <p className="text-muted-foreground">No skills found matching your criteria.</p>
                </div>
              )}
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

export default Skills;
