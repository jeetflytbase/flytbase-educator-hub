
import { Clock, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Assessment } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface AssessmentCardProps {
  assessment: Assessment;
  className?: string;
}

const AssessmentCard = ({ assessment, className }: AssessmentCardProps) => {
  // Level badge color
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'advanced':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className={cn(
      'glass-card rounded-xl overflow-hidden card-hover-effect border border-white/10',
      className
    )}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={cn(
              'inline-block px-3 py-1 rounded-full text-xs font-medium border',
              getLevelColor(assessment.level)
            )}>
              {assessment.level.charAt(0).toUpperCase() + assessment.level.slice(1)}
            </span>
          </div>
          
          <div className="bg-flytbase-dark/30 text-flytbase-light/70 text-xs font-medium px-3 py-1 rounded-full flex items-center">
            <Clock size={12} className="mr-1" />
            {assessment.duration} min
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-flytbase-light">
          {assessment.title}
        </h3>
        
        <p className="text-flytbase-light/70 text-sm mb-6">
          {assessment.description}
        </p>
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-flytbase-light/70">
              <BookOpen size={16} className="mr-2" />
              <span>{assessment.totalQuestions} Questions</span>
            </div>
            
            <div className="flex items-center text-flytbase-light/70">
              <Award size={16} className="mr-2" />
              <span>Pass: {assessment.passingScore}%</span>
            </div>
          </div>
          
          <Link to={`/assessments/${assessment.slug}`}>
            <Button 
              className="w-full bg-flytbase-blue hover:bg-flytbase-blue/90 text-white"
            >
              Start Assessment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
