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
    { label: 'Registrations', href: '#registrations' },
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
      <nav className={`glass-nav hidden md:flex items-center space-x-8 transition-all duration-500 ${
        isScrolled ? 'glass-heavy scale-95' : 'glass'
      }`}>
        <div className="flex items-center space-x-6">
          <img 
            src={amoghaLogo} 
            alt="AMOGHA Logo" 
            className="w-8 h-8 glow"
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
        </div>
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-heavy w-14 h-14 rounded-full flex items-center justify-center border-2 border-primary/30 hover:border-primary/60 transition-all duration-300"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary font-bold" />
          ) : (
            <Menu className="h-6 w-6 text-primary font-bold" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 glass-heavy">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <img 
              src={amoghaLogo} 
              alt="AMOGHA Logo" 
              className="w-16 h-16 glow mb-8"
            />
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-3xl font-bold text-foreground hover:text-gradient transition-colors duration-300 uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-8">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}