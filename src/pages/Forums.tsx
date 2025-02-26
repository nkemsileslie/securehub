import { MessageSquare, Users, Clock, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const categories = [
  {
    name: 'General Discussion',
    description: 'General cybersecurity discussions and news.',
    topics: 245,
    posts: 1890,
  },
  {
    name: 'Ethical Hacking',
    description: 'Discussions about penetration testing and ethical hacking.',
    topics: 189,
    posts: 1456,
  },
  {
    name: 'Certifications',
    description: 'Certification preparation and study groups.',
    topics: 167,
    posts: 982,
  },
];

const recentTopics = [
  {
    title: 'Best practices for securing cloud infrastructure',
    author: 'Sarah Chen',
    replies: 23,
    views: 456,
    lastActivity: '2 hours ago',
  },
  {
    title: 'OSCP study group - January 2024',
    author: 'Michael Ross',
    replies: 45,
    views: 789,
    lastActivity: '4 hours ago',
  },
  {
    title: 'New vulnerability in popular CMS',
    author: 'David Kim',
    replies: 12,
    views: 234,
    lastActivity: '6 hours ago',
  },
];

const Forums = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Community Forums
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Join discussions with fellow cybersecurity professionals and enthusiasts.
              Share knowledge, ask questions, and learn from the community.
            </p>
            <div className="mt-10">
              <Button size="lg">
                Start a Discussion
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Categories
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Browse discussions by topic.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900"
              >
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-x-4">
                    <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                  <dl className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-sm text-gray-600 dark:text-gray-400">Topics</dt>
                      <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category.topics}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-600 dark:text-gray-400">Posts</dt>
                      <dd className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category.posts}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="flex items-center gap-x-4 border-t border-gray-900/5 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                  <Button variant="outline" size="sm" className="w-full">
                    View Discussions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Topics */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Recent Discussions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Stay up to date with the latest discussions in our community.
          </p>
        </div>
        <div className="mt-16 divide-y divide-gray-200 dark:divide-gray-800">
          {recentTopics.map((topic) => (
            <div
              key={topic.title}
              className="flex items-center justify-between py-6"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {topic.title}
                </h3>
                <div className="mt-2 flex items-center gap-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-x-2">
                    <Users className="h-4 w-4" />
                    <span>{topic.author}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>{topic.replies} replies</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{topic.lastActivity}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                View Discussion
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;