import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="w-full py-6 site-gutter">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">Yanok AI</span>
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/platform" className="hover:text-teal transition-colors">
            Platform
          </Link>
          <Link href="/solutions" className="hover:text-teal transition-colors">
            Solutions
          </Link>
          <Link href="/partners" className="hover:text-teal transition-colors">
            Partners
          </Link>
          <Link href="/about" className="hover:text-teal transition-colors">
            About
          </Link>
          <Link href="/book-demo" className="btn btn-cta">
            Book an intro
          </Link>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-darkerBlue z-50 p-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/platform" 
                className="hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Platform
              </Link>
              <Link 
                href="/solutions" 
                className="hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="/partners" 
                className="hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Partners
              </Link>
              <Link 
                href="/about" 
                className="hover:text-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/book-demo" 
                className="btn btn-cta w-full text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Book an intro
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
