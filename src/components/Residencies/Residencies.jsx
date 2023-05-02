import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import data from '../../utils/slider.json';
import dataLands from '../../utils/lands.json';
import { sliderSettings } from '../../utils/common';
import { BsMenuApp, BsMenuButton } from 'react-icons/bs';
import { MdEmergency } from 'react-icons/md';

const Residencies = () => {
  return (
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className='r-head flexColStart'>
          <span className='orangeText'>
            Our Best Choices
            <span className='primaryThinText'>
              {' '}
              | Popular Houses and Apartments
            </span>
          </span>
        </div>
        <div className='all-r-cards'>
          <Swiper {...sliderSettings}>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className='flexColStart r-card r-card-residencies'>
                  <img src={card.image} alt='home' />
                  <span className='secondaryText r-price'>
                    <span style={{ color: 'orange' }}>Kes. </span>
                    <span>{card.price}</span>
                  </span>
                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper for land */}
          
          <span className='orangeText'>
            Own a Plot
            <span className='primaryThinText'> | Lands</span>
          </span>
          <Swiper {...sliderSettings}>
            <span>
            <SliderButtons/>
            <button className='button r-view-listings-btn'><MdEmergency/>  View Land Listings</button>
            </span>
            {dataLands.map((card, i) => (
              <SwiperSlide key={i}>
                <div className='flexColStart r-card r-card-lands'>
                  <img src={card.image} alt='home' />
                  <span className='secondaryText r-price'>
                    <span style={{ color: 'orange' }}>Kes. </span>
                    <span>{card.price}</span>
                  </span>
                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className='flexCenter r-buttons'>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
