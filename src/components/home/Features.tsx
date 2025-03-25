
import { CheckCircle2, Award, BookOpen, UserCheck, Compass } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-flytbase-blue" />,
      title: 'Comprehensive Curriculum',
      description: 'From beginner to advanced, our courses cover all aspects of drone technology, operations, and industry applications.'
    },
    {
      icon: <Award className="h-10 w-10 text-flytbase-orange" />,
      title: 'Industry-Recognized Certification',
      description: 'Earn certificates that are recognized by leading companies in the drone industry to boost your career prospects.'
    },
    {
      icon: <UserCheck className="h-10 w-10 text-flytbase-blue" />,
      title: 'Expert Instructors',
      description: 'Learn from professionals with years of experience in drone operations, development, and regulatory compliance.'
    },
    {
      icon: <Compass className="h-10 w-10 text-flytbase-orange" />,
      title: 'Guided Learning Paths',
      description: 'Follow structured learning paths tailored to specific career goals in the drone industry.'
    }
  ];

  return (
    <section className="py-20 bg-flytbase-dark relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 blue-gradient inline-block">
            Why Choose FlytBase Academy
          </h2>
          <p className="text-flytbase-light/70 text-lg max-w-3xl mx-auto">
            We provide world-class education to help you master drone technology and advance your career in this rapidly evolving field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 card-hover-effect"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-flytbase-light">{feature.title}</h3>
              <p className="text-flytbase-light/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-secondary/60 to-secondary/40 rounded-2xl p-8 backdrop-blur-md border border-white/5 shadow-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-flytbase-light">
                Industry-Leading <span className="highlight-gradient">Curriculum</span>
              </h3>
              <p className="text-flytbase-light/70 mb-6">
                Our courses are developed in collaboration with industry leaders to ensure you're learning the most relevant and up-to-date skills required in the drone industry.
              </p>
              <ul className="space-y-3">
                {[
                  'Comprehensive drone technology fundamentals',
                  'Hands-on practical skills development',
                  'Industry-specific applications and case studies',
                  'Regulatory compliance and certification preparation'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-flytbase-blue shrink-0 mr-2 mt-0.5" />
                    <span className="text-flytbase-light/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 bg-flytbase-dark/50 p-6 rounded-xl border border-white/10">
              <div className="text-center">
                <div className="text-5xl font-bold highlight-gradient mb-4">98%</div>
                <p className="text-flytbase-light mb-2 font-medium">Student Satisfaction</p>
                <p className="text-sm text-flytbase-light/60">
                  Based on feedback from over 5,000 graduates who have completed our courses and secured positions in the drone industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
