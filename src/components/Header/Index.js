import React from 'react'
// import { Link } from 'react-router-dom';
import "./style.css";
// import menubar from './menubar.png';
const Header = () => {
  return (
    <>
    <header>
        <div className="text">
            <h1>My Portfolio</h1>
        </div>
        <div className="nav_bar">
            <ul>
                
              {/* <Link to='/about'style={{ textDecoration:"none" }}> */}
              {/* <li><a href="#home">Home</a></li> */}
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#internship">Internship</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contactMe">ContactMe</a></li>
            </ul>
        </div>
    </header>
   


    </>
  )
}

export default Header;