
import { Course, Assessment, User, LearningPath } from './types';

// Admin users (hardcoded)
export const ADMIN_EMAILS = [
  'admin@flytbase.com',
  'instructor@flytbase.com'
];

// Dummy courses data
export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Drone Technology',
    slug: 'intro-to-drone-technology',
    description: 'Learn the fundamentals of drone technology, including components, flight principles, and basic operations.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    youtubePlaylistId: 'PLpEqiloJ_WR8NbCfIr3PSXqkXrHE3Qz5U',
    duration: 120,
    level: 'beginner',
    topics: ['Drone Basics', 'Components', 'Flight Principles'],
    enrollmentCount: 1250,
    completionRate: 78,
    rating: 4.7,
    createdAt: '2023-01-15',
    updatedAt: '2023-02-28',
    videos: [
      {
        id: 'v1',
        title: 'Understanding Drone Components',
        youtubeId: 'dQw4w9WgXcQ',
        duration: 15,
        order: 1
      },
      {
        id: 'v2',
        title: 'Basic Flight Principles',
        youtubeId: 'dQw4w9WgXcQ',
        duration: 20,
        order: 2
      }
    ]
  },
  {
    id: '2',
    title: 'Drone Mapping and Surveying',
    slug: 'drone-mapping-surveying',
    description: 'Master the techniques of aerial mapping and surveying using drones for various industrial applications.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534996858221-380b92700493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80',
    youtubePlaylistId: 'PLpEqiloJ_WR8NbCfIr3PSXqkXrHE3Qz5U',
    duration: 180,
    level: 'intermediate',
    topics: ['Mapping', 'Surveying', 'GIS', 'Photogrammetry'],
    enrollmentCount: 980,
    completionRate: 65,
    rating: 4.8,
    createdAt: '2023-02-10',
    updatedAt: '2023-03-15'
  },
  {
    id: '3',
    title: 'Advanced Drone Programming',
    slug: 'advanced-drone-programming',
    description: 'Learn to program autonomous drone missions using FlytBase SDK and APIs for complex industrial operations.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    youtubePlaylistId: 'PLpEqiloJ_WR8NbCfIr3PSXqkXrHE3Qz5U',
    duration: 240,
    level: 'advanced',
    topics: ['Programming', 'Automation', 'SDK', 'Algorithms'],
    enrollmentCount: 650,
    completionRate: 52,
    rating: 4.9,
    createdAt: '2023-03-01',
    updatedAt: '2023-04-12'
  },
  {
    id: '4',
    title: 'Drone Regulations and Compliance',
    slug: 'drone-regulations-compliance',
    description: 'Understand the global regulatory landscape for commercial drone operations and compliance requirements.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1465829235810-1f982c528e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80',
    youtubePlaylistId: 'PLpEqiloJ_WR8NbCfIr3PSXqkXrHE3Qz5U',
    duration: 150,
    level: 'intermediate',
    topics: ['Regulations', 'Compliance', 'Certification', 'Laws'],
    enrollmentCount: 1120,
    completionRate: 85,
    rating: 4.6,
    createdAt: '2023-01-20',
    updatedAt: '2023-03-05'
  },
  {
    id: '5',
    title: 'Aerial Photography and Videography',
    slug: 'aerial-photography-videography',
    description: 'Master the art of capturing stunning aerial photos and videos using drones for creative and commercial purposes.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1593108408993-58ee9c7825c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80',
    youtubePlaylistId: 'PLpEqiloJ_WR8NbCfIr3PSXqkXrHE3Qz5U',
    duration: 210,
    level: 'intermediate',
    topics: ['Photography', 'Videography', 'Editing', 'Composition'],
    enrollmentCount: 1540,
    completionRate: 72,
    rating: 4.8,
    createdAt: '2023-02-15',
    updatedAt: '2023-04-01'
  },
  {
    id: '6',
    title: 'Drone Fleet Management',
    slug: 'drone-fleet-management',
    description: 'Learn strategies and tools for effectively managing multiple drones for large-scale industrial applications.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523149507604-c7cd8d869c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    youtubePlaylistId: 'PLpEqiloJ_WR8NbCfIr3PSXqkXrHE3Qz5U',
    duration: 180,
    level: 'advanced',
    topics: ['Fleet Management', 'Scheduling', 'Maintenance', 'Operations'],
    enrollmentCount: 730,
    completionRate: 58,
    rating: 4.7,
    createdAt: '2023-03-10',
    updatedAt: '2023-04-15'
  }
];

