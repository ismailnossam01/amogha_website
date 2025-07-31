import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X } from 'lucide-react';

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
      <nav className={`glass-nav hidden md:flex items-center space-x-8 transition-all duration-300 ${
        isScrolled ? 'glass-heavy' : 'glass'
      }`}>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-button w-12 h-12 rounded-full flex items-center justify-center"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 glass-heavy">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl font-semibold text-foreground hover:text-gradient transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}