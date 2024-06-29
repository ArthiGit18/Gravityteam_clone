import React from 'react'

const About = () => {
    return (
        <div className='section_wrapper'>
            <section className='about'>
                <h2 className='about_header'>About Gravity Team</h2>
                <div className='about_desc'>
                    <p>At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.</p>
                </div>

                <div className='about_matrix_wrapper'>
                    <div className='about_matrix'>
                        <div className='about_matrix_list'>
                            <span className="about_matrix_list-value">~$300 billion</span>
                            <div className="about_matrix_list-type">
                                cumulative trading<br></br>
                                volume to date
                            </div>
                        </div>
                        <div className='about_matrix_list'>
                            <span className="about_matrix_list-value">1%</span>
                            <div className="about_matrix_list-type">
                                of the global crypto spot <br></br> trading volume
                            </div>
                        </div>
                        <div className='about_matrix_list'>
                            <span className="about_matrix_list-value">~59</span>
                            <div className="about_matrix_list-type">
                                Gravity Teammates<br></br>
                                (& growing)
                            </div>
                        </div>
                        <div className='about_matrix_list'>
                            <span className="about_matrix_list-value">~30+</span>
                            <div className="about_matrix_list-type">
                                leading global and local<br></br>
                                crypto exchanges
                            </div>
                        </div>
                        <div className='about_matrix_list'>
                            <span className="about_matrix_list-value">2017</span>
                            <div className="about_matrix_list-type">
                                start, crypto-natives
                            </div>
                        </div>
                        <div className='about_matrix_list'>
                            <span className="about_matrix_list-value">1,400+</span>
                            <div className="about_matrix_list-type">
                                crypto-asset pairs

                            </div>
                        </div>
                        <div className='about_matrix_list'>
                            <span className="about_matrix_list-value">24/7</span>
                            <div className="about_matrix_list-type">
                                liquidity
                            </div>
                        </div>
                        <div className='about_matrix_list'>
                            <span className="about_matrix_list-value">~$300 mil</span>
                            <div className="about_matrix_list-type">
                                trades done to date
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About