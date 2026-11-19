import './Navbar.css'
import logo from "../assets/logo.png";
import { Search, ShoppingCart, User ,Sun,Moon} from "lucide-react";
import { useState } from 'react';
import { useEffect } from 'react';



function NavBar() {
  const [darkMode,setDarkMode] =useState(false);
  useEffect(()=>{
    document.body.classList.toggle("dark-mode",darkMode);
  }),[darkMode];
 

  
  return (
    <nav className="  Navbar">
      <div className="logo">
        <img src={logo} alt="QuickBite logo" />
      </div>

      <ul className=" listofitems">
        <li>      
          <a href="/">Home</a>
        </li>
        <li>
            <a href="/Restaurants ">Restaurants</a>
        </li>
        <li>
            <a href="/Offers">Offers</a>
        </li>
        <li>
            <a href="/Contact">Contact</a>
        </li>
        
        <div className="search">
        <button>
          <Search />
        </button>

        <button className="search">
          <ShoppingCart />
          <span>2</span>
        </button>

        <button className="searchbutton">
          <User />
          Login
        </button>
         <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>
      </div>

    
      </ul>
    </nav>
  );
}

export default NavBar;
