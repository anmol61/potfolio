import React from 'react'
import './style.css';
const Footer = () => {
  return (
    <footer>
    <p>Developed By: Anmol Singh</p>
    <div className="follow">
        <h4>Follow Me On </h4>
        <a href="https://www.linkedin.com/in/anmol-singh-6749a6196/" target="_blank">
        <i className="fa fa-linkedin"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100006778037936" target="_blank">
        <i className="fa fa-facebook"></i></a>
  <a href="https://www.instagram.com/anmol_2733/?hl=en" target="_blank">      <i className="fa fa-instagram"></i></a>
    <a href="https://twitter.com/AnmolSi88253362" target="_blank">    <i className="fa fa-twitter"></i></a>

    </div>
  </footer>
  )
}

export default Footer;