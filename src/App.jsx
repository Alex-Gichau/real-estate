import './App.css';
import React from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';    
import Errorpage from './pages/Errorpage';
import Test from './pages/Test';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='*' element={<Errorpage/>}/>

          {/* Incomplete pages go to Test */}
          <Route path='/test' element={<Test/>}/>
      </Routes>
    </Router>
  );
}

export default App;
