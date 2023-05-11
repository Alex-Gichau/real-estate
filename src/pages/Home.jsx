import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import '../../src/App.css';
import Residencies from '../components/Residencies/Residencies';
import Values from '../components/Values/Values';
import Contacts from '../components/Contacts/Contacts';
import React from 'react';
import { Router } from 'react-router-dom';

function Home() {
  return (
    <div className='App'>
      <Header/>
      <div className='white-gradient' />
      <Hero />
      <Residencies />
      <Values />
      <Contacts />
    </div>
  );
}

export default Home;
