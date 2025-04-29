import { BookOpen, FileText, Video, Download, Star, Clock, Users, Award, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';

const courses = [
  {
    id: 1,
    title: 'Introduction to Cybersecurity',
    instructor: 'Dr. Sarah Mitchell',
    level: 'Beginner',
    duration: '6 weeks',
    enrolled: '2,500+ students',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    description: 'Learn the fundamentals of cybersecurity, including network security, cryptography, and security operations.',
    modules: [
      'Understanding Cybersecurity Landscape',
      'Network Security Fundamentals',
      'Introduction to Cryptography',
      'Security Operations Basics',
      'Risk Management',
      'Security Best Practices'
    ]
  },
  {
    id: 2,
    title: 'Advanced Web Application Security',
    instructor: 'Michael Chen',
    level: 'Intermediate',
    duration: '8 weeks',
    enrolled: '1,800+ students',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    description: 'Master web application security testing, vulnerability assessment, and secure coding practices.',
    modules: [
      'Web Security Fundamentals',
      'OWASP Top 10 Deep Dive',
      'Secure Coding Practices',
      'Authentication & Authorization',
      'API Security',
      'Security Testing Tools'
    ]
  },
  {
    id: 3,
    title: 'Cloud Security Masterclass',
    instructor: 'Alex Thompson',
    level: 'Advanced',
    duration: '10 weeks',
    enrolled: '1,200+ students',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80',
    description: 'Comprehensive guide to securing cloud infrastructure across major platforms.',
    modules: [
      'Cloud Security Fundamentals',
      'AWS Security',
      'Azure Security',
      'Container Security',
      'Cloud Native Security',
      'DevSecOps Practices'
    ]
  }
];

const Resources = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const CourseCard = ({ course }) => (
    <div 
      className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-900 cursor-pointer"
      onClick={() => setSelectedCourse(course)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-flex items-center rounded-full bg-blue-600/90 px-2.5 py-0.5 text-xs font-medium text-white">
            {course.level}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400">
          {course.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {course.enrolled}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            {course.rating}
          </div>
        </div>
      </div>
    </div>
  );

  const CourseDetail = ({ course }) => (
    <div className="space-y-8">
      <button 
        onClick={() => setSelectedCourse(null)}
        className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
      >
        <ChevronRight className="h-4 w-4 rotate-180" />
        <span className="ml-1">Back to Courses</span>
      </button>
      
      <div className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-900">
        <div className="relative h-72 w-full">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-flex items-center rounded-full bg-blue-600/90 px-2.5 py-0.5 text-xs font-medium text-white">
              {course.level}
            </span>
            <h1 className="mt-2 text-3xl font-bold text-white">{course.title}</h1>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-6 border-b border-gray-200 pb-6 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">{course.enrolled}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-gray-600 dark:text-gray-400">{course.rating} Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600 dark:text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">Certificate of Completion</span>
            </div>
          </div>
          
          <div className="mt-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">About this course</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{course.description}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Course Modules</h2>
              <ul className="mt-4 space-y-4">
                {course.modules.map((module, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-500">
                      {index + 1}
                    </div>
                    <span className="text-gray-900 dark:text-white">{module}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button size="lg">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {selectedCourse ? (
          <CourseDetail course={selectedCourse} />
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Security Courses
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Master cybersecurity with our comprehensive courses. Learn from industry experts
                and advance your career.
              </p>
            </div>
            
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Resources;
