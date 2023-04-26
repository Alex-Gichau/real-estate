import React from 'react';
import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='orange-circle' />
            <h1>
              We <span>buy and sell</span>
              <br /> Properties
              <br /> at Best <span>Price</span>
            </h1>
          </div>
          <div className='flexColStart hero-des'>
            <span>
              Find spacious apartments from our catalogue listed below!
            </span>
            <span>
              Long walks and travels for an exclusive apartment is over!
            </span>
          </div>

          {/* Search Bar */}
          <div className='flexCenter search-bar'>
            <HiLocationMarker color='var(--blue)' size={25} />
            <input type='text' />
            <button className='button'>Search</button>
          </div>

          {/* Stats numbers */}
          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Customers Satisfied</span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp start={20} end={100} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Properties Available</span>
            </div>
            <div className='flexColCenter stat'>
              <span>
                <CountUp end={24} />
                <span>hrs</span>
              </span>
              <span className='secondaryText'>Availability</span>
            </div>
          </div>
        </div>

        <div className='hero-right'>
          <div className='image-container'>
            <img src='./hero-image.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
