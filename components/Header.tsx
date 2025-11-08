"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { AnimatePresence, motion } from 'framer-motion';
import ServicesDropdown from './navigation/ServicesDropdown';
import ProjectsDropdown from './navigation/ProjectDropdown'; // <-- Corrected import name
import { servicesData } from '@/lib/data';

/**
 * A self-contained component for the theme toggle button.
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="p-2 mr-1.5 w-[40px] h-[40px]"></div>;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5 focus:outline-none mr-1.5"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <span className="material-symbols-rounded">light_mode</span>
      ) : (
        <span className="material-symbols-rounded">dark_mode</span>
      )}
    </button>
  );
};

type DropdownType = 'services' | 'projects' | null;

/**
 * The main Header component for the entire application.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      onMouseLeave={() => setOpenDropdown(null)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 dark:bg-gsurface-dark/90 backdrop-blur shadow-sm border-b border-gray-200/70 dark:border-white/10'
          : 'bg-transparent'
        }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* --- CORRECTED LOGO SECTION --- */}
          <Link href="/" onClick={closeAllMenus} className="flex items-center gap-3">
            <Image
              src="/appplexlogo.jpg"
              alt="AppPlex Logo"
              width={48} // Matched to className size for optimal performance
              height={48} // Matched to className size for optimal performance
              className="h-12 w-12 rounded-full object-cover border border-gray-300 dark:border-gray-700"
            />
            <span className="text-xl md:text-[22px] font-semibold tracking-tight text-gray-900 dark:text-white">
              App <span className="text-gblue dark:text-gblue-dark">Plex</span>
            </span>
          </Link>
          {/* --- END CORRECTED LOGO SECTION --- */}


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="relative" onMouseEnter={() => setOpenDropdown('services')}>
              <Link href="/services" className="text-gray-800 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-white/5 px-3 py-2 rounded-pill text-sm font-medium transition-colors flex items-center gap-1">
                Services <span className="material-symbols-rounded text-[18px]">expand_more</span>
              </Link>
              <AnimatePresence>{openDropdown === 'services' && <ServicesDropdown />}</AnimatePresence>
            </div>

            <div className="relative" onMouseEnter={() => setOpenDropdown('projects')}>
              <Link href="/projects" className="text-gray-800 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-white/5 px-3 py-2 rounded-pill text-sm font-medium transition-colors flex items-center gap-1">
                Projects <span className="material-symbols-rounded text-[18px]">expand_more</span>
              </Link>
              <AnimatePresence>{openDropdown === 'projects' && <ProjectsDropdown />}</AnimatePresence>
            </div>

            <Link href="/about" onMouseEnter={() => setOpenDropdown(null)} className="text-gray-800 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-white/5 px-3 py-2 rounded-pill text-sm font-medium transition-colors">About</Link>
            <Link href="/blog" onMouseEnter={() => setOpenDropdown(null)} className="text-gray-800 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-white/5 px-3 py-2 rounded-pill text-sm font-medium transition-colors">Blog</Link>
            <Link href="/contact" onMouseEnter={() => setOpenDropdown(null)} className="text-gray-800 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-white/5 px-3 py-2 rounded-pill text-sm font-medium transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center">
            <ThemeToggle />
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5" aria-label="Toggle menu">
                <span className="material-symbols-rounded">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-gsurface-dark/95 backdrop-blur border-b border-gray-200/70 dark:border-white/10"
          >
            {/* ... Mobile menu content remains the same ... */}
            <div className="container px-2 pt-2 pb-3 space-y-1">
              <Link href="/" onClick={closeAllMenus} className="block px-3 py-2 rounded-xl text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-white/5">Home</Link>
              <details className="group px-3 rounded-xl [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between py-2 cursor-pointer font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-white/5 rounded-xl">
                  Services
                  <span className="material-symbols-rounded transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <ul className="mt-2 pl-4 space-y-1 border-l border-gray-200 dark:border-white/10">
                  {servicesData.map(s => (
                    <li key={s.slug}>
                      <Link href={`/service/${s.slug}`} onClick={closeAllMenus} className="block py-1.5 pl-2 text-gray-700 dark:text-gray-300 hover:text-gblue dark:hover:text-gblue-dark">{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </details>
              <Link href="/projects" onClick={closeAllMenus} className="block px-3 py-2 rounded-xl text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-white/5">Projects</Link>
              <Link href="/about" onClick={closeAllMenus} className="block px-3 py-2 rounded-xl text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-white/5">About</Link>
              <Link href="/blog" onClick={closeAllMenus} className="block px-3 py-2 rounded-xl text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-white/5">Blog</Link>
              <Link href="/contact" onClick={closeAllMenus} className="block px-3 py-2 rounded-xl text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-white/5">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}