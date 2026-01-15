import { useEffect, useState } from "react";

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export function CountdownTimer({
  initialHours = 2,
  initialMinutes = 12,
  initialSeconds = 59,
}: CountdownTimerProps) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const duration = 
      (initialHours * 60 * 60 * 1000) + 
      (initialMinutes * 60 * 1000) + 
      (initialSeconds * 1000);
    
    const storageKey = 'reyoni_timer_deadline';

    const getDeadline = () => {
      const stored = localStorage.getItem(storageKey);
      if (!stored || new Date(stored).getTime() < new Date().getTime()) {
        const newDeadline = new Date(Date.now() + duration);
        localStorage.setItem(storageKey, newDeadline.toISOString());
        return newDeadline.getTime();
      }
      return new Date(stored).getTime();
    };

    let deadline = getDeadline();

    const updateTime = () => {
      const now = Date.now();
      let distance = deadline - now;

      if (distance < 0) {
        deadline = Date.now() + duration;
        localStorage.setItem(storageKey, new Date(deadline).toISOString());
        distance = duration;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ hours, minutes, seconds });
    };

    updateTime(); // Run immediately
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [initialHours, initialMinutes, initialSeconds]);

  const formatTime = (val: number) => val.toString().padStart(2, "0");

  return (
    <div className="flex justify-center gap-3">
      <div className="text-center">
        <div className="timer-hours bg-white text-primary text-2xl font-bold rounded-lg w-14 h-14 flex items-center justify-center shadow-sm border border-border">
          {formatTime(time.hours)}
        </div>
        <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wide font-medium">
          Hours
        </p>
      </div>
      <div className="text-center">
        <div className="timer-minutes bg-white text-primary text-2xl font-bold rounded-lg w-14 h-14 flex items-center justify-center shadow-sm border border-border">
          {formatTime(time.minutes)}
        </div>
        <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wide font-medium">
          Mins
        </p>
      </div>
      <div className="text-center">
        <div className="timer-seconds bg-white text-primary text-2xl font-bold rounded-lg w-14 h-14 flex items-center justify-center shadow-sm border border-border">
          {formatTime(time.seconds)}
        </div>
        <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wide font-medium">
          Secs
        </p>
      </div>
    </div>
  );
}
