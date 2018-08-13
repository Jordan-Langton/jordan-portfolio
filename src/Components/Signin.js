import React from 'react';
import '../CSS/Signin.css';

class Signin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      Email: '',
      Password: '',
    }
  }

  onEmailChange = (event) => {
    // console.log(this.state.Email);
    this.setState({Email: event.target.value});
  }

  onPasswordChange = (event) => {
    // console.log(this.state.Password);
    this.setState({Password: event.target.value});
  }

  onSubmitSignIn = () => {
    if (this.props.user !== true) {
      fetch('http://localhost:5000/signin', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.Email,
          password: this.state.Password
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.length >= 1) {
            console.log('logged user in');
            this.setState({error: false});
            this.props.onRouteChange('home');
          }else {
            this.setState({error: true});
            console.log('User entered does not exist or the cridentials are wrong');
          }
        })
    }else {
      console.log("User logged in already");
    }
  }

  render(){
    const { onRouteChange } = this.props;
    if (this.state.error === true) {
      return (
        <div className="Signin">
          <div className="form">
            <h1>Sign In</h1>
            <label>Email</label>
            <input onChange={this.onEmailChange} type="email" name="email"/>

            <label>Password</label>
            <input onChange={this.onPasswordChange} type="password" name="password"/>

            <div className="error">
              <div className="text">User entered does not exist or the cridentials are wrong</div>
            </div>
            <div className="buttons">
              <div className="btn">
                <button onClick={this.onSubmitSignIn}>Sign In</button>
              </div>

              <div className="btn">
                <button onClick={() => onRouteChange('register')}>Register</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Signin">
          <div className="form">
            <h1>Sign In</h1>
            <label>Email</label>
            <input onChange={this.onEmailChange} type="email" name="email"/>

            <label>Password</label>
            <input onChange={this.onPasswordChange} type="password" name="password"/>

            <div className="buttons">

              <div className="btn">
                <button onClick={this.onSubmitSignIn}>Sign In</button>
              </div>

              <div className="btn">
                <button onClick={() => onRouteChange('register')}>Register</button>
              </div>

            </div>

          </div>
        </div>
      );
    }
  }
}

export default Signin;
