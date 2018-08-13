import React from 'react';
import '../CSS/Javascript.css';

const Javascript = ({ onRouteChange, classToggle }) => {
  return (
    <div className="Javascript section">
      <div className="info">
        <h2>I LOVE to Code in <b>JavaScript!</b></h2>
        <div className="text">
          I really enjoy coding in JavaScript because it enables me to build beautiful and dynamic websites on the fly!
        </div>
        <div className="btn">
          <button onClick={() => {classToggle('link3'); onRouteChange('about-me')}}>Read more</button>
        </div>
      </div>
      <div className="image"><img id="jsImage" src={require('../CSS/images/javascript.png')} alt=""/></div>
    </div>
  );
}

export default Javascript;
