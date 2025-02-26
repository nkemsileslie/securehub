import { Briefcase, MapPin, Clock, DollarSign, Search } from 'lucide-react';
import Button from '../components/Button';

const jobs = [
  {
    title: 'Senior Security Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$140,000 - $180,000',
    description: 'Looking for an experienced security engineer to lead our application security initiatives.',
    requirements: [
      'Bachelors degree in Computer Science or related field',
      '5+ years of security engineering experience',
      'Strong knowledge of web security and OWASP Top 10',
      'Experience with cloud security (AWS/Azure)',
    ],
  },
  {
    title: 'SOC Analyst',
    company: 'CyberDefense Inc',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80,000 - $110,000',
    description: 'Join our Security Operations Center team to monitor and respond to security incidents.',
    requirements: [
      'Security+ certification required',
      '2+ years of SOC experience',
      'Experience with SIEM tools',
      'Strong analytical and problem-solving skills',
    ],
  },
  {
    title: 'Penetration Tester',
    company: 'SecureNet',
    location: 'New York, NY',
    type: 'Contract',
    salary: '$120,000 - $150,000',
    description: 'Conduct security assessments and penetration testing for our clients.',
    requirements: [
      'OSCP certification required',
      '3+ years of penetration testing experience',
      'Strong knowledge of security tools and methodologies',
      'Excellent report writing skills',
    ],
  },
];

const Jobs = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Cybersecurity Jobs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Find your next opportunity in cybersecurity. Browse jobs from leading
              companies and advance your career.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-900 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500"
                    placeholder="Search jobs..."
                  />
                </div>
              </div>
              <Button size="lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured Jobs
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Browse our latest cybersecurity job opportunities.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900"
            >
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <Button variant="outline" size="sm">
                    Apply Now
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-x-2">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Requirements
                  </h4>
                  <ul className="mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;