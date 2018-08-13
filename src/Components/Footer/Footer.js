import React from 'react';
import '../../CSS/Footer.css';

const Footer = ({ onRouteChange, classToggle }) => {
  return (
    <div className="Footer">
      <div className="nav">
        <nav>
            <ul>
                <li>
                    <a onClick={() => {classToggle('link1'); onRouteChange('home')}}><i className="fas fa-home"></i> Home</a>
                </li>
                <li>
                    <a onClick={() => {classToggle('link2'); onRouteChange('my-work')}}><i className="fas fa-project-diagram"></i> My Work</a>
                </li>
                <li>
                    <a onClick={() => {classToggle('link3'); onRouteChange('about-me')}}><i className="fas fa-address-card"></i> About Me</a>
                </li>
                <li>
                    <a onClick={() => {classToggle('link4'); onRouteChange('contact-me')}}><i className="fas fa-phone"></i> Contact Me</a>
                </li>
                <li>
                    <a onClick={() => onRouteChange('signin')}><i className="fas fa-sign-out-alt"></i> Logout</a>
                </li>
            </ul>
        </nav>
        <div className="text">Designed & Developed by <b>Jordan Langton</b> &copy; 01/05/2018</div>
      </div>

      <div className="footer-content">
        <h3>Jordan Langton</h3>
      </div>
    </div>
  );
}

export default Footer;
