import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <section className='h-wrapper movingBlueGradientBg'>
      <div className='flexCenter paddings innerWidth h-container'>
        <NavLink to="/">
        <img src='./urban logo3.png' alt='logo' width={170} /></NavLink>
        <div className='flexCenter h-menu'>
              <NavLink to='/residencies'>
                Residencies
              </NavLink>
              <a href=''>Our Value</a>
              <a href=''>Contact Us</a>
              <a href=''>Get Started</a>
              <button className='button'>
                <NavLink to='/test'>Login</NavLink>
              </button>
              <button className='button'>
                <NavLink to='/test'>Sign Up</NavLink>
              </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
