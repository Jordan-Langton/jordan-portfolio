import React from 'react';
import '../CSS/Skills.css';

const Skills = ({ onRouteChange, classToggle }) => {
  return (
    <div className="Skills">
        <div className="heading">
          <h3><b>Languages I Know</b></h3>
        </div>
      <div className="languages">
        <div className="item">
          <div className="type">
            <img src={require('../CSS/images/Icons-php.png')} alt="icon" />
            <div className="content">
              <div className="text">
                PHP is a general-purpose scripting language that is especially suited to server-side web development, in which case PHP generally runs on a web server.
              </div>
              <div className="btn">
                <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="type">
            <img src={require('../CSS/images/Icons-js.png')} alt="icon" />
            <div className="content">
              <div className="text">
                Used in Web pages, JavaScript is a "client-side" programming language. This means JavaScript scripts are read, interpreted and executed in the client.
              </div>
              <div className="btn">
                <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="type">
            <img src={require('../CSS/images/Icons-node.png')} alt="icon" />
            <div className="content">
              <div className="text">
                Node.js is a platform built on Chromes JavaScript runtime for easily building fast and scalable network applications.
              </div>
              <div className="btn">
                <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="type">
            <img src={require('../CSS/images/Icons-frameworks.png')} alt="icon" />
            <div className="content">
              <div className="text">
                I have learnt React JS & Vue JS, which are JavaScript libraries that help us build fast and reliable 1 page websites with many benifits.
              </div>
              <div className="btn">
                <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="type">
            <img src={require('../CSS/images/Icons-html.png')} alt="icon" />
            <div className="content">
              <div className="text">
                Short for HyperText Markup Language, the authoring language used to create documents on the World Wide Web.
              </div>
              <div className="btn">
                <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="type">
            <img src={require('../CSS/images/Icons-css.png')} alt="icon" />
            <div className="content">
              <div className="text">
                CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
              </div>
              <div className="btn">
                <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="type">
            <img src={require('../CSS/images/Icons-photo.png')} alt="icon" />
            <div className="content">
              <div className="text">
                An editing software developed and manufactured by Adobe Systems Inc. Photoshop is considered one of the leadering softwares.
              </div>
              <div className="btn">
                <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="type">
            <img src={require('../CSS/images/Icons-git.png')} alt="icon" />
            <div className="content">
              <div className="text">
                GitHub is a website where you can upload a copy of your Git repository. It is a Git repository hosting service, which offers all of the distributed revision control.
              </div>
              <div className="btn">
                <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="type">
            <img src={require('../CSS/images/Icons-sql.png')} alt="icon" />
            <div className="content">
              <div className="text">
                SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system
              </div>
              <div className="btn">
                <button onClick={() => {classToggle('link2'); onRouteChange('my-work')}}>My Work</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
