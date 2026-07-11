import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Check if on mobile or reduced motion
    const isMobile = window.innerWidth < 1024;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Link hover events
    const addLinkHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], .cursor-pointer');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add listeners on mount and after small delay for dynamic content
    addLinkHoverListeners();
    const timer = setTimeout(addLinkHoverListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      clearTimeout(timer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-wood-600/40 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-100 ease-out hidden lg:block ${
        clicked ? 'scale-75 bg-wood-600/20' : linkHovered ? 'scale-150 bg-wood-100/10 border-wood-700/80' : 'scale-100'
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
      }}
    />
  );
}

export default CustomCursor;
