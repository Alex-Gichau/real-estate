import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import logo from '../../public/urban logo2.png'
import '../App.css'

const login = () => {
  return (
    <div className='App'>
      <Header />
      <div className='form-wrapper flexColCenter paddings innerWidth'>
        {/* <img src={logo} alt="" sizes={120}/> */}
        <h1 className='primaryText'>Login</h1><br/>

        <div className='flexColStart input'>
          <label className='name'>Username</label>
          <input type='text' className='input' />
        </div>

        <div className='flexColStart input'>
          <label className='name'>Password</label>
          <input type='password' className='input' />
        </div>
        
        <button className="button btn">Login</button>
      </div>
      <Footer />
    </div>
  );
};

export default login;
