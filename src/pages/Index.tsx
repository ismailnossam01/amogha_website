import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { CountdownTimer } from '@/components/countdown-timer';
import { EventCard } from '@/components/event-card';
import { Calendar, Users, Trophy, MapPin, Phone } from 'lucide-react';

import amoghaPoster from '@/assets/amogha-poster.png';
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

  const posterUrl = amoghaPoster;
  const logoUrl = 'https://res.cloudinary.com/dirtmiqzt/image/upload/v1754023294/IMG_20250801_101013_ypqkdz.png';

  const events = [
    {
      title: "Code-a-thon",
      description: "Competitive programming challenge showcasing algorithmic problem-solving skills and coding excellence.",
      image: codeAThonImg,
      registrationLink: "https://forms.gle/a63mshJLcb2s157V6"
    },
    {
      title: "Web-a-thon",
      description: "Creative web development competition focusing on innovative UI/UX design and modern frameworks.",
      image: webAThonImg,
      registrationLink: "https://forms.gle/TJroj81ZuwHfR2m3A"
    },
    {
      title: "Paper Symposium",
      description: "Academic research presentation platform for emerging technologies and technical innovations.",
      image: paperSymposiumImg,
      registrationLink: "https://forms.gle/bJoNxF7bZMW1uBJZ8"
    },
    {
      title: "Technical Quiz",
      description: "Interactive knowledge competition testing expertise in computer science and technology domains.",
      image: technicalQuizImg,
      registrationLink: "https://forms.gle/1XcwZYvrScSZLfuP6"
    },
    {
      title: "Workshop",
      description: "Hands-on learning sessions with industry experts on AI, ML, and cutting-edge technologies.",
      image: workshopImg,
      registrationLink: "https://forms.gle/3yAGmbLzhqxi3nyu8"
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.observe-me').forEach((section) => observer.observe(section));

    return () => {
      document.querySelectorAll('.observe-me').forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen hero-bg">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${posterUrl})` }} />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80" />

        <div className="relative z-20 w-full max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient leading-tight">
                AMOGHA 2K25
              </h1>
              <img
                src={logoUrl}
                alt="AMOGHA Logo"
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain glow animate-float"
              />
            </div>

            <CountdownTimer />

            <button
              onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-button px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-lg border-2 border-primary/30 hover:border-primary/60"
            >
              Explore Events
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-4 observe-me bg-background/50">
        <div className="max-w-7xl mx-auto">
          {/* Info Card */}
          <div className="glass-card max-w-4xl mx-auto mb-20 p-6 text-center">
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-6">
              National Level Student Technical Symposium
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base justify-center">
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="font-bold text-lg text-primary">19 | 20 September 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-foreground font-medium">RGMCET</span>
              </div>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Departments of CSE (AI & ML) and CSE & BS<br />
              Rajeev Gandhi Memorial College of Engineering & Technology
            </p>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Featured Events</h2>
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
      <section id="schedule" className="py-24 px-4 observe-me">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gradient mb-10 text-center">Event Schedule</h2>
          {scheduleData.map((day, i) => (
            <div key={i} className="mb-12 glass-card p-6">
              <h3 className="text-2xl font-bold mb-4">{day.day}</h3>
              <ul className="space-y-3">
                {day.events.map((item, j) => (
                  <li key={j} className="flex justify-between items-center border-b border-muted pb-2">
                    <span className="font-medium">{item.time}</span>
                    <span>{item.event}</span>
                    <span className="text-muted-foreground text-sm">{item.location}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Statistics */}
      <section id="stats" className="py-24 px-4 bg-background/50 observe-me">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          <div className="glass-card p-6">
            <Users className="mx-auto h-8 w-8 text-primary mb-2" />
            <p className="text-3xl font-bold">{registrationStats.total}</p>
            <p className="text-sm text-muted-foreground">Total Registrations</p>
          </div>
          {Object.entries(registrationStats).filter(([k]) => k !== "total").map(([key, value]) => (
            <div key={key} className="glass-card p-6">
              <Trophy className="mx-auto h-8 w-8 text-secondary mb-2" />
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground">{key}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-background/80 backdrop-blur-md border-t border-muted">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AMOGHA 2K25. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">+91 98765 43210</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
