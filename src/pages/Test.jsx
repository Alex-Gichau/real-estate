import React from 'react';
import Header from '../components/Header/Header';
import '../App.css';
import { NavLink } from 'react-router-dom';

const login = () => {
  return (
    <section>
      <Header />
      <div className='flexColCenter innerWidth paddings'>
        <img src='../../public/images/loader.gif' />
        <span className='primaryText'>
          Oops! We're still working on this. Return to{' '}
          <NavLink className='./Home.jsx'>
            <u>Home</u>
          </NavLink>
        </span>
        <br />
        <span className='secondaryText'>Product of Geeshau&#8482;</span>
      </div>
    </section>
  );
};

export default login;
