
import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const SearchAndFilterBar = ({ 
  onSearch 
}: { 
  onSearch: (filters: {
    query: string;
    category?: string;
    location?: string;
    rating?: number;
  }) => void;
}) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const [rating, setRating] = useState<number>(0);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ query, category, location, rating });
  };
  
  const handleFilterChange = (type: string, value: string | number | undefined) => {
    switch(type) {
      case 'category':
        setCategory(value as string | undefined);
        if (value) {
          if (!activeFilters.includes('Category')) {
            setActiveFilters([...activeFilters, 'Category']);
          }
        } else {
          setActiveFilters(activeFilters.filter(filter => filter !== 'Category'));
        }
        break;
      case 'location':
        setLocation(value as string | undefined);
        if (value) {
          if (!activeFilters.includes('Location')) {
            setActiveFilters([...activeFilters, 'Location']);
          }
        } else {
          setActiveFilters(activeFilters.filter(filter => filter !== 'Location'));
        }
        break;
      case 'rating':
        setRating(value as number);
        if (value && (value as number) > 0) {
          if (!activeFilters.includes('Rating')) {
            setActiveFilters([...activeFilters, 'Rating']);
          }
        } else {
          setActiveFilters(activeFilters.filter(filter => filter !== 'Rating'));
        }
        break;
    }
  };
  
  const clearFilter = (filter: string) => {
    switch(filter) {
      case 'Category':
        setCategory(undefined);
        break;
      case 'Location':
        setLocation(undefined);
        break;
      case 'Rating':
        setRating(0);
        break;
    }
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };
  
  const clearAllFilters = () => {
    setCategory(undefined);
    setLocation(undefined);
    setRating(0);
    setActiveFilters([]);
  };
  
  return (
    <div className="bg-white border rounded-lg shadow-subtle p-4 mb-8">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder="Search for skills or people..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-3">
          <Select value={category} onValueChange={(value) => handleFilterChange('category', value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="languages">Languages</SelectItem>
              <SelectItem value="arts">Arts & Crafts</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="cooking">Cooking</SelectItem>
              <SelectItem value="fitness">Fitness</SelectItem>
            </SelectContent>
          </Select>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFilters.length > 0 && (
                  <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                    {activeFilters.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Narrow down your search results.
                </SheetDescription>
              </SheetHeader>
              
              <div className="py-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Location</h3>
                  <Select value={location} onValueChange={(value) => handleFilterChange('location', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="los-angeles">Los Angeles</SelectItem>
                      <SelectItem value="chicago">Chicago</SelectItem>
                      <SelectItem value="san-francisco">San Francisco</SelectItem>
                      <SelectItem value="miami">Miami</SelectItem>
                      <SelectItem value="remote">Remote Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Minimum Rating</h3>
                    <span className="text-sm text-muted-foreground">{rating}/5</span>
                  </div>
                  <Slider 
                    value={[rating]} 
                    min={0} 
                    max={5} 
                    step={0.5} 
                    onValueChange={(value) => handleFilterChange('rating', value[0])} 
                  />
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <h4 className="text-sm font-medium">Active filters</h4>
                
                {activeFilters.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map((filter) => (
                      <Badge key={filter} variant="secondary" className="pl-2 pr-1 py-1">
                        {filter}
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                          onClick={() => clearFilter(filter)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-7 text-xs text-muted-foreground"
                      onClick={clearAllFilters}
                    >
                      Clear all
                    </Button>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">No active filters</p>
                )}
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full" 
                  onClick={() => {
                    onSearch({ query, category, location, rating });
                  }}
                >
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          
          <Button type="submit">Search</Button>
        </div>
      </form>
      
      {activeFilters.length > 0 && (
        <div className="flex mt-4 items-center">
          <span className="text-sm text-muted-foreground mr-2">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="pl-2 pr-1 py-1">
                {filter}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-4 w-4 ml-1 hover:bg-transparent p-0"
                  onClick={() => clearFilter(filter)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 text-xs text-muted-foreground"
              onClick={clearAllFilters}
            >
              Clear all
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilterBar;
