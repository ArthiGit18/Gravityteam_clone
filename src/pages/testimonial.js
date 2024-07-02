import React, { useState, useEffect } from 'react';
import TransitionOnVisible from '../hooks/TransitionOnVisible'; // Adjust the path as per your file structure

const testimonials = [
    {
        content: `"Gravity Team has been a supportive partner that has provided many opportunities to our business at an early stage of growth, be it in financing, networking, or marketing. We are extremely happy with our choice of Gravity as a business partner and can highly recommend to other crypto projects."`,
        name: "Szymon Jankowski",
        position: "CEO of HashUp",
        imgSrc: "/assets/testimonial/hashup-1.png",
        altText: "Hashup"
    },
    {
        content: `Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.`,
        name: "Atthakrit Chimplapibul",
        position: "Co-founder & CEO of Bitkub",
        imgSrc: "/assets/testimonial/bitkub-1.png",
        altText: "Bitkub"
    },
    {
        content: `Gravity Team is a key partner for Bitso, and their professionalism has been instrumental in deploying our liquidity strategy and expansion ambitions across Latin America. Gravity Team’s vast market expertise and flexibility to support our business requirements in lightning speed have permitted us to catch up with our product debt, list new tokens in record time, and offer attractive spreads for our end users. We are grateful to partner with Gravity Team and excited to continue working together in making crypto useful.`,
        name: "Atthakrit Chimplapibul",
        position: "Co-founder & CEO of Bitso",
        imgSrc: "/assets/testimonial/bitso-1.png",
        altText: "Bitso"
    }
];

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(autoSlide);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='section_wrapper'>
            <TransitionOnVisible className='testimonial_wrapper'>
                <section className='about'>
                    <h2 className='testimonial_header'>
                        We are in a good company
                    </h2>
                    <div className='testimonial_desc'>
                        <p>Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below</p>
                    </div>

                    <div className='testimonial'>
                        <div className='arrow_test'>
                            <button className='arrow_left' onClick={prevSlide}>
                                <img src="/assets/testimonial/right1.svg" alt="arrow" />
                            </button>
                            <button className='arrow_right' onClick={nextSlide}>
                                <img src="/assets/testimonial/right1.svg" alt="arrow" />
                            </button>
                        </div>

                        <div className='testimonial_container'>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className={`testimonial_content1 ${index === currentSlide ? 'active' : ''}`}>
                                    <div className='testimonial_content-p'>
                                        <p>{testimonial.content}</p>
                                    </div>
                                    <div className='testimonial_content-name'>
                                        <h6>{testimonial.name}</h6>
                                    </div>
                                    <div className='testimonial_content-by'>
                                        <p className=''>{testimonial.position}</p>
                                        <img src={testimonial.imgSrc} alt={testimonial.altText} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='dots'>
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </section>
            </TransitionOnVisible>
        </div>
    );
}

export default Testimonial;
