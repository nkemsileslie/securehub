import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Network } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const darkMode = localStorage.getItem('darkMode');
    return darkMode ? JSON.parse(darkMode) : true;
  });
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
    { name: 'Events & Gallery', href: '/events' },
    //{ name: 'Jobs', href: '/jobs' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Network className="h-8 w-8 text-blue-600 dark:text-blue-500 rotate-45" />
              <div className="ml-2 flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  <span className="text-blue-600 dark:text-blue-500">Secure</span>Hub
                </span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Connect. Learn. Secure.</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 ${
                  location.pathname === item.href
                    ? 'font-semibold text-blue-600 dark:text-blue-500'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Button variant="primary">Join Now</Button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="mr-2 p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 ${
                  location.pathname === item.href
                    ? 'font-semibold text-blue-600 dark:text-blue-500'
                    : 'https://tinyurl.com/SecureHubb'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button variant="primary" className="w-full">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
