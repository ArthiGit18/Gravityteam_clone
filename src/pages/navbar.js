import React from 'react';

const Navbar = ({ isScrolled }) => {
  return (
    <div className='navbar' style={{ visibility: isScrolled ? 'hidden' : 'visible' }}>
      <div className='nav_logo'>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className='nav_list'>
        <ul>
          <li><a href="/about">ABOUT US</a></li>
          <li><a href="/services">OUR SERVICES</a></li>
          <li><a href="/careers">CAREERS</a></li>
          <li><a href="/blog">BLOG</a></li>
        </ul>
      </div>
      <div className='nav_action'>
        <span className='disc'></span>
        <p>GET IN TOUCH</p>
      </div>
    </div>
  );
};

export default Navbar;
