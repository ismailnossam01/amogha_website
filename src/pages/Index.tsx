import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { CountdownTimer } from '@/components/countdown-timer';
import { EventCard } from '@/components/event-card';
import { Calendar, Users, Trophy, MapPin, Phone, X, Clock, Award, UserCheck } from 'lucide-react';

import amoghaPoster from '@/assets/amogha-poster.png';
import codeAThonImg from '@/assets/code-a-thon.jpg';
import webAThonImg from '@/assets/web-a-thon.jpg';
import paperSymposiumImg from '@/assets/paper-symposium.jpg';
import technicalQuizImg from '@/assets/technical-quiz.jpg';
import workshopImg from '@/assets/workshop.jpg';

// Event Details Data
const eventDetails = {
  'Code-a-thon': {
    title: 'Code-a-thon',
    description: 'Competitive programming challenge showcasing algorithmic problem-solving skills and coding excellence.',
    teamSize: '1-2 participants per team',
    duration: '4 hours',
    rounds: [
      {
        round: 'Round 1: Online Qualifying',
        description: 'Basic programming problems to filter participants',
        duration: '2 hours'
      },
      {
        round: 'Round 2: Final Coding Challenge',
        description: 'Advanced algorithmic problems with complex data structures',
        duration: '4 hours'
      }
    ],
    rules: [
      'Teams can have maximum 2 members',
      'Use of internet is allowed for documentation only',
      'Plagiarism will lead to immediate disqualification',
      'Bring your own laptop with preferred IDE setup',
      'Languages allowed: C, C++, Java, Python'
    ],
    prizes: ['Winner: ₹15,000', '1st Runner-up: ₹10,000', '2nd Runner-up: ₹5,000'],
    requirements: ['Laptop with coding environment', 'Valid college ID', 'Registration confirmation']
  },
  'Web-a-thon': {
    title: 'Web-a-thon',
    description: 'Creative web development competition focusing on innovative UI/UX design and modern frameworks.',
    teamSize: '1-3 participants per team',
    duration: '6 hours',
    rounds: [
      {
        round: 'Round 1: Design Mockup',
        description: 'Create wireframes and design mockups for given theme',
        duration: '2 hours'
      },
      {
        round: 'Round 2: Development',
        description: 'Build responsive website based on approved mockup',
        duration: '4 hours'
      }
    ],
    rules: [
      'Teams can have maximum 3 members',
      'Use of frameworks and libraries is allowed',
      'Website must be responsive and mobile-friendly',
      'Original content and code required',
      'External APIs usage is permitted'
    ],
    prizes: ['Winner: ₹12,000', '1st Runner-up: ₹8,000', '2nd Runner-up: ₹4,000'],
    requirements: ['Laptop with web development setup', 'Code editor/IDE', 'Valid college ID']
  },
  'Paper Symposium': {
    title: 'Paper Symposium',
    description: 'Academic research presentation platform for emerging technologies and technical innovations.',
    teamSize: '1-4 participants per team',
    duration: '15 minutes per presentation',
    domains: [
      'Artificial Intelligence & Machine Learning',
      'Internet of Things (IoT)',
      'Blockchain Technology',
      'Cybersecurity & Privacy',
      'Cloud Computing',
      'Data Science & Big Data Analytics',
      'Quantum Computing',
      'Augmented Reality & Virtual Reality',
      'Computer Vision',
      'Natural Language Processing',
      'Edge Computing',
      'DevOps & Automation',
      'Mobile Application Development',
      'Web3 & Decentralized Applications',
      'Robotics & Automation'
    ],
    rounds: [
      {
        round: 'Abstract Submission',
        description: 'Submit detailed abstract with methodology and expected outcomes',
        duration: 'Deadline: 15 days before event'
      },
      {
        round: 'Final Presentation',
        description: 'Present your research with live demonstration if applicable',
        duration: '15 minutes presentation + 5 minutes Q&A'
      }
    ],
    rules: [
      'Teams can have maximum 4 members',
      'Abstract must be original and unpublished',
      'PPT format mandatory for presentation',
      'Working prototype/demo is highly appreciated',
      'All team members should participate in Q&A'
    ],
    prizes: ['Best Paper: ₹10,000', 'Best Innovation: ₹7,000', 'Best Presentation: ₹3,000'],
    requirements: ['Research paper/abstract', 'Presentation slides', 'Valid college ID']
  },
  'Technical Quiz': {
    title: 'Technical Quiz',
    description: 'Interactive knowledge competition testing expertise in computer science and technology domains.',
    teamSize: '2 participants per team',
    duration: '2 hours',
    rounds: [
      {
        round: 'Round 1: Written Preliminaries',
        description: 'Multiple choice questions covering basic CS concepts',
        duration: '45 minutes'
      },
      {
        round: 'Round 2: Rapid Fire',
        description: 'Quick-fire questions for qualified teams',
        duration: '30 minutes'
      },
      {
        round: 'Round 3: Final Buzzer',
        description: 'Interactive buzzer round with visual/audio questions',
        duration: '45 minutes'
      }
    ],
    rules: [
      'Exactly 2 members per team mandatory',
      'No electronic devices allowed during quiz',
      'Negative marking for wrong answers in final rounds',
      'Discussion allowed within team for 30 seconds',
      'Tie-breaker questions in case of draw'
    ],
    prizes: ['Winner: ₹8,000', '1st Runner-up: ₹5,000', '2nd Runner-up: ₹2,000'],
    requirements: ['Valid college ID', 'Team registration', 'Writing materials provided']
  },
  'Workshop': {
    title: 'Technical Workshop',
    description: 'Hands-on learning sessions with industry experts on AI, ML, and cutting-edge technologies.',
    teamSize: 'Individual participation',
    duration: '3 hours',
    rounds: [
      {
        round: 'Session 1: Theory & Concepts',
        description: 'Fundamental concepts and real-world applications',
        duration: '1.5 hours'
      },
      {
        round: 'Session 2: Hands-on Practice',
        description: 'Practical implementation and live coding',
        duration: '1.5 hours'
      }
    ],
    rules: [
      'Individual participation only',
      'Bring your own laptop',
      'Pre-installation of required software recommended',
      'Active participation encouraged',
      'Certificate provided to all attendees'
    ],
    prizes: ['Participation Certificate', 'Best Project: ₹3,000', 'Active Learner Award: ₹1,000'],
    requirements: ['Laptop with required software', 'Basic programming knowledge', 'Valid college ID']
  }
};

