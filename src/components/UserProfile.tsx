
import { useState } from 'react';
import { MapPin, Calendar, Star, MessageCircle, Plus, Award, ThumbsUp, Shield } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export interface SkillListing {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface UserProfileProps {
  id: string;
  name: string;
  avatar?: string;
  location: string;
  memberSince: string;
  bio: string;
  rating: number;
  reviews: number;
  verified: boolean;
  badges: Array<{name: string, icon: string}>;
  skillsOffered: SkillListing[];
  skillsNeeded: SkillListing[];
}

const UserProfile = ({ user }: { user: UserProfileProps }) => {
  const [activeTab, setActiveTab] = useState("offered");
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <Card className="sticky top-24">
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto border-2 border-border">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <CardTitle className="mt-4 text-2xl">{user.name}</CardTitle>
              
              <div className="flex items-center justify-center gap-2 mt-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">{user.location}</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">Joined {user.memberSince}</span>
              </div>
              
              {user.verified && (
                <Badge className="mt-4 bg-green-50 text-green-700 hover:bg-green-50 flex items-center w-fit mx-auto">
                  <Shield className="w-3 h-3 mr-1" /> Verified Member
                </Badge>
              )}
              
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="ml-1 font-medium">{user.rating.toFixed(1)}</span>
                </div>
                <span className="text-muted-foreground mx-1">•</span>
                <span className="text-muted-foreground">{user.reviews} reviews</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-col gap-4">
                <Button className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
                
                <div className="text-sm mt-2">
                  <h4 className="font-medium mb-2">About me</h4>
                  <p className="text-muted-foreground">{user.bio}</p>
                </div>
                
                {user.badges.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      {user.badges.map((badge, index) => (
                        <Badge key={index} variant="outline" className="py-1 px-2">
                          <Award className="w-3 h-3 mr-1" />
                          {badge.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-8">
          <Tabs 
            defaultValue="offered" 
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="offered">Skills Offered</TabsTrigger>
              <TabsTrigger value="needed">Skills Needed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="offered" className="pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.skillsOffered.map((skill) => (
                  <Card key={skill.id} className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{skill.title}</CardTitle>
                        <Badge variant="secondary">{skill.category}</Badge>
                      </div>
                      <CardDescription>{skill.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
                
                <Button 
                  variant="outline" 
                  className="border-dashed h-full min-h-[120px] flex flex-col gap-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add New Skill</span>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="needed" className="pt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.skillsNeeded.map((skill) => (
                  <Card key={skill.id} className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{skill.title}</CardTitle>
                        <Badge variant="secondary">{skill.category}</Badge>
                      </div>
                      <CardDescription>{skill.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
                
                <Button 
                  variant="outline" 
                  className="border-dashed h-full min-h-[120px] flex flex-col gap-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add Needed Skill</span>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
