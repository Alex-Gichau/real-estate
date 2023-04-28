import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Residencies from './components/Residencies/Residencies';
import Values from './components//Values/Values'
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className='App'>
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Residencies/>
      <Values/>
      <Contacts/>
    </div>
  );
}

export default App;
