import './App.css';
import React from 'react';
import Home from './pages/Home';
import Signup from './pages/signup';
import Login from './pages/Login';    
import Errorpage from './pages/errorpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='*' element={<Errorpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
