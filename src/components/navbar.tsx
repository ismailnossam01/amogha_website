import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X, ChevronDown } from 'lucide-react';
import amoghaLogo from '@/assets/amogha-logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

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
    { label: 'Contact', href: '#contact' },
  ];

  const mobileMainItems = [
    { label: 'Home', href: '#home' },
    { label: 'Events', href: '#events' },
  ];

  const mobileMoreItems = [
    { label: 'Schedule', href: '#schedule' },
    { label: 'Registrations', href: '#registrations' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setIsMoreOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`glass-nav fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full transition-all duration-500 ${
        isScrolled ? 'glass-heavy scale-95' : 'glass'
      }`}>
        <div className="flex items-center space-x-4 px-6 py-3">
          <img 
            src={amoghaLogo} 
            alt="AMOGHA Logo" 
            className="w-10 h-10 glow object-contain"
          />
          <div className="hidden md:flex items-center space-x-6">
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
          
          {/* Mobile Navigation Items */}
          <div className="md:hidden flex items-center space-x-4">
            {mobileMainItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-semibold text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-semibold text-sm uppercase tracking-wide flex items-center space-x-1"
              >
                <span>More</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 glass-heavy rounded-lg border-2 border-primary/30 backdrop-blur-xl z-50 min-w-[150px]">
                  <div className="py-2">
                    {mobileMoreItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium text-sm"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}