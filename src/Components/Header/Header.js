import React from 'react';
import Nav from '../Nav';

const Header = ({ onRouteChange, isSignedIn, toggle, loggout, classToggle }) => {
  return (
    <div className="Header">
      <Nav classToggle={classToggle} loggout={loggout} toggle={toggle} isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
    </div>
  );
}

export default Header;
