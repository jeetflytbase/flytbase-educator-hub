
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, BarChart3 } from 'lucide-react';
import { Course } from '@/lib/types';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
  className?: string;
}

const CourseCard = ({ course, className }: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Format duration from minutes to hours and minutes
  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 
      ? `${hours}h ${mins > 0 ? `${mins}m` : ''}`
      : `${mins}m`;
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

  return (
    <Link
      to={`/courses/${course.slug}`}
      className={cn(
        'block h-full rounded-xl overflow-hidden card-hover-effect relative',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden relative">
        <div className={cn(
          'absolute inset-0 bg-gradient-to-t from-flytbase-dark via-transparent to-transparent z-10',
          isHovered ? 'opacity-100' : 'opacity-70',
          'transition-opacity duration-300'
        )} />
        
        <img
          src={course.thumbnailUrl}
          alt={course.title}
          className={cn(
            'w-full h-full object-cover transition-transform duration-500',
            isHovered ? 'scale-110' : 'scale-100'
          )}
        />
        
        <div className={cn(
          'absolute bottom-3 left-3 z-20 flex gap-2',
          'transition-all duration-300'
        )}>
          <span className={cn(
            'text-xs font-medium px-2 py-1 rounded-full',
            getLevelColor(course.level)
          )}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </span>
          
          <span className="bg-flytbase-blue/20 text-flytbase-blue text-xs font-medium px-2 py-1 rounded-full flex items-center">
            <Clock size={12} className="mr-1" />
            {formatDuration(course.duration)}
          </span>
        </div>
      </div>
      
      <div className="p-5 bg-secondary/40 backdrop-blur-sm border-t border-white/5">
        <h3 className="text-lg font-semibold mb-2 text-flytbase-light line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-flytbase-light/70 text-sm line-clamp-2 mb-4">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-flytbase-light/60">
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <Users size={14} className="mr-1" />
              {course.enrollmentCount.toLocaleString()}
            </span>
            
            <span className="flex items-center">
              <BarChart3 size={14} className="mr-1" />
              {course.completionRate}%
            </span>
          </div>
          
          <span className="flex items-center text-yellow-400">
            <Star size={14} className="mr-1 fill-yellow-400" />
            {course.rating}
          </span>
        </div>
      </div>
      
      <div className={cn(
        'absolute inset-0 flex items-center justify-center bg-flytbase-dark/80 backdrop-blur-sm opacity-0 transition-opacity duration-300',
        isHovered ? 'opacity-100' : 'opacity-0'
      )}>
        <div className="btn-primary">View Course</div>
      </div>
    </Link>
  );
};

export default CourseCard;
