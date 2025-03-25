
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, ChevronLeft, Play, CheckCircle2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courses } from '@/lib/data';
import { useAuth } from '@/lib/auth';
import { toast } from 'sonner';

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { authState } = useAuth();
  const { isAuthenticated } = authState;

  // Find the course by slug
  const course = courses.find(c => c.slug === slug);

  // If course is not found
  if (!course) {
    return (
      <div className="min-h-screen pt-28 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-flytbase-light">Course Not Found</h1>
          <p className="text-flytbase-light/70 mb-8">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/courses">
            <Button className="btn-primary">
              <ChevronLeft size={16} className="mr-1" /> Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Format duration from minutes to hours and minutes
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 
      ? `${hours} hour${hours > 1 ? 's' : ''} ${mins > 0 ? `${mins} minutes` : ''}`
      : `${mins} minutes`;
  };

  // Level badge color
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400';
      case 'intermediate':
        return 'bg-blue-500/20 text-blue-400';
      case 'advanced':
        return 'bg-purple-500/20 text-purple-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  // Handler for enrolling in the course
  const handleEnroll = () => {
    if (!isAuthenticated) {
      toast.error('Please log in to enroll in this course');
      return;
    }
    
    toast.success(`Successfully enrolled in "${course.title}"`);
  };

  // YouTube embed URL
  const getYoutubeEmbedUrl = (playlistId: string) => {
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-secondary/60 to-secondary/20 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Course Thumbnail */}
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <div className="relative aspect-video bg-flytbase-dark">
                {isVideoPlaying ? (
                  <iframe 
                    src={getYoutubeEmbedUrl(course.youtubePlaylistId)}
                    title={course.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 bg-black">
                    <img 
                      src={course.thumbnailUrl} 
                      alt={course.title} 
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-16 h-16 bg-flytbase-blue/90 rounded-full flex items-center justify-center hover:bg-flytbase-blue transition-colors"
                      >
                        <Play size={30} className="text-white ml-1" fill="white" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Course Info */}
            <div className="md:w-1/2">
              <Link 
                to="/courses" 
                className="inline-flex items-center text-flytbase-light/70 hover:text-flytbase-blue mb-4 transition-colors text-sm"
              >
                <ChevronLeft size={16} className="mr-1" /> Back to Courses
              </Link>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(course.level)}`}>
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </span>
                
                <span className="bg-flytbase-blue/20 text-flytbase-blue text-xs font-medium px-2 py-1 rounded-full flex items-center">
                  <Clock size={12} className="mr-1" />
                  {formatDuration(course.duration)}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold mb-3 text-flytbase-light">
                {course.title}
              </h1>
              
              <div className="flex items-center mb-6 text-sm text-flytbase-light/60">
                <div className="flex items-center mr-4">
                  <Users size={16} className="mr-1" />
                  {course.enrollmentCount.toLocaleString()} students
                </div>
                
                <div className="flex items-center mr-4">
                  <BarChart3 size={16} className="mr-1" />
                  {course.completionRate}% completion
                </div>
                
                <div className="flex items-center text-yellow-400">
                  <Star size={16} className="mr-1 fill-yellow-400" />
                  {course.rating}
                </div>
              </div>
              
              <p className="text-flytbase-light/80 mb-8">
                {course.description}
              </p>
              
              <Button 
                onClick={handleEnroll}
                className="w-full sm:w-auto bg-flytbase-blue hover:bg-flytbase-blue/90 text-white py-3 px-8 rounded-lg font-medium"
              >
                {isAuthenticated ? 'Enroll Now' : 'Sign In to Enroll'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-flytbase-light">
              What You'll Learn
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {/* Replace with actual course learning outcomes */}
              {[
                'Understand drone components and flight principles',
                'Master drone piloting techniques and safety protocols',
                'Learn autonomous flight programming and mission planning',
                'Apply drone technology in various industrial scenarios',
                'Understand regulatory requirements and compliance',
                'Develop troubleshooting and maintenance skills'
              ].map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-flytbase-blue shrink-0 mr-2 mt-0.5" />
                  <span className="text-flytbase-light/80">{point}</span>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-flytbase-light">
              Course Content
            </h2>
            
            <div className="glass-card rounded-xl mb-12">
              {/* Placeholder for course modules/sections */}
              {[
                {
                  title: 'Introduction to Drone Technology',
                  duration: '45 minutes',
                  lectures: 3,
                  isPreview: true
                },
                {
                  title: 'Drone Components and Assembly',
                  duration: '1 hour 30 minutes',
                  lectures: 5,
                  isPreview: false
                },
                {
                  title: 'Basic Flight Principles',
                  duration: '2 hours',
                  lectures: 7,
                  isPreview: false
                },
                {
                  title: 'Safety Protocols and Regulations',
                  duration: '1 hour 15 minutes',
                  lectures: 4,
                  isPreview: false
                }
              ].map((module, index) => (
                <div 
                  key={index}
                  className={`p-4 ${
                    index !== 0 ? 'border-t border-white/5' : ''
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-flytbase-light">
                      {index + 1}. {module.title}
                    </h3>
                    <div className="text-sm text-flytbase-light/60">
                      {module.duration} • {module.lectures} lectures
                    </div>
                  </div>
                  
                  {module.isPreview && (
                    <div className="mt-2">
                      <button className="text-flytbase-blue text-sm hover:underline flex items-center">
                        <Play size={14} className="mr-1" /> Preview Available
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-flytbase-light">
              Requirements
            </h2>
            
            <ul className="list-disc pl-5 mb-12 text-flytbase-light/80 space-y-2">
              <li>Basic understanding of electronics (recommended)</li>
              <li>Computer with internet connection</li>
              <li>No prior drone experience required</li>
            </ul>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-flytbase-light">
                This Course Includes
              </h3>
              
              <ul className="space-y-4 mb-6">
                {[
                  { icon: <Play size={18} />, text: 'X hours on-demand video' },
                  { icon: <CheckCircle2 size={18} />, text: 'X practical exercises' },
                  { icon: <Star size={18} />, text: 'Certificate of completion' },
                  { icon: <Clock size={18} />, text: 'Lifetime access' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-flytbase-blue mr-3">{item.icon}</span>
                    <span className="text-flytbase-light/80">{item.text}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={handleEnroll}
                className="w-full bg-flytbase-blue hover:bg-flytbase-blue/90 text-white py-3 rounded-lg font-medium mb-4"
              >
                {isAuthenticated ? 'Enroll Now' : 'Sign In to Enroll'}
              </Button>
              
              <p className="text-center text-sm text-flytbase-light/50">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
