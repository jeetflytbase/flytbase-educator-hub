
import { useEffect, useState } from 'react';
import CourseGrid from '@/components/courses/CourseGrid';
import { courses as coursesData } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, BookOpen, Gauge } from 'lucide-react';

const Courses = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary/60 to-secondary/20 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 blue-gradient inline-block">
              Explore Our Courses
            </h1>
            <p className="text-flytbase-light/70 text-lg max-w-3xl">
              Comprehensive drone technology courses designed to help you master skills from basic operations to advanced programming and specialized applications.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 bg-secondary/40 p-1 rounded-lg">
            <TabsTrigger value="all" className="data-[state=active]:bg-flytbase-blue data-[state=active]:text-white">
              <BookOpen className="h-4 w-4 mr-2" />
              All Courses
            </TabsTrigger>
            <TabsTrigger value="beginner" className="data-[state=active]:bg-flytbase-blue data-[state=active]:text-white">
              <GraduationCap className="h-4 w-4 mr-2" />
              Beginner
            </TabsTrigger>
            <TabsTrigger value="intermediate" className="data-[state=active]:bg-flytbase-blue data-[state=active]:text-white">
              <Gauge className="h-4 w-4 mr-2" />
              Intermediate
            </TabsTrigger>
            <TabsTrigger value="advanced" className="data-[state=active]:bg-flytbase-blue data-[state=active]:text-white">
              <Gauge className="h-4 w-4 mr-2" />
              Advanced
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="rounded-xl overflow-hidden animate-pulse">
                    <div className="w-full aspect-video bg-flytbase-blue/10"></div>
                    <div className="p-5 bg-secondary/40">
                      <div className="h-6 bg-flytbase-blue/10 rounded mb-2"></div>
                      <div className="h-4 bg-flytbase-blue/10 rounded mb-2"></div>
                      <div className="h-4 bg-flytbase-blue/10 rounded mb-4 w-2/3"></div>
                      <div className="flex justify-between">
                        <div className="h-3 bg-flytbase-blue/10 rounded w-1/4"></div>
                        <div className="h-3 bg-flytbase-blue/10 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <CourseGrid courses={coursesData} />
            )}
          </TabsContent>
          
          <TabsContent value="beginner" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="rounded-xl overflow-hidden animate-pulse">
                    <div className="w-full aspect-video bg-flytbase-blue/10"></div>
                    <div className="p-5 bg-secondary/40">
                      <div className="h-6 bg-flytbase-blue/10 rounded mb-2"></div>
                      <div className="h-4 bg-flytbase-blue/10 rounded mb-2"></div>
                      <div className="h-4 bg-flytbase-blue/10 rounded mb-4 w-2/3"></div>
                      <div className="flex justify-between">
                        <div className="h-3 bg-flytbase-blue/10 rounded w-1/4"></div>
                        <div className="h-3 bg-flytbase-blue/10 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <CourseGrid 
                courses={coursesData.filter(
                  course => course.level === 'beginner'
                )} 
              />
            )}
          </TabsContent>
          
          <TabsContent value="intermediate" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="rounded-xl overflow-hidden animate-pulse">
                    <div className="w-full aspect-video bg-flytbase-blue/10"></div>
                    <div className="p-5 bg-secondary/40">
                      <div className="h-6 bg-flytbase-blue/10 rounded mb-2"></div>
                      <div className="h-4 bg-flytbase-blue/10 rounded mb-2"></div>
                      <div className="h-4 bg-flytbase-blue/10 rounded mb-4 w-2/3"></div>
                      <div className="flex justify-between">
                        <div className="h-3 bg-flytbase-blue/10 rounded w-1/4"></div>
                        <div className="h-3 bg-flytbase-blue/10 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <CourseGrid 
                courses={coursesData.filter(
                  course => course.level === 'intermediate'
                )} 
              />
            )}
          </TabsContent>
          
          <TabsContent value="advanced" className="mt-0">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="rounded-xl overflow-hidden animate-pulse">
                    <div className="w-full aspect-video bg-flytbase-blue/10"></div>
                    <div className="p-5 bg-secondary/40">
                      <div className="h-6 bg-flytbase-blue/10 rounded mb-2"></div>
                      <div className="h-4 bg-flytbase-blue/10 rounded mb-2"></div>
                      <div className="h-4 bg-flytbase-blue/10 rounded mb-4 w-2/3"></div>
                      <div className="flex justify-between">
                        <div className="h-3 bg-flytbase-blue/10 rounded w-1/4"></div>
                        <div className="h-3 bg-flytbase-blue/10 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <CourseGrid 
                courses={coursesData.filter(
                  course => course.level === 'advanced'
                )} 
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Courses;
