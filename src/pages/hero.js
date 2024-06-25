import React from 'react'
import '../index.css'

const Hero = () => {
    return (
        <div className='container'>
            <div className='navbar'>
                <div className='nav_logo'>
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className='nav_list'>
                    <ul>
                        <li>ABOUT US</li>
                        <li>OUR SERVICES</li>
                        <li>CAREERS</li>
                        <li>BLOG</li>
                    </ul>
                </div>
                <div className='nav_action'>
                    <span className=''>
                        get
                    </span>
                    <p>GET IN TOUCH</p>
                </div>

            </div>
        </div>
    )
}

export default Hero