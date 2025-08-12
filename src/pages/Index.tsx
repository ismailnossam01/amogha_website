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
    total: 0,
    codeAThon: 0,
    webAThon: 0,
    paperSymposium: 0,
    technicalQuiz: 0,
    workshop: 0
  });

  const posterUrl = amoghaPoster;
  const logoUrl =
    'https://res.cloudinary.com/dirtmiqzt/image/upload/v1754023294/IMG_20250801_101013_ypqkdz.png';

  const events = [
    {
      title: 'Code-a-thon',
      description:
        'Competitive programming challenge showcasing algorithmic problem-solving skills and coding excellence.',
      image: codeAThonImg,
      registrations: registrationStats.codeAThon,
      registrationLink: 'https://forms.gle/a63mshJLcb2s157V6'
    },
    {
      title: 'Web-a-thon',
      description:
        'Creative web development competition focusing on innovative UI/UX design and modern frameworks.',
      image: webAThonImg,
      registrations: registrationStats.webAThon,
      registrationLink: 'https://forms.gle/TJroj81ZuwHfR2m3A'
    },
    {
      title: 'Paper Symposium',
      description:
        'Academic research presentation platform for emerging technologies and technical innovations.',
      image: paperSymposiumImg,
      registrations: registrationStats.paperSymposium,
      registrationLink: 'https://forms.gle/bJoNxF7bZMW1uBJZ8'
    },
    {
      title: 'Technical Quiz',
      description:
        'Interactive knowledge competition testing expertise in computer science and technology domains.',
      image: technicalQuizImg,
      registrations: registrationStats.technicalQuiz,
      registrationLink: 'https://forms.gle/1XcwZYvrScSZLfuP6'
    },
    {
      title: 'Workshop',
      description:
        'Hands-on learning sessions with industry experts on AI, ML, and cutting-edge technologies.',
      image: workshopImg,
      registrations: registrationStats.workshop,
      registrationLink: 'https://forms.gle/3yAGmbLzhqxi3nyu8'
    }
  ];

  const scheduleData = [
    {
      day: 'Day 1 - September 19, 2025',
      events: [
        { time: '09:00 AM', event: 'Registration & Welcome', location: 'Main Auditorium' },
        { time: '10:00 AM', event: 'Opening Ceremony', location: 'Main Auditorium' },
        { time: '11:00 AM', event: 'Code-a-thon Begins', location: 'Computer Lab 1' },
        { time: '11:00 AM', event: 'Paper Symposium - Session 1', location: 'Seminar Hall A' },
        { time: '02:00 PM', event: 'Web-a-thon Kickoff', location: 'Computer Lab 2' },
        { time: '03:30 PM', event: 'Technical Workshop', location: 'Conference Room' },
        { time: '05:00 PM', event: 'Day 1 Wrap-up', location: 'Main Auditorium' }
      ]
    },
    {
      day: 'Day 2 - September 20, 2025',
      events: [
        { time: '09:00 AM', event: 'Technical Quiz', location: 'Main Auditorium' },
        { time: '11:00 AM', event: 'Paper Symposium - Session 2', location: 'Seminar Hall A' },
        { time: '01:00 PM', event: 'Final Presentations', location: 'Main Auditorium' },
        { time: '03:00 PM', event: 'Judging & Evaluation', location: 'Conference Room' },
        { time: '04:30 PM', event: 'Award Ceremony', location: 'Main Auditorium' },
        { time: '05:30 PM', event: 'Closing Ceremony', location: 'Main Auditorium' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.observe-me').forEach(section => observer.observe(section));

    return () => {
      document.querySelectorAll('.observe-me').forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen hero-bg">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-32 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${posterUrl})` }}
        />
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
              onClick={() =>
                document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })
              }
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
                <span className="font-bold text-lg text-primary">
                  19 | 20 September 2025
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-foreground font-medium">RGMCET</span>
              </div>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Departments of CSE (AI & ML) and CSE & BS
              <br />
              Rajeev Gandhi Memorial College of Engineering & Technology
            </p>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Featured Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of technical competitions and learning opportunities
              designed to showcase innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <a
                key={index}
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <EventCard {...event} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 px-4 observe-me bg-background/50">
        <div className="max-w-7xl mx-auto">
          {/* Info Card */}
          {/* (Info card code same as before) */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <EventCard {...event} />
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => openModal(event)}
                    className="glass-button px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 border border-primary/40"
                  >
                    Know More
                  </button>
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 border border-secondary/40"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl shadow-xl max-w-lg w-full glass-card relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gradient">{selectedEvent.title}</h3>
              <p className="text-muted-foreground">{selectedEvent.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Instructions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {selectedEvent.instructions?.map((ins, idx) => (
                    <li key={idx}>{ins}</li>
                  ))}
                </ul>
              </div>
              {selectedEvent.domains && (
                <div>
                  <h4 className="font-semibold mb-2">Domains:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {selectedEvent.domains.map((dom, idx) => (
                      <li key={idx}>{dom}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
                {day.events.map((evt, evtIndex) => (
                  <div
                    key={evtIndex}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-lg glass hover:glass-heavy transition-all duration-300"
                  >
                    <div className="font-semibold text-primary min-w-[100px]">
                      {evt.time}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{evt.event}</div>
                      <div className="text-sm text-muted-foreground flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{evt.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Statistics */}
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
              <div className="text-3xl font-bold text-gradient">
                {registrationStats.total}
              </div>
              <div className="text-sm text-muted-foreground">Total Registrations</div>
            </div>
            {events.map((event, index) => (
              <div
                key={index}
                className="glass-card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Trophy className="h-8 w-8 mx-auto mb-4 text-secondary" />
                <div className="text-3xl font-bold text-gradient">
                  {event.registrations}
                </div>
                <div className="text-sm text-muted-foreground">{event.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 mt-20" id="contact">
  <div className="max-w-6xl mx-auto">
    <div className="glass-card">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="space-y-4">
          <img
            src={logoUrl}
            alt="AMOGHA Logo"
            className="w-20 glow mx-auto md:mx-0"
          />
          <h3 className="text-xl font-bold text-gradient">AMOGHA 2K25</h3>
          <p className="text-muted-foreground">
            National Level Student Technical Symposium empowering the next
            generation of tech innovators.
          </p>
        </div>

        {/* Right Side - Contact */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">
            Contact Information
          </h4>

          {/* Numbers in 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary" />
              <div>
                <div className="font-medium">Faculty Coordinator</div>
                <div className="text-muted-foreground">9441666995 (Hara Gopal V.P)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-primary" />
              <div>
                <div className="font-medium">Faculty Coordinator</div>
                <div className="text-muted-foreground">9441666995 (Arun Babu)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-secondary" />
              <div>
                <div className="font-medium">Student Coordinator</div>
                <div className="text-muted-foreground">7288846210 (Ismail N)</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-secondary" />
              <div>
                <div className="font-medium">Student Coordinator</div>
                <div className="text-muted-foreground">9652162995 (Subahan S)</div>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 fill="none" viewBox="0 0 24 24" 
                 strokeWidth={1.5} stroke="currentColor" 
                 className="w-4 h-4 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 
                   2.25 0 01-2.25-2.25V6.75m0 0l9 6 9-6m-18 0L12 
                   12.75 21.75 6.75" />
            </svg>
            <div>
              <div className="font-medium">Email</div>
              <div className="text-muted-foreground">amogha@rgmcet.edu.in</div>
            </div>
          </div>
        </div>
      </div>

            {/* Bottom Section */}
            <div className="mt-8 pt-8 border-t border-border text-center space-y-4">
              <p className="text-muted-foreground">
                © 2025 AMOGHA 2K25. All rights reserved.
                <span className="mx-2">•</span>
                Rajeev Gandhi Memorial College of Engineering & Technology
              </p>

              {/* Designer Card */}
              <a
                href="https://ismailnportfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-muted/40 hover:bg-muted/60 backdrop-blur-md shadow-sm transition hover:shadow-md"
              >
                <img
                  src="https://res.cloudinary.com/dirtmiqzt/image/upload/v1754035126/ismail_nossam_passport_size_eaaqzl.jpg"
                  alt="Ismail Nossam"
                  className="w-8 h-8 rounded-full object-cover border border-primary"
                />
                <div className="text-sm font-medium text-foreground text-left">
                  <span className="block leading-tight">Website Designed By</span>
                  <span className="block font-semibold">Ismail Nossam</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