// Dummy assessments data
export const assessments: Assessment[] = [
  {
    id: '1',
    title: 'Drone Technology Fundamentals',
    slug: 'drone-technology-fundamentals',
    description: 'Test your knowledge of basic drone components, principles, and operations.',
    duration: 30,
    totalQuestions: 20,
    passingScore: 75,
    level: 'beginner',
    relatedCourses: ['1'],
    questions: [
      {
        id: 'q1',
        text: 'What is the main function of a drone\'s propellers?',
        options: [
          'To provide lift and control direction',
          'To provide power to the motors',
          'To stabilize the drone in windy conditions',
          'To transmit signals to the controller'
        ],
        correctOption: 0,
        explanation: 'Propellers generate thrust that provides lift and allows for directional control of the drone.'
      },
      {
        id: 'q2',
        text: 'Which component is primarily responsible for a drone\'s power supply?',
        options: [
          'ESC (Electronic Speed Controller)',
          'Flight controller',
          'Battery',
          'Receiver'
        ],
        correctOption: 2,
        explanation: 'The battery is the primary power source for drones, supplying electricity to all components.'
      }
      // More questions would be added here
    ]
  },
  {
    id: '2',
    title: 'Aerial Mapping Certification',
    slug: 'aerial-mapping-certification',
    description: 'Professional assessment for drone mapping and surveying techniques.',
    duration: 45,
    totalQuestions: 30,
    passingScore: 80,
    level: 'intermediate',
    relatedCourses: ['2']
  },
  {
    id: '3',
    title: 'Drone Programming Proficiency',
    slug: 'drone-programming-proficiency',
    description: 'Advanced assessment on programming autonomous drone operations.',
    duration: 60,
    totalQuestions: 25,
    passingScore: 85,
    level: 'advanced',
    relatedCourses: ['3']
  },
  {
    id: '4',
    title: 'Regulatory Compliance Test',
    slug: 'regulatory-compliance-test',
    description: 'Comprehensive assessment on global drone regulations and compliance requirements.',
    duration: 40,
    totalQuestions: 35,
    passingScore: 85,
    level: 'intermediate',
    relatedCourses: ['4']
  },
  {
    id: '5',
    title: 'Aerial Photography Skills',
    slug: 'aerial-photography-skills',
    description: 'Test your knowledge and skills in drone photography and videography.',
    duration: 50,
    totalQuestions: 40,
    passingScore: 75,
    level: 'intermediate',
    relatedCourses: ['5']
  }
];

// Dummy learning paths
export const learningPaths: LearningPath[] = [
  {
    id: '1',
    title: 'Drone Pilot Certification',
    description: 'Comprehensive path to become a certified professional drone pilot.',
    courses: ['1', '4'],
    assessments: ['1', '4'],
    duration: 300,
    level: 'beginner'
  },
  {
    id: '2',
    title: 'Aerial Mapping Specialist',
    description: 'Specialized path for professionals focusing on mapping and surveying.',
    courses: ['1', '2', '4'],
    assessments: ['1', '2', '4'],
    duration: 450,
    level: 'intermediate'
  },
  {
    id: '3',
    title: 'Drone Programming Expert',
    description: 'Advanced path for developers working on autonomous drone systems.',
    courses: ['1', '3', '6'],
    assessments: ['1', '3'],
    duration: 540,
    level: 'advanced'
  }
];

// Mock user data (for demo purposes)
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@flytbase.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
    role: 'admin'
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
    role: 'student',
    enrolledCourses: ['1', '2', '4'],
    completedCourses: ['1'],
    progress: {
      '1': 100,
      '2': 45,
      '4': 15
    }
  }
];
