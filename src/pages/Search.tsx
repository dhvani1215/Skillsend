
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Filter } from 'lucide-react';
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

// Import the skills data
import { skillsData } from '@/data/skillsData';

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredSkills, setFilteredSkills] = useState<SkillProps[]>(skillsData);
  const [isLoading, setIsLoading] = useState(true);

  // Extract search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('q');
    const categoryParam = params.get('category');
    
    if (queryParam) {
      setSearchTerm(queryParam);
    }
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);

  // Filter skills based on search term and category
  useEffect(() => {
    setIsLoading(true);
    
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

    setTimeout(() => {
      setFilteredSkills(results);
      setIsLoading(false);
    }, 500); // Simulate loading delay
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update URL with search parameters
    const params = new URLSearchParams();
    if (searchTerm) params.set('q', searchTerm);
    if (selectedCategory) params.set('category', selectedCategory);
    
    navigate({
      pathname: '/search',
      search: params.toString()
    });
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-radial from-[#050A44]/10 to-transparent opacity-70 -z-10"></div>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Search Skills</h1>
          
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input
                type="search"
                placeholder="Search for skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10"
              />
              <SearchIcon className="absolute top-3 right-3 h-5 w-5 text-muted-foreground" />
            </div>

            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {[...new Set(skillsData.map(skill => skill.category))].map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button type="submit" className="bg-[#0A21C0] hover:bg-[#050A44]">
              <SearchIcon className="h-4 w-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-slate-50 flex-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {searchTerm ? `Results for "${searchTerm}"` : 'All Skills'}
              {selectedCategory && ` in ${selectedCategory}`}
            </h2>
            <p className="text-muted-foreground">
              {filteredSkills.length} {filteredSkills.length === 1 ? 'result' : 'results'} found
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-72 rounded-lg bg-slate-100 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <>
              {filteredSkills.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">No skills found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or category filters
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('');
                      navigate('/search');
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
