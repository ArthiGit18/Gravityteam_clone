import React from 'react'

const Footer = () => {
    
    return (
        <div className='section_wrapper'>
            <div className='footer_wrapper'>
                <div className='footer_content'>
                    <div className='footer_content_abt'>
                        <h3>GRAVITY TEAM</h3>
                        <p>About Us</p>
                        <p>Careers</p>
                    </div>
                    <div className='footer_logo'>
                        <img src="logo.png" alt="logo" />

                    </div>
                </div>

                <div className='copyright'>
                    <p>Terms of Use & Privacy Policy</p>
                    <p>©2024 Gravity Team. All Rights Reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Footer