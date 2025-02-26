import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Resources from './pages/Resources';
import Forums from './pages/Forums';
import Jobs from './pages/Jobs';

function App() {
  useEffect(() => {
    // Check for dark mode preference on initial load
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode && JSON.parse(darkMode)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;