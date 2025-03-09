
import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UserProfile, { UserProfileProps } from '@/components/UserProfile';

// Mock user data
const userData: UserProfileProps = {
  id: 'user1',
  name: 'Alex Morgan',
  avatar: '/placeholder.svg',
  location: 'New York, NY',
  memberSince: 'June 2023',
  bio: 'Front-end developer with 5 years of experience. Passionate about teaching and sharing knowledge with others. When not coding, I enjoy hiking and playing piano.',
  rating: 4.8,
  reviews: 24,
  verified: true,
  badges: [
    { name: 'Top Teacher', icon: 'award' },
    { name: 'Quick Responder', icon: 'zap' },
    { name: 'Skill Champion', icon: 'trophy' },
  ],
  skillsOffered: [
    {
      id: 'skill1',
      title: 'JavaScript & React Development',
      description: 'I can help you learn modern JavaScript and React to build interactive web applications.',
      category: 'Technology',
    },
    {
      id: 'skill2',
      title: 'UI/UX Design Principles',
      description: 'Learn fundamental design principles and how to apply them to create better user experiences.',
      category: 'Design',
    },
  ],
  skillsNeeded: [
    {
      id: 'need1',
      title: 'Spanish Language Practice',
      description: 'Looking for a native Spanish speaker to practice conversation skills with.',
      category: 'Languages',
    },
    {
      id: 'need2',
      title: 'Piano Lessons',
      description: 'Intermediate piano player looking to improve technique and learn new songs.',
      category: 'Music',
    },
  ],
};

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 pt-24">
        {isLoading ? (
          <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4">
                <div className="h-96 bg-slate-100 rounded-lg animate-pulse"></div>
              </div>
              <div className="lg:col-span-8">
                <div className="h-24 bg-slate-100 rounded-lg animate-pulse mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-40 bg-slate-100 rounded-lg animate-pulse"></div>
                  <div className="h-40 bg-slate-100 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <UserProfile user={userData} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
