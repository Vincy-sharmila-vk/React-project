import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Signup from "./Signup";
import Login from "./Login.js";
import { useState } from "react";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };
const [buttonPopup, setButtonPopup] = useState(false);
const [buttonpopup, setButtonpopup] = useState(false);

  return (
    <header>
      
      <h3>VKS Book</h3>
      <nav ref={navRef}>
        <a href="">Home</a>
        <a href="/#about">about us</a>
        <a href="/#product">product</a>
        <div className="btn">
        <button className="sign" onClick={() => setButtonpopup(true)}>Login</button>
        <Login trigger={buttonpopup} settrigger={setButtonpopup}>
          <div className="loginform">
            <label>EMAIL ID</label><br></br>
            <input type="mail" name="mail" placeholder="Enter your Email Id"></input><br></br>
            <label>PASS WORD</label><br></br>
            <input type="password" name="password" placeholder="Enter your Pass word"></input>
            <button className="login-btn">Login</button>
          </div>
          
        </Login>
        <button className="sign" onClick={() => setButtonPopup(true)}>sign up</button>
        <Signup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="loginform">
            <label>Name</label>
            <input type="text" name="name" placeholder="enter your Name"></input>
            <label>Email ID</label>
            <input type="text" name="name" placeholder="enter your Email"></input>
            <label>PAssword</label>
            <input type="text" name="name" placeholder="enter your Pass word"></input>
            <label>Confirm Pass Word</label>
            <input type="text" name="name" placeholder="enter your pass word"></input>
            <button className="login-btn">Signup</button>

          </div>
          
        </Signup>
        </div>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};



export default Navbar;