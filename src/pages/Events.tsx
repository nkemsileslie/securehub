import { Calendar, ImageIcon, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const events = [
  {
    title: 'Cybersecurity Awareness Workshop',
    description: 'Join us for an interactive session on the latest cybersecurity trends and best practices.',
    date: 'March 15, 2025',
  },
  {
    title: 'SecureHub Community Meetup',
    description: 'Connect with other cybersecurity enthusiasts and professionals.',
    date: 'April 10, 2025',
  },
  {
    title: 'Capture the Flag Competition',
    description: 'Test your skills in a fun and competitive CTF challenge.',
    date: 'May 5, 2025',
  },
];

const galleryImages = [
  {
    src: '/images/event1.jpg',
    alt: 'Workshop in progress',
  },
  {
    src: '/images/event2.jpg',
    alt: 'Community Meetup Group Photo',
  },
  {
    src: '/images/event3.jpg',
    alt: 'Participants in Capture the Flag Challenge',
  },
];

const EventsGallery = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Events & Gallery
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Stay updated with our upcoming events and relive the moments from past activities.
            </p>
          </div>
        </div>
      </div>

      {/* Event Updates */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upcoming Events
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Don’t miss out on our next community engagements and learning opportunities.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.title}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-900"
              >
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-x-4">
                    <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
                    {event.description}
                  </p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <strong>Date: </strong>{event.date}
                  </p>
                </div>
                <div className="flex items-center gap-x-4 border-t border-gray-900/5 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Event Gallery
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Relive the best moments from our past events.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {galleryImages.map((image) => (
              <div key={image.alt} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGallery;
