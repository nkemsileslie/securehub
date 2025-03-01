import { Shield, Users, Target, Award, Sparkles, Rocket, Heart, Code } from 'lucide-react';
import Button from '../components/Button';

const stats = [
  { name: 'Active Members', value: 'be NO. 1', icon: Users },
  { name: 'Certifications Earned', value: 'get certified', icon: Award },
  { name: 'CTF Challenges', value: 'every month', icon: Target },
  { name: 'Success Stories', value: '', icon: Heart },
];

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Former CISO with 15+ years of cybersecurity experience.',
    quote: "Security is not just about protection; it's about empowerment.",
  },
  {
    name: 'Michael Chen',
    role: 'Head of Education',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Certified instructor specializing in offensive security.',
    quote: 'The best way to learn is by doing, failing, and trying again.',
  },
  {
    name: 'Aisha Bello',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1544723495-432537d4f32d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Building and nurturing vibrant communities worldwide.',
    quote: 'Community is at the heart of everything we do.',
  },
  {
    name: 'James Thompson',
    role: 'Cybersecurity Analyst',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Passionate about threat intelligence and network security.',
    quote: 'Stay curious, stay secure.',
  },
];

const values = [
  {
    icon: Sparkles,
    title: 'Innovate & Inspire',
    description: 'We cultivate a space where new ideas thrive and creativity drives cybersecurity forward.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our strength lies in our vibrant, supportive community where learning and growth are fun and collaborative.',
  },
  {
    icon: Code,
    title: 'Hands-on Learning',
    description: 'Real-world experience through practical challenges.',
  },
  {
    icon: Rocket,
    title: 'Continuous Growth',
    description: 'Never stop learning, never stop growing.',
  },
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
            <p className="text-lg font-semibold leading-8 tracking-tight text-blue-600 dark:text-blue-500">
              Est. 2024
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Where Cybersecurity
              <br />
              Meets Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              SecureHub was born from a simple idea: make cybersecurity education accessible,
              engaging, and community-driven. We're not just building a platform; we're creating 
              a vibrant community where learning and growth are fun, collaborative, and inspiring.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-blue-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
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
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Growing Stronger Together
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
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Passionate experts dedicated to revolutionizing cybersecurity education.
          </p>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {team.map((person) => (
            <li key={person.name} className="group relative">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <img
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={person.image}
                  alt={person.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold tracking-tight">{person.name}</h3>
                  <p className="text-blue-400">{person.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-base italic text-gray-600 dark:text-gray-400">"{person.quote}"</p>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{person.bio}</p>
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
  );
};

export default About;