import { BookOpen, FileText, Video, Download, Star } from 'lucide-react';
import Button from '../components/Button';

const resources = [
  {
    title: 'Getting Started in Cybersecurity',
    type: 'Guide',
    level: 'Beginner',
    description: 'A comprehensive guide for those starting their cybersecurity journey.',
    icon: BookOpen,
  },
  {
    title: 'Web Application Security Fundamentals',
    type: 'Course',
    level: 'Intermediate',
    description: 'Learn the basics of securing web applications and preventing common vulnerabilities.',
    icon: FileText,
  },
  {
    title: 'Advanced Penetration Testing',
    type: 'Video Series',
    level: 'Advanced',
    description: 'In-depth tutorials on advanced penetration testing techniques.',
    icon: Video,
  },
];

const certifications = [
  {
    name: 'CompTIA Security+',
    description: 'Foundation-level security certification covering network security, compliance, and operations.',
    difficulty: 'Beginner',
    duration: '2-3 months',
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    description: 'Learn to think like a hacker and understand attack vectors.',
    difficulty: 'Intermediate',
    duration: '3-4 months',
  },
  {
    name: 'OSCP',
    description: 'Advanced penetration testing certification with hands-on labs.',
    difficulty: 'Advanced',
    duration: '4-6 months',
  },
];

const toolkits = [
  {
    name: 'Network Security Toolkit',
    description: 'Essential tools for network security analysis and monitoring.',
    downloads: '5,000+',
  },
  {
    name: 'Web Security Testing Suite',
    description: 'Comprehensive collection of web application security testing tools.',
    downloads: '3,500+',
  },
];

const Resources = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Learning Resources
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Access our curated collection of cybersecurity resources, from beginner guides
              to advanced tutorials and toolkits.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Featured Resources
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Start your learning journey with our most popular resources.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900"
              >
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-x-4">
                    <resource.icon className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {resource.type} • {resource.level}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                      {resource.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 border-t border-gray-900/5 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                  <Button variant="primary" size="sm" className="w-full">
                    Access Resource
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Paths */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Certification Paths
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Explore certification paths and study materials to advance your career.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {cert.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {cert.description}
              </p>
              <dl className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600 dark:text-gray-400">Difficulty:</dt>
                  <dd className="text-sm font-medium text-gray-900 dark:text-white">
                    {cert.difficulty}
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600 dark:text-gray-400">Duration:</dt>
                  <dd className="text-sm font-medium text-gray-900 dark:text-white">
                    {cert.duration}
                  </dd>
                </div>
              </dl>
              <Button variant="outline" size="sm" className="mt-6 w-full">
                View Study Path
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Security Toolkits */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Security Toolkits
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Download our curated collection of security tools and resources.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {toolkits.map((toolkit) => (
              <div
                key={toolkit.name}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900"
              >
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-x-4">
                    <Download className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {toolkit.downloads} downloads
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {toolkit.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                      {toolkit.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 border-t border-gray-900/5 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                  <Button variant="primary" size="sm" className="w-full">
                    Download Toolkit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;