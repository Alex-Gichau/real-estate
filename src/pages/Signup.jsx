import React from 'react';
import { Router, Route, NavLink } from 'react-router-dom';
import Header from '../components/Header/Header';

function signup() {
  return (
    <div>
      <Header/>
      <div className='flexColCenter'>
        <img src="../../public/images/loader.gif"/>
        <p className='secondaryText'>Ooops! Stick working on this. <NavLink to="../../Home">Go Back!</NavLink></p>
      </div>
      
    </div>
  )
}

export default signup