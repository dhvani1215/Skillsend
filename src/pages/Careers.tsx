
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink, Briefcase, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

// Job posting interface
interface JobPosting {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  url: string;
}

const Careers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobListings, setJobListings] = useState<JobPosting[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  
  // Sample job data (in a real app, this would come from LinkedIn API)
  const jobData: JobPosting[] = [
    {
      id: '1',
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Join our team to build and maintain the user interface of our growing platform. Experience with React and TypeScript required.',
      url: 'https://www.linkedin.com/jobs/'
    },
    {
      id: '2',
      title: 'UX/UI Designer',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Design',
      description: 'Design intuitive and beautiful user experiences for our platform. Strong portfolio and experience with Figma required.',
      url: 'https://www.linkedin.com/jobs/'
    },
    {
      id: '3',
      title: 'Community Manager',
      location: 'Remote',
      type: 'Full-time',
      department: 'Operations',
      description: 'Engage with our growing community, moderate content, and help develop community programs.',
      url: 'https://www.linkedin.com/jobs/'
    },
    {
      id: '4',
      title: 'Backend Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Develop and maintain server-side logic, databases, and APIs. Experience with Node.js and MongoDB required.',
      url: 'https://www.linkedin.com/jobs/'
    },
    {
      id: '5',
      title: 'Marketing Specialist',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Drive user acquisition and engagement through various marketing channels. Experience with digital marketing required.',
      url: 'https://www.linkedin.com/jobs/'
    }
  ];
  
  // Simulate fetching data from LinkedIn API
  useEffect(() => {
    const fetchJobs = async () => {
      // In a real application, this would fetch from LinkedIn's API
      // For now, we'll use our mock data with a fake delay
      setTimeout(() => {
        setJobListings(jobData);
        setIsLoading(false);
      }, 1000);
    };
    
    fetchJobs();
  }, []);
  
  // Get unique departments for filter
  const departments = ['All', ...new Set(jobData.map(job => job.department))];
  
  // Filter jobs by department
  const filteredJobs = selectedDepartment === 'All' 
    ? jobListings
    : jobListings.filter(job => job.department === selectedDepartment);
  
  // Handle LinkedIn application click
  const handleApply = (jobTitle: string) => {
    toast.success(`Opening LinkedIn for "${jobTitle}" application`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#050A44]/10 to-transparent opacity-70 -z-10"></div>
        <div className="absolute inset-0 bg-noise-subtle opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Join Our Team
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us build a community where skills are shared and everyone can grow together.
          </p>
        </div>
      </section>
      
      {/* Job Listings Section */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-bold">Open Positions</h2>
            
            <div className="mt-4 md:mt-0">
              <select 
                className="px-4 py-2 rounded-md border border-border bg-background"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
          
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-40 bg-secondary animate-pulse rounded-lg"></div>
              ))}
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-secondary/30 p-6 rounded-lg shadow-subtle border border-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                      <span className="inline-flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" /> {job.department}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <span className="inline-flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" /> {job.location}
                    </span>
                    <span className="inline-flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" /> {job.type}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{job.description}</p>
                  
                  <Button 
                    variant="outline" 
                    className="group"
                    onClick={() => handleApply(job.title)}
                    asChild
                  >
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                      Apply on LinkedIn
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No positions currently available in this department.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-subtle">
              <h3 className="text-xl font-semibold mb-4">Community First</h3>
              <p className="text-muted-foreground">
                We believe in the power of community and work to foster connections between people from all walks of life.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-subtle">
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-muted-foreground">
                We're committed to growth and learning, both as individuals and as an organization.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-subtle">
              <h3 className="text-xl font-semibold mb-4">Inclusivity</h3>
              <p className="text-muted-foreground">
                We're building a platform where everyone feels welcome, valued, and able to participate fully.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
