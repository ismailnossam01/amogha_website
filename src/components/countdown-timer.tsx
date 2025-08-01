import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-19T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className={`
            flex flex-col items-center 
            px-2 py-1 
            sm:glass-card sm:px-4 sm:py-3 sm:min-w-[80px] sm:animate-glow
          `}
        >
          <div
            className={`
              text-2xl font-bold text-gradient 
              sm:text-4xl
            `}
          >
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div
            className={`
              text-xs uppercase tracking-wider text-muted-foreground 
              sm:text-sm
            `}
          >
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountdownTimer;
