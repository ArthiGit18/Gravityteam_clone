import React, { useEffect, useRef, useState } from 'react';

const TransitionOnVisible = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    const currentRef = ref.current; // Store the current ref value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored ref in cleanup
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${className} ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default TransitionOnVisible;
