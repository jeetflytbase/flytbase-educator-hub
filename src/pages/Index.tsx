
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, BookOpen, Award, ArrowUpRight } from 'lucide-react';
import { courses } from '@/lib/data';
import CourseCard from '@/components/courses/CourseCard';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Get top 3 courses by enrollment
  const topCourses = [...courses]
    .sort((a, b) => b.enrollmentCount - a.enrollmentCount)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* Popular Courses Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 blue-gradient inline-block">
                Popular Courses
              </h2>
              <p className="text-flytbase-light/70 max-w-2xl">
                Start your journey by exploring our most popular courses designed to help you master drone technology.
              </p>
            </div>
            
            <Link 
              to="/courses" 
              className="mt-4 md:mt-0 inline-flex items-center text-flytbase-blue hover:text-flytbase-blue/80 transition-colors"
            >
              View All Courses <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative bg-secondary/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598622325809-beb5e5bb7d4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-flytbase-dark to-flytbase-dark/90"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 blue-gradient inline-block">
              Unlock Your Potential in Drone Technology
            </h2>
            
            <p className="text-flytbase-light/80 text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of students worldwide who are advancing their careers with our comprehensive drone courses and certifications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/courses">
                <Button className="btn-primary px-8 py-6 text-base">
                  Explore Courses <ArrowRight size={16} className="ml-1" />
                </Button>
              </Link>
              
              <Button variant="outline" className="btn-outline px-8 py-6 text-base">
                <Play size={16} className="mr-1" /> Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div className="bg-flytbase-dark/60 backdrop-blur-sm p-6 rounded-xl border border-white/5">
                <div className="bg-flytbase-blue/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="text-flytbase-blue h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-flytbase-light">
                  Learn at Your Own Pace
                </h3>
                <p className="text-flytbase-light/70 text-sm">
                  Access course materials anytime, anywhere, and learn at a pace that suits your schedule.
                </p>
              </div>
              
              <div className="bg-flytbase-dark/60 backdrop-blur-sm p-6 rounded-xl border border-white/5">
                <div className="bg-flytbase-orange/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="text-flytbase-orange h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-flytbase-light">
                  Get Certified
                </h3>
                <p className="text-flytbase-light/70 text-sm">
                  Earn industry-recognized certifications to validate your skills and advance your career.
                </p>
              </div>
              
              <div className="bg-flytbase-dark/60 backdrop-blur-sm p-6 rounded-xl border border-white/5">
                <div className="bg-flytbase-blue/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <ArrowUpRight className="text-flytbase-blue h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-flytbase-light">
                  Career Advancement
                </h3>
                <p className="text-flytbase-light/70 text-sm">
                  Open new career opportunities in the rapidly growing drone technology industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 blue-gradient inline-block text-center mx-auto block">
            What Our Students Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Drone Pilot",
                company: "Aerial Solutions",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
                quote: "The courses at FlytBase Academy provided me with the precise skills needed to transition into a professional drone pilot role. The structured curriculum and industry-focused content made all the difference."
              },
              {
                name: "Sarah Chen",
                role: "GIS Specialist",
                company: "MapTech Inc.",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
                quote: "As someone working in geospatial analysis, the drone mapping courses have completely transformed how I approach data collection. The depth of knowledge and practical exercises are exceptional."
              },
              {
                name: "Mohammed Al-Farsi",
                role: "Automation Engineer",
                company: "Future Robotics",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed",
                quote: "The advanced programming courses allowed me to develop sophisticated autonomous drone solutions. The instructors' expertise and the community support were invaluable throughout my learning journey."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl card-hover-effect backdrop-blur-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-flytbase-blue/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-flytbase-light font-medium">{testimonial.name}</h4>
                    <p className="text-flytbase-light/60 text-sm">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-flytbase-light/80 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