const Index = () => {
  const [registrationStats] = useState({
    total: 0,
    codeAThon: 0,
    webAThon: 0,
    paperSymposium: 0,
    technicalQuiz: 0,
    workshop: 0
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleKnowMore = (eventTitle) => {
    setSelectedEvent(eventDetails[eventTitle]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

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

  // Enhanced EventCard component with Know More button
  const EnhancedEventCard = ({ title, description, image, registrations, registrationLink }) => (
    <div className="glass-card group hover:glass-heavy transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gradient mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        
        
        <div className="space-y-3">
          <button
            onClick={() => handleKnowMore(title)}
            className="w-full px-4 py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200 font-medium"
          >
            Know More
          </button>
          
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-center font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );

  // Modal Component
  const EventModal = ({ event, isOpen, onClose }) => {
    if (!isOpen || !event) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="relative w-full max-w-4xl max-h-[90vh] bg-background/95 backdrop-blur-md rounded-2xl border border-primary/20 overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md border-b border-border p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl md:text-3xl font-bold text-gradient">{event.title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6 space-y-8">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card text-center">
                <UserCheck className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold text-sm text-muted-foreground mb-1">Team Size</div>
                <div className="font-bold text-foreground">{event.teamSize}</div>
              </div>
              
              <div className="glass-card text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <div className="font-semibold text-sm text-muted-foreground mb-1">Duration</div>
                <div className="font-bold text-foreground">{event.duration}</div>
              </div>
              
              <div className="glass-card text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="font-semibold text-sm text-muted-foreground mb-1">Total Prizes</div>
                <div className="font-bold text-foreground">{event.prizes.length} Categories</div>
              </div>
            </div>

            {/* Description */}
            <div className="glass-card">
              <h3 className="text-xl font-bold text-gradient mb-4">About the Event</h3>
              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            </div>

            {/* Domains (Only for Paper Symposium) */}
            {event.domains && (
              <div className="glass-card">
                <h3 className="text-xl font-bold text-gradient mb-4">Research Domains</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {event.domains.map((domain, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      <span className="text-sm font-medium text-foreground">{domain}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rounds */}
            <div className="glass-card">
              <h3 className="text-xl font-bold text-gradient mb-4">Event Rounds</h3>
              <div className="space-y-4">
                {event.rounds.map((round, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary">{round.round}</h4>
                      <span className="text-sm font-medium text-secondary">{round.duration}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{round.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="glass-card">
              <h3 className="text-xl font-bold text-gradient mb-4">Rules & Regulations</h3>
              <div className="space-y-3">
                {event.rules.map((rule, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{rule}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prizes */}
            <div className="glass-card">
              <h3 className="text-xl font-bold text-gradient mb-4">Prize Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {event.prizes.map((prize, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                    <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-foreground">{prize}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="glass-card">
              <h3 className="text-xl font-bold text-gradient mb-4">Requirements</h3>
              <div className="space-y-3">
                {event.requirements.map((req, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-muted-foreground text-sm">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
            
            {/* Logos Section */}
          <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
            <img
                src="https://res.cloudinary.com/dirtmiqzt/image/upload/v1755077003/logo_tdooap.jpg"
                  alt="RGMCET Logo"
                  className="h-14 w-auto object-contain rounded-lg border border-gray-200 p-1 bg-white"
            />
          <img
              src="https://res.cloudinary.com/dirtmiqzt/image/upload/v1755077003/IEEE_CIS_RGMCET_a6sldg.png"
            alt="IEEE RGMCET Logo"
              className="h-14 w-auto object-contain rounded-lg border border-gray-200 p-1 bg-white"
          />
          <img
                src="https://res.cloudinary.com/dirtmiqzt/image/upload/v1755077005/IEEE_CIS_RGMCET_1_vnmcsq.png"
                alt="IIC Logo"
                className="h-14 w-auto object-contain rounded-lg border border-gray-200 p-1 bg-white"
          />
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
              <div
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <EnhancedEventCard {...event} />
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

      {/* Event Details Modal */}
      <EventModal 
        event={selectedEvent} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default Index;
