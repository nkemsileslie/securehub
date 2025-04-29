import { Shield, Users, Target, Award, Sparkles, Rocket, Heart, Code, Network, Lock, Zap, Globe } from 'lucide-react';
import Button from '../components/Button';

const stats = [
  { name: 'Active Members', value: '10,000+', icon: Users },
  { name: 'Certifications Earned', value: '5,000+', icon: Award },
  { name: 'CTF Challenges', value: '500+', icon: Target },
  { name: 'Success Stories', value: '1,000+', icon: Heart },
];

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Former CISO with 15+ years of cybersecurity experience.',
    quote: "Security is not just about protection; it's about empowerment."
  },
  {
    name: 'Michael Chen',
    role: 'Head of Education',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Certified instructor specializing in offensive security.',
    quote: 'The best way to learn is by doing, failing, and trying again.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Cloud security expert with a focus on emerging technologies.',
    quote: 'Innovation and security must evolve together.'
  },
  {
    name: 'James Wilson',
    role: 'Head of Research',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Leading research in AI-driven security solutions.',
    quote: 'Tomorrow\'s threats require tomorrow\'s solutions.'
  },
  {
    name: 'Aisha Patel',
    role: 'Community Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Building bridges between security professionals worldwide.',
    quote: 'Community is the heart of cybersecurity.'
  },
  {
    name: 'David Kim',
    role: 'Lead Security Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Designing robust security solutions for enterprise systems.',
    quote: 'Security by design is not optional.'
  }
];

const values = [
  {
    icon: Network,
    title: 'Innovation First',
    description: 'Embracing cutting-edge technologies and methodologies in cybersecurity.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Building a vibrant, supportive community of security professionals.',
  },
  {
    icon: Lock,
    title: 'Hands-on Learning',
    description: 'Real-world experience through practical challenges and labs.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Making cybersecurity education accessible worldwide.',
  }
];

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-x-4">
              <span className="flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-500/10 dark:text-blue-500 dark:ring-blue-500/20">
                <Zap className="h-4 w-4" />
                Est. 2024
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Securing Tomorrow,
              <br />
              <span className="text-blue-600 dark:text-blue-500">Together</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              SecureHub is more than a platform—it's a movement. We're building a future where
              cybersecurity knowledge is accessible, engaging, and community-driven. Join us in
              creating a more secure digital world, one learner at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-gray-800" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-500">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              What drives us forward
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center text-center">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <value.icon
                      className="h-8 w-8 flex-none text-blue-600 dark:text-blue-500"
                      aria-hidden="true"
                    />
                    {value.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Our Impact
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-blue-50/80 dark:bg-gray-800/50 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                    <stat.icon className="mx-auto h-6 w-6 text-blue-600 dark:text-blue-500 mb-2" />
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600 dark:text-blue-500">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Passionate experts dedicated to revolutionizing cybersecurity education.
            </p>
          </div>
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {team.map((person) => (
              <li key={person.name} className="group relative">
                <div className="relative h-[300px] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                  <img
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={person.image}
                    alt={person.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-semibold tracking-tight">{person.name}</h3>
                    <p className="text-sm text-blue-400">{person.role}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm italic text-gray-600 dark:text-gray-400">"{person.quote}"</p>
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">{person.bio}</p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-20 text-center">
            <Button variant="primary" size="lg">
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
