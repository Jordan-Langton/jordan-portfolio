import React from 'react';
import '../CSS/Register.css';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      Name: '',
      Email: '',
      Password: '',
    }
  }

  onNameChange = (event) => {
    this.setState({Name: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({Email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({Password: event.target.value});
  }

  onSubmitRegister = () => {
    if (this.props.user !== true) {
      fetch('http://localhost:5000/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.state.Name,
          email: this.state.Email,
          password: this.state.Password
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data === 'success') {
            console.log('user registered');
            this.props.onRouteChange('home');
          }else if (data === 'failed') {
            console.log('failed to register user');
            this.setState({error: true});
          }
        })
    }else {
      console.log("User logged in already");
    }
  }

  render(){
    if (this.state.error === true) {
      return (
        <div className="Register">
          <div className="form">
            <h1>Register</h1>
            <label>Username</label>
            <input onChange={this.onNameChange} type="text" name="username"/>

            <label>Email</label>
            <input onChange={this.onEmailChange} type="email" name="email"/>

            <label>Password</label>
            <input onChange={this.onPasswordChange} type="password" name="password"/>

            <div className="error">
              <div className="text">A user with that name/email already exists</div>
            </div>
            <div className="buttons">
              <div className="btn">
                <button onClick={this.onSubmitRegister}>Register</button>
              </div>
              <div className="btn">
                <button onClick={() => this.props.onRouteChange('signin')}>Have Acount</button>
              </div>
            </div>

          </div>
        </div>
      );
    }else {
      return (
        <div className="Register">
          <div className="form">
            <h1>Register</h1>
            <label>Username</label>
            <input onChange={this.onNameChange} type="text" name="username"/>

            <label>Email</label>
            <input onChange={this.onEmailChange} type="email" name="email"/>

            <label>Password</label>
            <input onChange={this.onPasswordChange} type="password" name="password"/>

            <div className="buttons">
              <div className="btn">
                <button onClick={this.onSubmitRegister}>Register</button>
              </div>
              <div className="btn">
                <button onClick={() => this.props.onRouteChange('signin')}>Have Acount</button>
              </div>
            </div>

          </div>
        </div>
      );
    }
  }
}

export default Register;
