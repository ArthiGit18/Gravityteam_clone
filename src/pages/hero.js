import React, { useEffect } from 'react';
import '../index.css';
import Navbar from './navbar';
import Tradebar from './tradebar';

const Hero = () => {
    useEffect(() => {
        const video = document.querySelector('.hero_video');
        if (video) {
            video.muted = true;
            video.play().catch(error => {
                console.error('Video play failed:', error);
            });
        }
    }, []);

    return (
        <div className='container'>
            <Navbar />
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
