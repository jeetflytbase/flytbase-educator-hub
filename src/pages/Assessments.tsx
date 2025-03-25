
import { useState, useEffect } from 'react';
import { assessments as assessmentsData } from '@/lib/data';
import AssessmentCard from '@/components/assessments/AssessmentCard';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';
import { Link } from 'react-router-dom';

const Assessments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { authState } = useAuth();
  const { isAuthenticated } = authState;

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filter assessments based on search query and filters
  const filteredAssessments = assessmentsData.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      assessment.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = selectedLevel ? assessment.level === selectedLevel : true;
    
    return matchesSearch && matchesLevel;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-3xl font-bold mb-4 blue-gradient inline-block">
            Assessments
          </h1>
          <p className="text-flytbase-light/70 mb-8">
            Please sign in to access assessments and track your learning progress.
          </p>
          <Link to="/login">
            <Button className="btn-primary px-8 py-3">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary/60 to-secondary/20 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 blue-gradient inline-block">
              Assessments & Certification
            </h1>
            <p className="text-flytbase-light/70 text-lg max-w-3xl">
              Test your knowledge, validate your skills, and earn certifications recognized by the drone industry.
            </p>
          </div>
        </div>
      </div>

      {/* Assessments Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-flytbase-light/50 h-4 w-4" />
              <input
                type="text"
                placeholder="Search assessments..."
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
            </div>
          )}
        </div>
        
        {/* Results count */}
        <div className="text-flytbase-light/70 text-sm mb-6">
          Showing {filteredAssessments.length} of {assessmentsData.length} assessments
        </div>
        
        {/* Assessments grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card rounded-xl animate-pulse h-64">
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div className="h-6 w-20 bg-flytbase-blue/10 rounded-full"></div>
                    <div className="h-6 w-16 bg-flytbase-blue/10 rounded-full"></div>
                  </div>
                  <div className="h-8 bg-flytbase-blue/10 rounded mb-3"></div>
                  <div className="h-4 bg-flytbase-blue/10 rounded mb-2"></div>
                  <div className="h-4 bg-flytbase-blue/10 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-flytbase-blue/10 rounded mb-6 w-1/2"></div>
                  <div className="flex justify-between mb-4">
                    <div className="h-5 w-24 bg-flytbase-blue/10 rounded"></div>
                    <div className="h-5 w-24 bg-flytbase-blue/10 rounded"></div>
                  </div>
                  <div className="h-10 bg-flytbase-blue/10 rounded-lg mt-6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {filteredAssessments.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAssessments.map((assessment) => (
                  <AssessmentCard key={assessment.id} assessment={assessment} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-flytbase-light/70 mb-2">
                  No assessments found matching your criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLevel(null);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Assessments;
