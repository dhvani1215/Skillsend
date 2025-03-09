
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { addSkill } from '@/data/skillsData';

// Define topics for each category
const topicsByCategory: Record<string, string[]> = {
  "Technology": ["Programming", "Web Development", "Mobile Development", "Data Science", "AI/ML", "Cybersecurity", "DevOps", "Cloud Computing"],
  "Languages": ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Russian", "Arabic", "Portuguese", "Italian"],
  "Arts & Crafts": ["Painting", "Drawing", "Sculpture", "Illustration", "Photography", "Knitting", "Crochet", "Jewelry Making", "Pottery", "Woodworking"],
  "Music": ["Piano", "Guitar", "Violin", "Drums", "Vocals", "Music Production", "Music Theory", "Songwriting", "DJing"],
  "Cooking": ["Basic Cooking", "Baking", "International Cuisine", "Vegetarian/Vegan", "Pastry Making", "Meal Prep", "Wine Pairing", "BBQ & Grilling"],
  "Fitness": ["Personal Training", "Yoga", "Pilates", "Strength Training", "Cardio", "Running", "Swimming", "Nutrition", "Meditation"],
  "Business": ["Marketing", "Finance", "Entrepreneurship", "Sales", "Project Management", "Public Speaking", "Leadership", "Negotiation"],
  "Education": ["Mathematics", "Science", "History", "Literature", "Economics", "Psychology", "Philosophy", "Test Preparation"],
  "Health & Wellness": ["Nutrition", "Mental Health", "Massage Therapy", "Aromatherapy", "Acupuncture", "Herbal Medicine", "First Aid", "Mindfulness"]
};

const ShareSkills = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    topic: '',
    experience: '',
    availability: '',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    if (name === 'category') {
      // Reset topic when category changes
      setFormData(prev => ({ ...prev, [name]: value, topic: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get user data from localStorage (if available)
    const userJson = localStorage.getItem('currentUser');
    const currentUser = userJson ? JSON.parse(userJson) : {
      id: 'guest_' + Math.random().toString(36).substr(2, 9),
      name: 'Guest User',
      email: 'guest@example.com'
    };
    
    // Create a new skill
    const newSkill = addSkill({
      title: formData.title,
      description: formData.description,
      category: formData.category,
      topic: formData.topic,
      user: {
        id: currentUser.id,
        name: currentUser.name,
        location: formData.location
      }
    });
    
    setTimeout(() => {
      toast.success("Your skill has been shared successfully!");
      setIsSubmitting(false);
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: '',
        topic: '',
        experience: '',
        availability: '',
        location: '',
      });
      // Redirect to the explore page to see the new skill
      navigate('/explore');
    }, 1500);
  };

  const categories = Object.keys(topicsByCategory);
  const availableTopics = formData.category ? topicsByCategory[formData.category] || [] : [];
  const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#050A44]/10 to-transparent opacity-70 -z-10"></div>
        <div className="absolute inset-0 bg-noise-subtle opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-6">Share Your Skills</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Help others learn by sharing your expertise. Fill out the form below to offer your skills to the community.
          </p>
          
          <div className="bg-background rounded-xl p-8 shadow-subtle">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Skill Title
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="E.g., JavaScript Programming, Spanish Conversation"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe what you can teach and your approach"
                  rows={5}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-1">
                    Category
                  </label>
                  <Select 
                    value={formData.category}
                    onValueChange={(value) => handleSelectChange('category', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium mb-1">
                    Topic
                  </label>
                  <Select 
                    value={formData.topic}
                    onValueChange={(value) => handleSelectChange('topic', value)}
                    disabled={!formData.category}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={formData.category ? "Select a topic" : "Select a category first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTopics.map((topic) => (
                        <SelectItem key={topic} value={topic}>
                          {topic}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium mb-1">
                    Experience Level
                  </label>
                  <Select 
                    value={formData.experience}
                    onValueChange={(value) => handleSelectChange('experience', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium mb-1">
                    Availability
                  </label>
                  <Input
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    placeholder="E.g., Weekends, Evenings, 2 hours per week"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-1">
                  Location
                </label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country or 'Remote'"
                  required
                />
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Share Your Skill'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default ShareSkills;
