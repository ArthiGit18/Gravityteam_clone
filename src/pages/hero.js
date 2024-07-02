import React, { useEffect, useState, useRef } from 'react';
import '../index.css';
import Navbar from './navbar';
import Tradebar from './tradebar';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrollY = useRef(0); // Store previous scroll position

  useEffect(() => {
    const video = document.querySelector('.hero_video');
    if (video) {
      video.muted = true;
      video.play().catch(error => {
        console.error('Video play failed:', error);
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollUp = currentScrollY < prevScrollY.current; // Check for scroll up

      setIsScrolled(scrollUp ? false : currentScrollY > 10); // Show on scroll up, hide with threshold on down
      prevScrollY.current = currentScrollY; // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleKeyPress = (event) => {
    if (event.ctrlKey && event.key === 'c') {
      setIsScrolled(!isScrolled); // Toggle visibility based on current state
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup function to remove keydown listener on component unmount
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className='container'>
      <Navbar isScrolled={isScrolled} />
      <div className='hero'>
        <div className='hero_content'>
          <h1 className='hero_big_text'>
            Balancing
            <br />
            Crypto Markets
          </h1>
          <p className='hero_content_p'>
            Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 350+ digital assets across 30+ centralized spot and derivative crypto exchanges.
          </p>
          <button className='hero_content_btn'>
            get in touch
          </button>
        </div>
        <video className='hero_video' autoplay loop muted playsInline>
          <source src="/assets/hero-animation.mp4" type="video/mp4" />
        </video>
        <div className='tradeBar'>
          <Tradebar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
