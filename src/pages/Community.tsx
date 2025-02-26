import { Calendar, Users, Target, MessageSquare } from 'lucide-react';
import Button from '../components/Button';

const upcomingEvents = [
  {
    title: 'Web Application Security CTF',
    date: 'March 15, 2024',
    time: '2:00 PM EST',
    type: 'Virtual',
    description: 'Test your web security skills in our monthly CTF challenge.',
  },
  {
    title: 'Cybersecurity Career Panel',
    date: 'March 20, 2024',
    time: '1:00 PM EST',
    type: 'Virtual',
    description: 'Industry experts share insights on breaking into cybersecurity.',
  },
];

const Community = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Join Our Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Connect with fellow cybersecurity enthusiasts, share knowledge, and grow together
              in our vibrant community.
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upcoming Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Join our virtual events, workshops, and challenges to enhance your skills and
              network with professionals.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900"
              >
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-x-4">
                    <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-500" />
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {event.date} at {event.time}
                    </time>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 border-t border-gray-900/5 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {event.type}
                  </div>
                  <Button variant="primary" size="sm" className="ml-auto">
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Features */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Community Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything you need to grow
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <Users className="h-5 w-5 flex-none text-blue-600 dark:text-blue-500" />
                Study Groups
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                <p className="flex-auto">
                  Join or create study groups for certifications and specific topics.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <Target className="h-5 w-5 flex-none text-blue-600 dark:text-blue-500" />
                CTF Challenges
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                <p className="flex-auto">
                  Regular CTF challenges to test and improve your skills.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <MessageSquare className="h-5 w-5 flex-none text-blue-600 dark:text-blue-500" />
                Discussion Forums
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                <p className="flex-auto">
                  Engage in discussions about the latest security trends and challenges.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Community;