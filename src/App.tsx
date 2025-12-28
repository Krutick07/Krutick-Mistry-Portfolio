import React, { useEffect, useState } from 'react';
import {
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Link, Element, scroller } from 'react-scroll';
import { Toaster } from 'sonner';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    scroller.scrollTo("hero", {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -80,
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinkClass =
    "cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors";

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}  scroll-smooth`}>
      <Toaster position="top-center" richColors />
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-80}
              className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
            >
              KM
            </Link>
            <div className="flex items-center gap-6">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-gray-100" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-900" />
                )}
              </button>
              <div className="hidden md:flex items-center gap-6">
                <Link to="hero" smooth duration={500} offset={-80} className={navLinkClass}>Home</Link>
                <Link to="about" smooth duration={500} offset={-80} className={navLinkClass}>About</Link>
                <Link to="projects" smooth duration={500} offset={-80} className={navLinkClass}>Projects</Link>
                <Link to="skills" smooth duration={500} offset={-80} className={navLinkClass}>Skills</Link>
                <Link to="experience" smooth duration={500} offset={-80} className={navLinkClass}>Experience</Link>
                <Link to="contact" smooth duration={500} offset={-80} className={navLinkClass}>Contact</Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
          {menuOpen && (
            <div className="md:hidden px-4 pb-4 pt-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-col gap-4">
                <Link to="hero" smooth duration={500} offset={-80} onClick={closeMenu} className={navLinkClass}>Home</Link>
                <Link to="about" smooth duration={500} offset={-80} onClick={closeMenu} className={navLinkClass}>About</Link>
                <Link to="projects" smooth duration={500} offset={-80} onClick={closeMenu} className={navLinkClass}>Projects</Link>
                <Link to="skills" smooth duration={500} offset={-80} onClick={closeMenu} className={navLinkClass}>Skills</Link>
                <Link to="experience" smooth duration={500} offset={-80} onClick={closeMenu} className={navLinkClass}>Experience</Link>
                <Link to="contact" smooth duration={500} offset={-80} onClick={closeMenu} className={navLinkClass}>Contact</Link>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-20">
          <Element name="hero"><Hero /></Element>
          <Element name="about"><About /></Element>
          <Element name="projects"><Projects /></Element>
          <Element name="skills"><Skills /></Element>
          <Element name="experience"><Experience /></Element>
          <Element name="contact"><Contact /></Element>
        </main> 

        <Footer />
      </div>
    </div>
  );
}

export default App;
