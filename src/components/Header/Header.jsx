import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src='./urban logo3.png' alt='logo' width={170} />
        <div className='flexCenter h-menu'>
          <a href=''>Residencies</a>
          <a href=''>Our Value</a>
          <a href=''>Contact Us</a>
          <a href=''>Get Started</a>
          <button className='button'>
            <a href=''>Login</a>
          </button><button className='button'>
            <a href=''>Sign Up</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header