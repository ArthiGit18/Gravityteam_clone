import React from 'react';

const Navbar = ({ isScrolled }) => {
  return (
    <div className='navbar' style={{ visibility: isScrolled ? 'hidden' : 'visible' }}>
      <div className='nav_logo'>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className='nav_list'>
        <ul>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">OUR SERVICES</a></li>
          <li><a href="#">CAREERS</a></li>
          <li><a href="#">BLOG</a></li>
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
