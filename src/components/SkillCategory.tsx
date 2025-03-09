
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SkillCategoryProps {
  icon: ReactNode;
  name: string;
  count: number;
  color: string;
}

const SkillCategory = ({ icon, name, count, color }: SkillCategoryProps) => {
  const getCategoryPath = (categoryName: string): string => {
    switch (categoryName) {
      case 'Technology':
        return '/category/technology';
      case 'Languages':
        return '/category/languages';
      case 'Arts & Crafts':
        return '/category/arts-crafts';
      case 'Music':
        return '/category/music';
      case 'Cooking':
        return '/category/cooking';
      case 'Fitness':
        return '/category/fitness';
      default:
        return `/skills?category=${encodeURIComponent(name)}`;
    }
  };

  return (
    <Link to={getCategoryPath(name)} className="block">
      <div className="border rounded-lg p-5 transition-all hover:shadow-md hover:translate-y-[-2px]">
        <div className="flex items-center gap-4">
          <div className={`h-12 w-12 rounded-full ${color} flex items-center justify-center`}>
            {icon}
          </div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">{count} skills available</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkillCategory;
