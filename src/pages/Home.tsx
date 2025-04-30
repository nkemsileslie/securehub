import Button from '../components/Button';
import { ArrowRight, Shield, Users, BookOpen, Award, Target, Zap, Lock } from 'lucide-react';

const features = [
  {
    name: 'Community-Driven Learning',
    description:
      'Join a thriving community of cybersecurity professionals and enthusiasts.',
    icon: Users,
  },
  {
    name: 'Expert Resources',
    description:
      'Access curated open-source learning materials, tutorials, and certification guides.',
    icon: BookOpen,
  },
  /*{
    name: 'Career Growth',
    description:
      'Find job opportunities and advance your cybersecurity career.',
    icon: Award,
  },*/
  {
    name: 'Hands-on Training',
    description:
      'Practice with real-world scenarios and CTF challenges.',
    icon: Target,
  },
  {
    name: 'Latest Tools',
    description:
      'Stay updated with the newest cybersecurity tools and techniques.',
    icon: Zap,
  },
  {
    name: 'Expert Mentorship',
    description:
      'Learn directly from industry veterans and certified professionals.',
    icon: Lock,
  },
];

const testimonials = [
  {
    content: "SecureHub's community has been instrumental in my journey to becoming a security analyst. The resources and mentorship are unmatched.",
    author: "Sarah Chen",
    role: "Security Analyst at TechCorp",
    image: "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/1661873071853-MHTAY4TKV654HXOIUYTI/Nneka-893+copy+2.jpg?format=1000w"
  },
  {
    content: "The CTF challenges and hands-on labs helped me develop practical skills that I use daily in my penetration testing career.",
    author: "Marcus Johnson",
    role: "Penetration Tester",
    image: "https://th.bing.com/th/id/OIP.nnlLhqPDawYK52Zs37eahgAAAA?rs=1&pid=ImgDetMain&h=200&w=200&c=7&dpr=1.25"
  },
];

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate">
        {/* Background gradient */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-gray-800 dark:hover:ring-gray-700">
                Join our next CTF challenge.{' '}
                <a href="#" className="font-semibold text-blue-600 dark:text-blue-500">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-500/10 dark:text-blue-500 dark:ring-blue-500/20">
                  Latest Updates
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                  Where Passion Fuels Cybersecurity Growth
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Join a community of driven professionals and enthusiasts, gain exclusive insights from industry experts, and accelerate your journey in cybersecurity. Whether you're just starting out or looking to sharpen your skills, SecureHub is your launchpad for success.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
            <a href="https://tinyurl.com/SecureHubb" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img
                  src="https://www.sxsw.com/wp-content/uploads/2019/06/2019-Hackathon-Photo-by-Randy-and-Jackie-Smith.jpg"
                  alt="hackathon image"
                  className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
            </div>
          </div>

        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">
            Why Choose SecureHub
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything you need to excel in cybersecurity
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            From beginner-friendly resources to advanced training, SecureHub provides the tools
            and community you need to succeed in your cybersecurity journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600 dark:text-blue-500">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Hear from our community
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col gap-6 rounded-2xl bg-white p-8 dark:bg-gray-900">
                  <div className="flex items-center gap-x-4">
                    <img
                      className="h-16 w-16 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div>
                      <div className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-base leading-7 text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
