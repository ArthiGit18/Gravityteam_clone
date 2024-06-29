import React from 'react'

const Testimonial = () => {
    return (
        <div className='section_wrapper'>
            <section className='about'>
                <h2 className='about_header'>We are in a good company</h2>
                <div className='about_desc'>
                    <p>Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below</p>
                </div>

                <div className='testimonial'>
                    <div className='arrow_test'>
                        <button className='arrow_left'>
                            <img src="/assets/testimonial/right1.svg" alt="arrow" />
                        </button>
                        <button className='arrow_right'>
                            <img src="/assets/testimonial/right1.svg" alt="arrow" />
                        </button>
                    </div>

                    <div className='testimonial_content1'>
                        <div className='testimonial_content-p'>
                            <p>"Gravity Team has been a supportive partner that has provided many opportunities to our business at an early stage of growth, be it in financing, networking, or marketing. We are extremely happy with our choice of Gravity as a business partner and can highly recommend to other crypto projects."</p>
                        </div>
                        <div className='testimonial_content-name'>
                            <h6>Szymon Jankowski</h6>
                        </div>
                        <div className='testimonial_content-by'>
                            <p className=''>
                                CEO of HashUp
                            </p>
                            <img src="/assets/testimonial/hashup-1.png" alt="Hashup" />
                        </div>
                    </div>
                    <div className='testimonial_content2'>
                        <div className='testimonial_content-p'>
                            <p>Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.</p>
                        </div>
                        <div className='testimonial_content-name'>
                            <h6>Atthakrit Chimplapibul</h6>
                        </div>
                        <div className='testimonial_content-by'>
                            <p className=''>
                            Co-founder & CEO of Bitkub
                            </p>
                            <img src="/assets/testimonial/bitkub-1.png" alt="Hashup" />
                        </div>
                    </div>
                    <div className='testimonial_content2'>
                        <div className='testimonial_content-p'>
                            <p>Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.</p>
                        </div>
                        <div className='testimonial_content-name'>
                            <h6>Atthakrit Chimplapibul</h6>
                        </div>
                        <div className='testimonial_content-by'>
                            <p className=''>
                            Co-founder & CEO of Bitkub
                            </p>
                            <img src="/assets/testimonial/bitkub-1.png" alt="Hashup" />
                        </div>
                    </div>
                    <div className='testimonial_content3'>
                        <div className='testimonial_content-p'>
                            <p>Gravity Team is a key partner for Bitso, and their professionalism has been instrumental in deploying our liquidity strategy and expansion ambitions across Latin America. Gravity Team’s vast market expertise and flexibility to support our business requirements in lightning speed have permitted us to catch up with our product debt, list new tokens in record time, and offer attractive spreads for our end users. We are grateful to partner with Gravity Team and excited to continue working together in making crypto useful.</p>
                        </div>
                        <div className='testimonial_content-name'>
                            <h6>Atthakrit Chimplapibul</h6>
                        </div>
                        <div className='testimonial_content-by'>
                            <p className=''>
                            Co-founder & CEO of Bitkub
                            </p>
                            <img src="/assets/testimonial/bitkub-1.png" alt="Hashup" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial