import React from 'react';
import '../CSS/Nav.css'

const Nav = ({ onRouteChange, isSignedIn, toggle, loggout, classToggle }) => {
    if (isSignedIn) {
      return (
      <div id="container">
        <div id="side-nav">
          <div className="logo">
            <div className="image">
              <img src={require('../CSS/images/logo.png')} alt="" />
            </div>
              <h1>Jordans Portfolio</h1>
              <div onClick={() => toggle()} className="icon"><i className="fas fa-times"></i></div>
          </div>
          <nav>
              <ul>
                  <li>
                      <a className="link" onClick={() => {toggle(); onRouteChange('home')}}><i className="fas fa-home"></i> Home</a>
                  </li>
                  <li>
                      <a className="link" onClick={() => {toggle(); onRouteChange('my-work');}}><i className="fas fa-project-diagram"></i> My Work</a>
                  </li>
                  <li>
                      <a className="link" onClick={() => {toggle(); onRouteChange('about-me');}}><i className="fas fa-user"></i> About Me</a>
                  </li>
                  <li>
                      <a className="link" onClick={() => {toggle(); onRouteChange('contact-me');}}><i className="fas fa-phone"></i> Contact Me</a>
                  </li>
                  <li>
                      <a className="link" onClick={() => {toggle(); onRouteChange('signin'); loggout();}}><i className="fas fa-sign-out-alt"></i> Logout</a>
                  </li>
              </ul>
          </nav>
        </div>
        <div id="menu-banner">
          <div className="logo">
            <div className="image">
              <img src={require('../CSS/images/logo.png')} alt="" />
            </div>
            <h1>Jordans Portfolio</h1>
          </div>
          <nav>
              <ul>
                  <li>
                      <a id="link1" className="active" onClick={() => {classToggle('link1'); onRouteChange('home');}}>Home</a>
                  </li>
                  <li>
                      <a id="link2" onClick={() => {classToggle('link2'); onRouteChange('my-work');}}>My Work</a>
                  </li>
                  <li>
                      <a id="link3" onClick={() => {classToggle('link3'); onRouteChange('about-me');}}>About Me</a>
                  </li>
                  <li>
                      <a id="link4" onClick={() => {classToggle('link4'); onRouteChange('contact-me');}}>Contact Me</a>
                  </li>
                  <li>
                      <a className="link" onClick={() => onRouteChange('signin')}>Logout</a>
                  </li>
                  <li>
                      <a id="burger-menu" onClick={() => toggle()}><i className="fas fa-bars"></i></a>
                  </li>
              </ul>
          </nav>
        </div>
      </div>
    );
    }else{
      return (
      <div id="container">
        <div id="side-nav">
          <div className="logo">
            <div className="image">
              <img src={require('../CSS/images/logo.png')} alt="" />
            </div>
            <h1>Jordans Portfolio</h1>
            <div onClick={() => toggle()} className="icon"><i className="fas fa-times"></i></div>
          </div>
          <nav>
              <ul>
                  <li>
                      <a className="link" onClick={() => {toggle(); onRouteChange('register');}}><i className="fas fa-user-plus"></i> Register</a>
                  </li>
              </ul>
          </nav>
        </div>
        <div id="menu-banner">
          <div className="logo">
            <div className="image">
              <img src={require('../CSS/images/logo.png')} alt="" />
            </div>
            <h1>Jordans Portfolio</h1>
          </div>
          <nav>
              <ul>
                  <li>
                      <a className="link" onClick={() => onRouteChange('register')}><i className="fas fa-user-plus"></i> Register</a>
                  </li>
                  <li>
                      <a id="burger-menu" onClick={() => toggle()}><i className="fas fa-bars"></i></a>
                  </li>
              </ul>
          </nav>
        </div>
      </div>
      );
    }
}

export default Nav;
