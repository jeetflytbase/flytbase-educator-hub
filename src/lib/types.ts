
// Type definitions for FlytBase Academy

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'admin';
  enrolledCourses?: string[];
  completedCourses?: string[];
  progress?: Record<string, number>; // courseId: progressPercentage
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnailUrl: string;
  youtubePlaylistId: string;
  duration: number; // In minutes
  level: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  enrollmentCount: number;
  completionRate: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
  videos?: Video[];
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  duration: number; // In minutes
  order: number;
}

export interface Assessment {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: number; // In minutes
  totalQuestions: number;
  passingScore: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  relatedCourses?: string[];
  questions?: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOption: number;
  explanation?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: string[];
  assessments: string[];
  duration: number; // Total estimated duration in minutes
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
