import React, { Component } from 'react';
import Header from '../Components/Header/Header.js';
import Body from '../Components/Body/Body.js';
import Footer from '../Components/Footer/Footer.js';
import Signin from '../Components/Signin.js';
import Register from '../Components/Register.js';
import Aboutme from '../Components/About_me.js';
import Contactme from '../Components/Contact_me.js';
import Mywork from '../Components/My_work.js';
import '../CSS/App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      isSignedIn: false,
      route: 'signin',
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        signedup:''
      }
    }
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState({isSignedIn: false});
    }else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
    window.scrollTo(0, 0);
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        signedup:''
      }
    })
    console.log(this.state.user);
  }

  toggle = () => {
    let sideNav = document.getElementById('side-nav');
    return sideNav.classList.toggle("toggled");
  }

  classToggle = (tab) => {
    let link1 = document.getElementById('link1');
    let link2 = document.getElementById('link2');
    let link3 = document.getElementById('link3');
    let link4 = document.getElementById('link4');

    let element = document.getElementById(tab);
    switch (tab) {
      case tab = 'link1':
        // remove previous classes
        link2.classList.remove("active");
        link3.classList.remove("active");
        link4.classList.remove("active");
        // add new class
        element.classList.toggle("active");
        break;
      case tab = 'link2':
        // remove previous classes
        link1.classList.remove("active");
        link3.classList.remove("active");
        link4.classList.remove("active");
        // add new class
        element.classList.toggle("active");
        break;
      case tab = 'link3':
        // remove previous classes
        link1.classList.remove("active");
        link2.classList.remove("active");
        link4.classList.remove("active");
        // add new class
        element.classList.toggle("active");
        break;
      case tab = 'link4':
        // remove previous classes
        link1.classList.remove("active");
        link2.classList.remove("active");
        link3.classList.remove("active");
        // add new class
        element.classList.toggle("active");
        break;
      default:

    }
  }

  loggout = () => {
    this.setState({
      loggedOut: true,
      user: {
        id: '',
        name: '',
        email: '',
        password: '',
        signedup:''
      }
    })
    console.log('Logged Out');
  }

  btnClick = (btn) => {
    console.log("clicked");

    let element = document.getElementById(btn);

    switch (btn) {
      case btn = 'button1':
        // add new class
        element.classList.toggle("show");
        break;
      case btn = 'button2':
        // add new class
        element.classList.toggle("show");
        break;
      case btn = 'button3':
        // add new class
        element.classList.toggle("show");
        break;
      case btn = 'button4':
        // add new class
        element.classList.toggle("show");
        break;
      default:
    }
  }

  render() {
    const {isSignedIn, route, user} = this.state;

    switch (route) {
      case 'home':
        return (
          <div className="App">
            <Header classToggle={this.classToggle} loggout={this.loggout} toggle={this.toggle} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
              <Body classToggle={this.classToggle} onRouteChange={this.onRouteChange}/>
              <Footer classToggle={this.classToggle} onRouteChange={this.onRouteChange}/>
          </div>
        )
      case 'signin':
        return (
          <div className="App">
            <Header classToggle={this.classToggle} toggle={this.toggle} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            <Signin setHeaders={this.setHeaders} user={user} loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          </div>
        )
      case 'register':
        return (
          <div className="App">
            <Header classToggle={this.classToggle} toggle={this.toggle} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          </div>
        )
      case 'about-me':
        return (
          <div className="App">
            <Header classToggle={this.classToggle} toggle={this.toggle} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            <Aboutme/>
          </div>
        )
      case 'contact-me':
        return (
          <div className="App">
            <Header classToggle={this.classToggle} toggle={this.toggle} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            <Contactme user={user}/>
          </div>
        )
      case 'my-work':
        return (
          <div className="App">
            <Header classToggle={this.classToggle} toggle={this.toggle} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            <Mywork btnClick={this.btnClick}/>
          </div>
        )
      default:
        return (
          <div className="App">
            <Header classToggle={this.classToggle} toggle={this.toggle} isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          </div>
        )
    }
  }
}

export default App;
