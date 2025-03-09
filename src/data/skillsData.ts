
import { SkillProps } from '@/components/SkillCard';

// Mock data for skills
export const skillsData: SkillProps[] = [
  {
    id: '1',
    title: 'JavaScript & React Development',
    description: 'I can help you learn modern JavaScript and React to build interactive web applications. Perfect for beginners or intermediates looking to level up.',
    category: 'Technology',
    topic: 'Programming',
    rating: 4.8,
    reviews: 24,
    user: {
      id: 'user1',
      name: 'Alex Morgan',
      avatar: '/placeholder.svg',
      location: 'New York, NY',
    },
  },
  {
    id: '2',
    title: 'Spanish Conversation Practice',
    description: 'Native Spanish speaker offering conversation practice for all levels. Learn practical vocabulary and improve your accent with a friendly tutor.',
    category: 'Languages',
    topic: 'Spanish',
    rating: 4.9,
    reviews: 37,
    user: {
      id: 'user2',
      name: 'Sofia Rodriguez',
      avatar: '/placeholder.svg',
      location: 'Miami, FL',
    },
  },
  {
    id: '3',
    title: 'Digital Illustration & Design',
    description: 'Professional designer offering to teach illustration techniques using Procreate and Adobe Creative Suite. From sketching to finished artwork.',
    category: 'Arts',
    topic: 'Illustration',
    rating: 4.7,
    reviews: 19,
    user: {
      id: 'user3',
      name: 'Jordan Lee',
      avatar: '/placeholder.svg',
      location: 'Seattle, WA',
    },
  },
  {
    id: '4',
    title: 'Basic Cooking Skills',
    description: 'Learn to cook delicious and healthy meals with simple recipes and easy-to-follow instructions.',
    category: 'Cooking',
    topic: 'Basic Cooking',
    rating: 4.6,
    reviews: 28,
    user: {
      id: 'user4',
      name: 'Emily Clark',
      avatar: '/placeholder.svg',
      location: 'Chicago, IL',
    },
  },
  {
    id: '5',
    title: 'Fitness Training',
    description: 'Get personalized fitness training and achieve your health goals with a certified personal trainer.',
    category: 'Fitness',
    topic: 'Personal Training',
    rating: 4.9,
    reviews: 42,
    user: {
      id: 'user5',
      name: 'Chris Adams',
      avatar: '/placeholder.svg',
      location: 'Los Angeles, CA',
    },
  },
  {
    id: '6',
    title: 'Piano Lessons',
    description: 'Learn to play the piano with a professional instructor. All levels are welcome.',
    category: 'Music',
    topic: 'Piano',
    rating: 4.8,
    reviews: 31,
    user: {
      id: 'user6',
      name: 'Megan White',
      avatar: '/placeholder.svg',
      location: 'Austin, TX',
    },
  },
];

// Function to add a new skill to the skills data
export const addSkill = (newSkill: Omit<SkillProps, 'id' | 'rating' | 'reviews'>) => {
  const id = `skill_${Date.now()}`;
  const skillWithId: SkillProps = {
    ...newSkill,
    id,
    rating: 0, // New skills start with no rating
    reviews: 0, // New skills start with no reviews
  };
  
  skillsData.unshift(skillWithId); // Add to the beginning of the array
  return skillWithId;
};
