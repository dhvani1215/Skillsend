
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";

export interface SkillProps {
  id: string;
  title: string;
  description: string;
  category: string;
  topic: string;
  rating: number;
  reviews: number;
  user: {
    id: string;
    name: string;
    avatar?: string;
    location: string;
  };
}

const SkillCard = ({ skill }: { skill: SkillProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Map category to color
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'Technology': 'bg-theme-primary border-theme-primary text-white',
      'Languages': 'bg-theme-accent border-theme-accent text-white',
      'Arts': 'bg-[#EDC7B7] border-[#EDC7B7] text-primary',
      'Arts & Crafts': 'bg-[#EDC7B7] border-[#EDC7B7] text-primary',
      'Music': 'bg-[#123C69] border-[#123C69] text-white',
      'Cooking': 'bg-[#AC3B61] border-[#AC3B61] text-white',
      'Fitness': 'bg-[#BAB2B5] border-[#BAB2B5] text-primary'
    };
    
    return colorMap[category] || 'bg-secondary border-secondary text-primary';
  };
  
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 h-full border-2 ${
        isHovered 
          ? 'shadow-elevated translate-y-[-4px] border-[#EDC7B7]' 
          : 'shadow-subtle hover:shadow-elevated border-border'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <Link to={`/profile/${skill.user.id}`} className="flex items-center gap-2">
            <Avatar className="h-10 w-10 border border-border">
              <AvatarImage src={skill.user.avatar || "/placeholder.svg"} alt={skill.user.name} />
              <AvatarFallback>{skill.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{skill.user.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{skill.user.location}</p>
            </div>
          </Link>
          <div className="flex flex-col gap-1 items-end">
            <Badge variant="outline" className={`text-xs ${getCategoryColor(skill.category)}`}>
              {skill.category}
            </Badge>
            {skill.topic && (
              <Badge variant="outline" className="text-xs">
                {skill.topic}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <Link to={`/skills/${skill.id}`} className="block group">
          <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
            {skill.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-3">
            {skill.description}
          </p>
        </Link>
        
        <div className="flex items-center mt-4 text-sm">
          <div className="flex items-center text-amber-500">
            <Star className="w-4 h-4 fill-amber-500" />
            <span className="ml-1 font-medium">{skill.rating.toFixed(1)}</span>
          </div>
          <span className="text-muted-foreground mx-2">•</span>
          <span className="text-muted-foreground">{skill.reviews} reviews</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-sm h-9 group hover:bg-accent hover:text-white"
          asChild
        >
          <Link to={`/messages/new?recipient=${skill.user.id}`}>
            <MessageCircle className="w-4 h-4 mr-2 group-hover:text-white transition-colors" />
            Contact
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
