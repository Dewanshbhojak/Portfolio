import React, { useEffect, useRef, useState } from 'react';

const VerticalLine = () => {
  const lineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const lineTop = lineRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (lineTop < windowHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        ref={lineRef}
        className={`w-1 ${isVisible ? 'h-screen' : 'h-0'} bg-blue-500 transition-all duration-1000 ease-in-out`}
      ></div>
    </div>
  );
};

export default VerticalLine;
