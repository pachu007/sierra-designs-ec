import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselItem } from '../types';

export function Carousel({ items, id }: { items: CarouselItem[]; id: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Sync scroll position to active index
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const newIndex = Math.round(scrollPosition / itemWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < items.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const itemWidth = container.clientWidth;
    container.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    scrollToIndex(prevIndex);
  };

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500); // 4.5 seconds autoplay

    return () => clearInterval(interval);
  }, [activeIndex, isHovered, items.length]);

  return (
    <div 
      id={id}
      className="relative group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Scroll Area */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="carousel-snap no-scrollbar flex overflow-x-auto w-full rounded-2xl border border-wood-200 shadow-md bg-white"
      >
        {items.map((item) => (
          <div key={item.id} className="carousel-item-snap flex-shrink-0 w-full flex flex-col md:flex-row h-auto md:h-80">
            <div className="w-full md:w-1/2 h-56 md:h-full relative overflow-hidden bg-wood-950">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-wood-50/50">
              <span className="font-mono text-[10px] uppercase tracking-widest text-wood-600 font-bold mb-1">Garantía de Calidad</span>
              <h3 className="font-display text-lg md:text-xl font-bold text-wood-900 mb-2">{item.title}</h3>
              <p className="text-wood-700 text-xs md:text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 text-wood-900 border border-wood-200 hover:bg-wood-100 active:scale-95 shadow transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 cursor-pointer"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 text-wood-900 border border-wood-200 hover:bg-wood-100 active:scale-95 shadow transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-20 cursor-pointer"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="flex justify-center space-x-1.5 mt-3">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex ? 'w-4.5 bg-wood-700' : 'w-1.5 bg-wood-300'}`}
            aria-label={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
