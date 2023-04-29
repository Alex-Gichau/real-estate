import React from 'react';
import './Contacts.css';
import { MdCall, MdFacebook } from 'react-icons/md';
import { BsFillChatDotsFill, BsInstagram, BsMailbox, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contacts = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        {/* Left Side */}
        <div className='c-left'>
          <span className='orangeText'>Our Contacts</span>
          <span className='primaryThinText'>
            <span> | Get To Us Faster and Easier</span>
          </span><br/><br/>
          <span className='secondaryText'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</span>
          <div className='flexColStart contactModes'>
            <div className='flexStart row'>
              {/* Mode 1 */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Call Us</span>
                    <span>+254 790 479 575</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  <span>Call Now</span>
                </div>
              </div>
              {/* Mode 2 - Whatsapp*/}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsWhatsapp size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>WhatsApp Us</span>
                    <span>+254 790 479 575</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  <a href='https://wa.me/+254790479575' target="_blank">
                    <span>Message Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='flexStart row'>
              {/* Mode 3  - Instagram*/}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsInstagram size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Instagram</span>
                    <span>Urban Strategies</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  <a href='https://www.instagram.com' target="_blank">
                    <span>Follow Us</span>
                  </a>
                </div>
              </div>
              {/* Mode 4 - Facebook*/}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdFacebook size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Facebook</span>
                    <span>Urban Strategies</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  <a href='https://www.facebook.com' target="_blank">
                    <span>Like Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='flexStart row'>
              {/* Mode 5 - Email*/}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsMailbox size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Email Us</span>
                    <span>info@urbans.co.ke</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  <a href='https://info@urbanstrategies.co.ke' target="_blank">
                    <span>Message Now</span>
                  </a>
                </div>
              </div>
              {/* Mode 6 - Twitter*/}
              <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsTwitter size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Tweet Us</span>
                    <span>Urban Strategies</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  <a href='https://www.twitter.com' target="_blank">
                    <span>DM Now</span>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      {/* Right Side */}
      <div className='c-right'>
        <div className='image-container'>
          <img src='./contact.jpg' alt='' />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contacts;
