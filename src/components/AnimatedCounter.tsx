import React, { useState, useEffect, useRef } from 'react';

export function AnimatedCounter({ 
  value, 
  suffix = "", 
  duration = 1500 
}: { 
  value: number; 
  suffix?: string; 
  duration?: number; 
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const end = value;
        if (start === end) return;

        const totalMiliseconds = duration;
        const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
        
        const timer = setInterval(() => {
          start += Math.ceil(end / (totalMiliseconds / 15));
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          } else {
            setCount(start);
          }
        }, 15);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-display">
      {count}{suffix}
    </span>
  );
}

export default AnimatedCounter;
