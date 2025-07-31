import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { CountdownTimer } from '@/components/countdown-timer';
import { EventCard } from '@/components/event-card';
import { Calendar, Users, Trophy, BookOpen, Wrench, MapPin, Phone, Mail, QrCode, ExternalLink } from 'lucide-react';

// Import assets
import amoghaLogo from '@/assets/amogha-logo.png';
import codeAThonImg from '@/assets/code-a-thon.jpg';
import webAThonImg from '@/assets/web-a-thon.jpg';
import paperSymposiumImg from '@/assets/paper-symposium.jpg';
import technicalQuizImg from '@/assets/technical-quiz.jpg';
import workshopImg from '@/assets/workshop.jpg';

const Index = () => {
  const [registrationStats] = useState({
    total: 1247,
    codeAThon: 234,
    webAThon: 189,
    paperSymposium: 156,
    technicalQuiz: 298,
    workshop: 370
  });

  // Poster URL (same as logo per user's requirement)
  const posterUrl = "https://res.cloudinary.com/dirtmiqzt/image/upload/v1753934249/Amogha_Logo_awwxbu.png";

  const events = [
    {
      title: "Code-a-thon",
      description: "Competitive programming challenge showcasing algorithmic problem-solving skills and coding excellence.",
      image: codeAThonImg,
      registrations: registrationStats.codeAThon
    },
    {
      title: "Web-a-thon",
      description: "Creative web development competition focusing on innovative UI/UX design and modern frameworks.",
      image: webAThonImg,
      registrations: registrationStats.webAThon
    },
    {
      title: "Paper Symposium",
      description: "Academic research presentation platform for emerging technologies and technical innovations.",
      image: paperSymposiumImg,
      registrations: registrationStats.paperSymposium
    },
    {
      title: "Technical Quiz",
      description: "Interactive knowledge competition testing expertise in computer science and technology domains.",
      image: technicalQuizImg,
      registrations: registrationStats.technicalQuiz
    },
    {
      title: "Workshop",
      description: "Hands-on learning sessions with industry experts on AI, ML, and cutting-edge technologies.",
      image: workshopImg,
      registrations: registrationStats.workshop
    }
  ];

  const scheduleData = [
    {
      day: "Day 1 - September 19, 2025",
      events: [
        { time: "09:00 AM", event: "Registration & Welcome", location: "Main Auditorium" },
        { time: "10:00 AM", event: "Opening Ceremony", location: "Main Auditorium" },
        { time: "11:00 AM", event: "Code-a-thon Begins", location: "Computer Lab 1" },
        { time: "11:00 AM", event: "Paper Symposium - Session 1", location: "Seminar Hall A" },
        { time: "02:00 PM", event: "Web-a-thon Kickoff", location: "Computer Lab 2" },
        { time: "03:30 PM", event: "Technical Workshop", location: "Conference Room" },
        { time: "05:00 PM", event: "Day 1 Wrap-up", location: "Main Auditorium" }
      ]
    },
    {
      day: "Day 2 - September 20, 2025",
      events: [
        { time: "09:00 AM", event: "Technical Quiz", location: "Main Auditorium" },
        { time: "11:00 AM", event: "Paper Symposium - Session 2", location: "Seminar Hall A" },
        { time: "01:00 PM", event: "Final Presentations", location: "Main Auditorium" },
        { time: "03:00 PM", event: "Judging & Evaluation", location: "Conference Room" },
        { time: "04:30 PM", event: "Award Ceremony", location: "Main Auditorium" },
        { time: "05:30 PM", event: "Closing Ceremony", location: "Main Auditorium" }
      ]
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.observe-me');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen hero-bg">
      <Navbar />
      
      {/* Hero Section with Poster Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
        {/* Background Poster */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ 
            backgroundImage: `url(${posterUrl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right center'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="animate-float">
              <img 
                src={amoghaLogo} 
                alt="AMOGHA Logo" 
                className="w-24 md:w-32 mx-auto lg:mx-0 glow"
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient animate-fade-in leading-tight">
                AMOGHA
                <br />
                <span className="text-3xl md:text-5xl lg:text-6xl">RIPPLE 2K25</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in">
                National Level Student Technical Symposium
              </p>
              <div className="flex flex-col space-y-4 text-lg">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span className="font-bold text-xl">19 | 20 September 2025</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <span className="text-muted-foreground">Rajeev Gandhi Memorial College of Engineering & Technology</span>
                </div>
                <p className="text-muted-foreground text-center lg:text-left">
                  Departments of CSE (AI & ML) and CSE & BS
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <button 
                  onClick={() => window.open("https://forms.google.com", '_blank')}
                  className="glass-button group flex items-center justify-center space-x-2"
                >
                  <span>Register Now</span>
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button 
                  onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
                  className="glass-card px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                >
                  Explore Events
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Poster Display */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="glass-card p-8 rounded-3xl">
              <img 
                src={posterUrl} 
                alt="AMOGHA RIPPLE 2K25 Poster" 
                className="w-full max-w-md rounded-2xl glow-green animate-float"
              />
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-4 observe-me bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Featured Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of technical competitions and learning opportunities designed to showcase innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 observe-me">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Event Schedule
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete timeline of all symposium activities
            </p>
          </div>

          <div className="space-y-12">
            {scheduleData.map((day, dayIndex) => (
              <div key={dayIndex} className="glass-card">
                <h3 className="text-2xl font-bold text-gradient mb-8">{day.day}</h3>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-lg glass hover:glass-heavy transition-all duration-300">
                      <div className="font-semibold text-primary min-w-[100px]">
                        {event.time}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{event.event}</div>
                        <div className="text-sm text-muted-foreground flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registrations Section */}
      <section id="registrations" className="py-20 px-4 observe-me">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Registration Statistics
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of students in this technical excellence journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="glass-card text-center animate-glow">
              <Users className="h-8 w-8 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold text-gradient">{registrationStats.total}</div>
              <div className="text-sm text-muted-foreground">Total Registrations</div>
            </div>
            
            {events.map((event, index) => (
              <div key={index} className="glass-card text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <Trophy className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <div className="text-3xl font-bold text-gradient">{event.registrations}</div>
                <div className="text-sm text-muted-foreground">{event.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo & Info */}
              <div className="space-y-4">
                <img src={amoghaLogo} alt="AMOGHA Logo" className="w-20 glow" />
                <h3 className="text-xl font-bold text-gradient">AMOGHA – RIPPLE 2K25</h3>
                <p className="text-muted-foreground">
                  National Level Student Technical Symposium empowering the next generation of tech innovators.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">Faculty Coordinator</div>
                      <div className="text-muted-foreground">9441666995</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-secondary" />
                    <div>
                      <div className="font-medium">Student Coordinator</div>
                      <div className="text-muted-foreground">7288846210</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <a 
                      href="https://amogha-ripple.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      amogha-ripple.vercel.app
                    </a>
                  </div>
                </div>
              </div>

              {/* QR Code Area */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Quick Access</h4>
                <div className="glass p-6 rounded-lg text-center">
                  <QrCode className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Scan for event updates and registration links
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground">
                © 2025 AMOGHA – RIPPLE 2K25. All rights reserved. 
                <span className="mx-2">•</span>
                Rajeev Gandhi Memorial College of Engineering & Technology
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;