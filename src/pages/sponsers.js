import React, { useEffect } from 'react';
import TransitionOnVisible from '../hooks/TransitionOnVisible'; // Adjust the path as per your file structure

const sponsors = [
  { src: "/assets/1.png", name: "KRAKEN" },
  { src: "/assets/sponsers/2.png", name: "BITSO" },
  { src: "/assets/sponsers/3.png", name: "BITHUMB" },
  { src: "/assets/sponsers/4.png", name: "BITBANK" },
  { src: "/assets/sponsers/5.png", name: "BINANCE" },
  { src: "/assets/sponsers/6.png", name: "BITSTAMP" },
  { src: "/assets/sponsers/7.png", name: "COINBASE" },
  { src: "/assets/sponsers/8.png", name: "BITFINEX" },
  { src: "/assets/sponsers/9.png", name: "VALR" },
  { src: "/assets/sponsers/10.jpg", name: "CRYPTO.COM" },
];

const Sponsers = () => {
  const renderSponsors = (startIndex, endIndex) => (
    sponsors.slice(startIndex, endIndex).map((sponsor, index) => (
      <div key={index} className='sponsers_moving_logo-item1'>
        <img src={sponsor.src} alt={sponsor.name} />
        <p>{sponsor.name}</p>
      </div>
    ))
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.getElementById('solana').style.transform = `translateY(${scrollPosition * 0.1}px)`;
      document.getElementById('near').style.transform = `translateX(${scrollPosition * 0.1}px)`;
      document.getElementById('mena').style.transform = `translateY(${scrollPosition * -0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <TransitionOnVisible className='sponser_container'>
      <div className='section_wrapper'>
        <div className='sponsers'>
          <div className='sponsers_content'>
            <div className='sponsers_title'>
              <h2>Our Partners & Friends</h2>
            </div>
            <div className='sponsers_logo'>
              <div className='sponsers_moving_logo1'>
                {renderSponsors(0, 5)}
                {renderSponsors(0, 5)} {/* Duplicate for seamless scrolling */}
              </div>
              <div className='sponsers_moving_logo2'>
                {renderSponsors(5, 10)}
                {renderSponsors(5, 10)} {/* Duplicate for seamless scrolling */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='vertor_sponsers_images'>
        <div className='vertor_sponsers'>
          <img src="/assets/sponsers/vector-bg.png" alt="Vector background" className='vector_sponser_img' />
        </div>
        <div className='vector_icon_moving'>
          <img id="solana" src="/assets/sponsers/solana.png" alt={sponsors[0].name} className='solana' />
          <img id="near" src="/assets/sponsers/near.png" alt={sponsors[1].name} className='near' />
          <img id="mena" src="/assets/sponsers/mena.png" alt={sponsors[2].name} className='mena' />
        </div>
      </div>
    </TransitionOnVisible>
  );
}

export default Sponsers;
