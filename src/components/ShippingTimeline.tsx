import React, { useEffect, useState, useRef } from 'react';
import { UserCheck, Hammer, Truck, Home } from 'lucide-react';
import { TIMELINE_STEPS } from '../data';

export function ShippingTimeline() {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = containerRef.current?.querySelectorAll('.timeline-step-item');
    if (!steps) return;

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -35% 0px', // focused in the center of viewport
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = parseInt(entry.target.getAttribute('data-step') || '1');
          setActiveStep((prev) => Math.max(prev, stepIndex)); // accumulate progress
        }
      });
    }, observerOptions);

    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  const getIcon = (step: number, isActive: boolean) => {
    const iconClass = `w-5 h-5 transition-transform duration-500 ${isActive ? 'scale-110 text-negro-profundo' : 'text-verde-oscuro'}`;
    switch(step) {
      case 1: return <UserCheck className={iconClass} />;
      case 2: return <Hammer className={iconClass} />;
      case 3: return <Truck className={iconClass} />;
      case 4: return <Home className={iconClass} />;
      default: return null;
    }
  };

  return (
    <div ref={containerRef} className="relative max-w-lg mx-auto md:max-w-4xl px-2 py-6">
      {/* Connector Line for Desktop */}
      <div className="hidden md:block absolute left-12 right-12 top-14 h-1.5 bg-verde-suave -z-10 rounded-full overflow-hidden border border-verde-oscuro/5">
        <div 
          className="h-full bg-dorado transition-all duration-700 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, ((activeStep - 1) / 3) * 100))}%` }}
        />
      </div>

      {/* Connector Line for Mobile */}
      <div className="md:hidden absolute left-10 top-10 bottom-10 w-1.5 bg-verde-suave -z-10 rounded-full overflow-hidden border border-verde-oscuro/5">
        <div 
          className="w-full bg-dorado transition-all duration-700 ease-out"
          style={{ height: `${Math.min(100, Math.max(0, ((activeStep - 1) / 3) * 100))}%` }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
        {TIMELINE_STEPS.map((step) => {
          const isActive = step.step <= activeStep;
          const isCurrent = step.step === activeStep;

          return (
            <div 
              key={step.step}
              data-step={step.step}
              className={`timeline-step-item flex flex-row md:flex-col items-center md:items-center relative transition-all duration-500 ${
                isCurrent ? 'scale-102 opacity-100' : isActive ? 'opacity-90' : 'opacity-60'
              }`}
            >
              {/* Icon Container */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-10 ${
                isActive 
                  ? 'bg-dorado border-dorado shadow-md ring-4 ring-verde-suave/80 scale-105' 
                  : 'bg-verde-suave border-verde-oscuro/40 text-verde-oscuro'
              } md:mb-3 ml-5 md:ml-0 mr-4 md:mr-0 cursor-pointer`}
              onClick={() => setActiveStep(step.step)}
              >
                {getIcon(step.step, isActive)}
              </div>

              {/* Text Content */}
              <div className="text-left md:text-center flex-1 pr-2 md:px-1">
                <span className="font-mono text-[9px] font-bold text-verde-oscuro/60 block mb-0.5">PASO 0{step.step}</span>
                <h4 className="font-display text-sm md:text-base font-bold text-verde-oscuro mb-0.5">{step.title}</h4>
                <p className="text-texto-oscuro/90 text-xs leading-tight mb-1">{step.description}</p>
                <p className="text-texto-oscuro/70 text-[10px] leading-snug italic hidden md:block max-w-[180px] mx-auto">{step.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShippingTimeline;
