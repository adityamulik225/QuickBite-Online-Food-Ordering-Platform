import './App.css'

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';

function App (){
    const [darkMode, setDarkMode] = useState(false);

  return (
    <>
     <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar  darkMode={darkMode}
        setDarkMode={setDarkMode}/>
      <Home/>
      <Footer/>
      </div>
    </>
  );
}

export default App;