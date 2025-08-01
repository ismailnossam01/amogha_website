import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X } from 'lucide-react';
import amoghaLogo from '@/assets/amogha-logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Events', href: '#events' },
    { label: 'Schedule', href: '#schedule' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`glass-nav flex items-center justify-center w-full max-w-7xl mx-auto px-4 transition-all duration-500 ${
        isScrolled ? 'glass-heavy scale-95' : 'glass'
      }`}>
        <div className="flex items-center space-x-6">
          <img 
            src={amoghaLogo} 
            alt="AMOGHA Logo" 
            className="w-12 h-12 glow object-contain"
          />
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-semibold text-sm uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}