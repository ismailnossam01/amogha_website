import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`glass-nav fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-5xl rounded-full transition-all duration-500 ${
        isScrolled ? 'glass-heavy scale-95' : 'glass'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-2 md:px-4 py-2 w-full gap-2">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dirtmiqzt/image/upload/v1754023294/IMG_20250801_101013_ypqkdz.png"
          alt="Amogha Logo"
          className="w-10 h-10 object-contain shrink-0"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-3 md:space-x-5">
          {navItems.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollToSection(href)}
              className="text-foreground hover:text-primary focus:outline-none focus:text-primary active:text-primary transition-colors font-semibold text-sm uppercase tracking-wide"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Theme Toggle (Mobile) */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-background border border-border shadow-xl rounded-xl overflow-hidden z-50 transition-all">
              {navItems.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => scrollToSection(href)}
                  className="w-full text-left px-4 py-3 text-sm text-foreground hover:bg-muted active:bg-muted focus:outline-none focus:bg-transparent transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
