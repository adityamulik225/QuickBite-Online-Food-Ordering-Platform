import './Navbar.css'
import Logo from "../assets/logo.png";
import { Search, ShoppingCart, User } from "lucide-react";
import Home from './Home.jsx';


function NavBar() {
  return (
    <nav className="  Navbar">
      <div className="logo">
        <img src={Logo} alt="QuickBite Logo" />
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
      </div>

    
      </ul>
    </nav>
  );
}

export default NavBar;
