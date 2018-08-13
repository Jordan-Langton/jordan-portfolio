import React from 'react';
import '../CSS/Splash.css';

const Splash = ({ classToggle, onRouteChange }) => {
  return (
    <div className="Splash section">
      <div className="info">
        <h1>JORDAN LANGTON</h1>
        <p>
          Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live
        </p>
        <div className="buttons">
          <div className="btn">
            <button onClick={() => {classToggle('link3'); onRouteChange('about-me')}}>About Me</button>
          </div>
          <div className="btn">
            <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
          </div>
        </div>
      </div>
      <img className="layer2" src={require('../CSS/images/splash/two/layer-2.png')} alt="layer2"/>
      <img className="layer3" src={require('../CSS/images/splash/two/layer3.png')} alt="layer3"/>
    </div>
  );
}

export default Splash;
