import React from 'react';
import '../CSS/About.css';

const About = ({ onRouteChange, classToggle }) => {
  return (
    <div className="About section">
      <div className="about-me">
        <h2>About Me</h2>
        <div className="text">
          I am a junior front and backend developer, aspiring to become a full stack develper. I really enjoy what I do am always willing to learn more!
        </div>
        <div className="btn">
          <button onClick={() => {classToggle('link3'); onRouteChange('about-me')}}>About Me</button>
        </div>
      </div>

      <div className="icon">
        <img src={require('../CSS/images/Icons-jordan2.png')} alt="test"/>
      </div>

      <div className="about-me">
        <h2>Contact Me</h2>
        <div className="text">
          Want to contact me? You can contact me by cell or you can email me. See my Contact Me page for more details about how to get hold of me
        </div>
        <div className="btn">
          <button onClick={() => {classToggle('link4'); onRouteChange('contact-me')}}>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default About;
