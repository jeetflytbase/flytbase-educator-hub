
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';

const Hero = () => {
  const { authState } = useAuth();
  const { isAuthenticated } = authState;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-flytbase-dark via-flytbase-dark to-[#162652] opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(14,97,221,0.15)_0%,_rgba(11,18,30,0)_70%)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-5xl">
        <div className="inline-block mb-6 animate-fade-in">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-flytbase-blue/10 text-flytbase-blue border border-flytbase-blue/20">
            Future of Drone Education
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 blue-gradient animate-fade-in">
          Master Drone Technology with FlytBase Academy
        </h1>
        
        <p className="text-flytbase-light/80 text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-fade-in delay-100 text-balance">
          Comprehensive courses, professional certification, and industry-recognized training to launch your career in the rapidly growing drone industry.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in delay-200">
          <Link to={isAuthenticated ? "/courses" : "/login"}>
            <Button className="btn-primary px-8 py-6 text-base">
              {isAuthenticated ? 'Explore Courses' : 'Start Learning'} 
              <ChevronRight size={18} className="ml-1" />
            </Button>
          </Link>
          <Link to="/courses">
            <Button variant="outline" className="btn-outline px-8 py-6 text-base">
              Browse Catalog
            </Button>
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 animate-fade-in delay-300">
          <div className="glass-card rounded-xl px-4 py-6">
            <div className="text-3xl font-bold text-flytbase-blue mb-2">15+</div>
            <div className="text-flytbase-light/70 text-sm">Expert Courses</div>
          </div>
          <div className="glass-card rounded-xl px-4 py-6">
            <div className="text-3xl font-bold text-flytbase-blue mb-2">5K+</div>
            <div className="text-flytbase-light/70 text-sm">Active Students</div>
          </div>
          <div className="glass-card rounded-xl px-4 py-6">
            <div className="text-3xl font-bold text-flytbase-blue mb-2">25+</div>
            <div className="text-flytbase-light/70 text-sm">Industry Partners</div>
          </div>
          <div className="glass-card rounded-xl px-4 py-6">
            <div className="text-3xl font-bold highlight-gradient mb-2">98%</div>
            <div className="text-flytbase-light/70 text-sm">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Blurred Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-flytbase-blue opacity-20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-flytbase-orange opacity-10 rounded-full filter blur-[120px] animate-pulse-slow"></div>
    </div>
  );
};

export default Hero;
