import React from 'react';
import './Footer.css'
import urbanLogo from '../../../public/urban logo3.png';
import { BsInstagram, BsWhatsapp , BsGlobe , BsTwitter , BsFacebook, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <section className='f-wrapper flexColEnd'>
      <div className='paddings innerWidth flexCenter f-container'>
        {/* Left Side */}
        <div className='flexColStart f-left'>
          <img src={urbanLogo} alt='' width={200}/>
          <br />
          <span className='secondaryWhiteText'>
            We look forward to help invest in your future.
            <br /> Buy now, buy the future. Sign Up Today
          </span>
        </div>

        {/* Center Side */}
        <button className='button btn-getStarted'>Get Started</button>

        {/* Right Side */}
        <div className='flexColStart f-right'>
          <span className='primaryWhiteText'>Information</span>
          <span className='secondaryWhiteText'>
            Location to be updated soon. New Office upcoming
          </span>
          <div className='flexCenter f-menu'>
            <span className='primaryWhiteText'><BsWhatsapp/></span>
            <span className='primaryWhiteText'><BsTwitter/></span>
            <span className='primaryWhiteText'><BsGlobe/></span>
            <span className='primaryWhiteText'><BsInstagram/></span>
            <span className='primaryWhiteText'><BsFacebook/></span>
            <span className='primaryWhiteText'><BsYoutube/></span>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
