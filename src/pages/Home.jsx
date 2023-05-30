import '../../src/App.css';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Residencies from '../components/Residencies/Residencies';
import Values from '../components/Values/Values';
import Contacts from '../components/Contacts/Contacts';
import React from 'react';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div className='App'>
      <Header/>
      <div className='white-gradient' />
      <Hero />
      <Residencies />
      <Values />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default Home;
