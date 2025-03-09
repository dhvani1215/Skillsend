
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/data/skillsData';
import SkillCard, { SkillProps } from '@/components/SkillCard';

interface ExploreTopicsProps {
  category: string;
}

const ExploreTopics = ({ category }: ExploreTopicsProps) => {
  const [topicSkills, setTopicSkills] = useState<Record<string, SkillProps[]>>({});
  const [topics, setTopics] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');

  useEffect(() => {
    // Filter skills by the selected category
    const categorySkills = skillsData.filter(skill => skill.category === category);
    
    // Group skills by topic
    const groupedByTopic: Record<string, SkillProps[]> = {};
    const topicSet = new Set<string>();
    
    categorySkills.forEach(skill => {
      if (skill.topic) {
        topicSet.add(skill.topic);
        if (!groupedByTopic[skill.topic]) {
          groupedByTopic[skill.topic] = [];
        }
        groupedByTopic[skill.topic].push(skill);
      }
    });
    
    setTopicSkills(groupedByTopic);
    setTopics(Array.from(topicSet));
    
    // Set default active tab if there are topics
    if (topicSet.size > 0) {
      setActiveTab('all');
    }
  }, [category]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  // Get all skills for this category
  const allSkills = skillsData.filter(skill => skill.category === category);

  return (
    <div className="my-8">
      {topics.length > 0 ? (
        <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange}>
          <div className="mb-6">
            <TabsList className="w-full h-auto flex-wrap justify-start gap-2 bg-transparent">
              <TabsTrigger 
                value="all" 
                className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All Topics ({allSkills.length})
              </TabsTrigger>
              
              {topics.map(topic => (
                <TabsTrigger 
                  key={topic} 
                  value={topic}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {topic} ({topicSkills[topic]?.length || 0})
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allSkills.length > 0 ? (
                allSkills.map(skill => (
                  <SkillCard key={skill.id} skill={skill} />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-muted-foreground">No skills available for this category yet.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          {topics.map(topic => (
            <TabsContent key={topic} value={topic} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topicSkills[topic] && topicSkills[topic].length > 0 ? (
                  topicSkills[topic].map(skill => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-10">
                    <p className="text-muted-foreground">No skills available for this topic yet.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allSkills.length > 0 ? (
            allSkills.map(skill => (
              <SkillCard key={skill.id} skill={skill} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No skills available for this category yet.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExploreTopics;
