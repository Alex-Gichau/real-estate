import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import logo from '../../public/urban logo2.png';
import '../App.css';

const login = () => {
  return (
    <div className='App'>
      <div className='form-wrapper flexColCenter paddings align-center'>
        <div className='flexColStart paddings form-center'>
          <h1 className='primaryText'>Welcome back!</h1>
          <br />

          <div className='flexColStart input'>
            <label className='name'>Username</label>
            <input type='text' className='text-input' />
          </div>

          <div className='flexColStart input'>
            <label className='name'>Password</label>
            <input type='password' className='text-input' />
          </div>

          <div className='flexColStart firebase-cont'></div>

          <button className='button btn'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default login;
