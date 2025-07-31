import { ExternalLink } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  registrationLink?: string;
}

export function EventCard({ title, description, image, registrationLink = "https://forms.google.com" }: EventCardProps) {
  return (
    <div className="glass-card group hover:scale-105 transition-all duration-300 animate-slide-in">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h3 className="text-xl font-bold text-gradient mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      
      <button 
        onClick={() => window.open(registrationLink, '_blank')}
        className="glass-button w-full group flex items-center justify-center space-x-2"
      >
        <span>Register Now</span>
        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
      </button>
    </div>
  );
}