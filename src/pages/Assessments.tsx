
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, FileText } from 'lucide-react';
import AssessmentCard, { AssessmentProps } from '@/components/AssessmentCard';

// Mock data for assessments
export const assessmentsData: AssessmentProps[] = [
  {
    id: "reg-rules",
    title: "Drone Regulations & Safety",
    description: "Test your knowledge of drone safety guidelines, airspace restrictions, and regulatory compliance requirements.",
    questions: 20,
    timeLimit: "30 minutes",
    difficulty: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1579267312278-4586ec569a22"
  },
  {
    id: "flight-ops",
    title: "Basic Flight Operations",
    description: "Demonstrate your understanding of drone flight controls, pre-flight procedures, and basic maneuvers.",
    questions: 15,
    timeLimit: "25 minutes",
    difficulty: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9"
  },
  {
    id: "advanced-maneuvers",
    title: "Advanced Flight Maneuvers",
    description: "Challenge your knowledge of complex flight patterns, obstacle navigation, and precision control techniques.",
    questions: 25,
    timeLimit: "40 minutes",
    difficulty: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1508614589041-895b88991e3e"
  },
  {
    id: "aerial-photo",
    title: "Aerial Photography Techniques",
    description: "Test your understanding of composition, camera settings, and post-processing for drone photography.",
    questions: 20,
    timeLimit: "35 minutes",
    difficulty: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1506947411487-a56738267384"
  },
  {
    id: "mapping-tech",
    title: "Mapping & Surveying Technology",
    description: "Evaluate your knowledge of photogrammetry, mapping software, and drone surveying methodologies.",
    questions: 30,
    timeLimit: "45 minutes",
    difficulty: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1509803874385-db7c23652552"
  },
  {
    id: "emergency-proc",
    title: "Emergency Procedures",
    description: "Test your understanding of drone emergency protocols, recovery techniques, and risk management.",
    questions: 15,
    timeLimit: "20 minutes",
    difficulty: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
  }
];

const Assessments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const filters = [
    { name: 'All', value: null },
    { name: 'Beginner', value: 'Beginner' },
    { name: 'Intermediate', value: 'Intermediate' },
    { name: 'Advanced', value: 'Advanced' }
  ];
  
  const filteredAssessments = assessmentsData.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          assessment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter ? assessment.difficulty === activeFilter : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-flytbase-primary">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 md:pt-24 bg-flytbase-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Skill Assessments</h1>
              <p className="mt-2 text-neutral-300 max-w-2xl">
                Test your knowledge and earn certificates by completing these drone-related assessments
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="flex items-center bg-white/10 rounded-lg p-1 backdrop-blur-sm">
                <div className="flex space-x-1 p-1">
                  {filters.map((filter) => (
                    <Button
                      key={filter.name}
                      variant={activeFilter === filter.value ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveFilter(filter.value)}
                      className={activeFilter === filter.value ? "bg-flytbase-secondary text-white" : "text-white hover:bg-white/20"}
                    >
                      {filter.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Bar */}
      <div className="bg-[#1A1F2C] border-b border-white/5 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search assessments by title or description..."
              className="pl-10 w-full bg-[#222631] border-white/10 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* Assessment Grid */}
      <section className="py-12 bg-flytbase-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAssessments.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAssessments.map((assessment) => (
                <AssessmentCard key={assessment.id} {...assessment} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <FileText className="mx-auto h-12 w-12 text-neutral-300" />
              <h3 className="mt-4 text-lg font-medium text-white">No assessments found</h3>
              <p className="mt-1 text-neutral-400">Try adjusting your search or filter to find what you're looking for.</p>
              <Button 
                className="mt-6 bg-flytbase-secondary hover:bg-flytbase-secondary/90"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Assessments;
