
import { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import CourseCard from './CourseCard';
import { Course } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid = ({ courses }: CourseGridProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique topics from all courses
  const allTopics = Array.from(
    new Set(courses.flatMap(course => course.topics))
  ).sort();

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;
    
    const matchesTopic = selectedTopic
      ? course.topics.includes(selectedTopic)
      : true;
    
    return matchesSearch && matchesLevel && matchesTopic;
  });

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-flytbase-light/50 h-4 w-4" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-secondary/40 backdrop-blur-sm border border-white/10 text-flytbase-light placeholder:text-flytbase-light/50 focus:outline-none focus:ring-1 focus:ring-flytbase-blue"
            />
          </div>
          
          {/* Filter toggle button (mobile) */}
          <Button 
            variant="outline" 
            size="sm"
            className="sm:hidden flex items-center gap-2"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={16} />
            Filters
            <ChevronDown size={16} className={isFilterOpen ? "rotate-180 transform" : ""} />
          </Button>
          
          {/* Filters (desktop) */}
          <div className="hidden sm:flex items-center gap-4 flex-1 justify-end">
            <div>
              <select
                value={selectedLevel || ''}
                onChange={(e) => setSelectedLevel(e.target.value || null)}
                className="rounded-lg bg-secondary/40 backdrop-blur-sm border border-white/10 text-flytbase-light py-2 px-3 focus:outline-none focus:ring-1 focus:ring-flytbase-blue"
              >
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            
            <div>
              <select
                value={selectedTopic || ''}
                onChange={(e) => setSelectedTopic(e.target.value || null)}
                className="rounded-lg bg-secondary/40 backdrop-blur-sm border border-white/10 text-flytbase-light py-2 px-3 focus:outline-none focus:ring-1 focus:ring-flytbase-blue"
              >
                <option value="">All Topics</option>
                {allTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Filters (mobile) */}
        {isFilterOpen && (
          <div className="sm:hidden flex flex-col gap-3 pt-2 pb-4 animate-fade-in">
            <div>
              <label className="block text-flytbase-light/70 text-sm mb-1">Level</label>
              <select
                value={selectedLevel || ''}
                onChange={(e) => setSelectedLevel(e.target.value || null)}
                className="w-full rounded-lg bg-secondary/40 backdrop-blur-sm border border-white/10 text-flytbase-light py-2 px-3 focus:outline-none focus:ring-1 focus:ring-flytbase-blue"
              >
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            
            <div>
              <label className="block text-flytbase-light/70 text-sm mb-1">Topic</label>
              <select
                value={selectedTopic || ''}
                onChange={(e) => setSelectedTopic(e.target.value || null)}
                className="w-full rounded-lg bg-secondary/40 backdrop-blur-sm border border-white/10 text-flytbase-light py-2 px-3 focus:outline-none focus:ring-1 focus:ring-flytbase-blue"
              >
                <option value="">All Topics</option>
                {allTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
      
      {/* Results count */}
      <div className="text-flytbase-light/70 text-sm mb-6">
        Showing {filteredCourses.length} of {courses.length} courses
      </div>
      
      {/* Course grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-flytbase-light/70 mb-2">No courses found matching your criteria.</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchQuery('');
              setSelectedLevel(null);
              setSelectedTopic(null);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseGrid;
