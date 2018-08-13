import React from 'react';
import '../CSS/Php.css';

const Php = ({ classToggle, onRouteChange }) => {
  return (
    <div className="Php section">
      <div className="image"><img id="phpImage" src={require('../CSS/images/php.png')} alt=""/></div>
      <div className="info">
        <h2><b>Backend</b> what do you choose!</h2>
        <div className="text">
          When building a backend for your website you can choose from many options!
        </div>
        <div className="btn">
          <button onClick={() => {classToggle('link3'); onRouteChange('about-me')}}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Php;
