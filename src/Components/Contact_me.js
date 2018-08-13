import React from 'react';
import '../CSS/Contact_me.css';

class Contact_me extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      Name: '',
      Email: '',
      userEnquiry: '',
    }
  }

  onNameChange = (event) => {
    // console.log(this.state.Name);
    this.setState({Name: event.target.value});
  }

  onEmailChange = (event) => {
    // console.log(this.state.Email);
    this.setState({Email: event.target.value});
  }

  onEnquiryChange = (event) => {
    // console.log(this.state.userEnquiry);
    this.setState({userEnquiry: event.target.value});
  }

  onSubmitSend = () => {
    if (this.props.user !== true) {
      fetch('http://localhost:5000/send', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: this.state.Name,
          email: this.state.Email,
          userEnquiry: this.state.userEnquiry,
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data === 'success') {
          this.setState({error: false});
          console.log('Email sent');
        }else {
          this.setState({error: true});
          console.log('Failed to send Email');
        }
      })
    }else {
      console.log("User logged in already");
    }
  }

  render(){
    const { user } = this.props;
    console.log(user.name);
    if (this.state.error !== true) {
      return (
        <div className="Contact_me">
          <div className="contact_form">
            <h3>Contact Me</h3>
            <p>Send me an email with your enquiries!</p>
            <div className="form">
              <input onChange={this.onNameChange} type="text" placeholder="Name"/>
              <input onChange={this.onEmailChange} type="email" placeholder="Email"/>
              <textarea onChange={this.onEnquiryChange} rows="5" placeholder="Enquiries"></textarea>
              <div className="buttons">
                <div className="btn">
                  <button onClick={this.onSubmitSend}>Send Email</button>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_info">
            <h3>Contact Info</h3>
            <div className="info">
              <div className="contact"><i className="fas fa-mobile"></i> 067 001 4872</div>
              <div className="contact"><i className="fas fa-phone-square"></i> 031 762 1258</div>
              <div className="contact"><i className="fas fa-envelope"></i> jglangton4@gmail.com</div>
              <div className="contact"><i className="fas fa-address-card"></i> 39 mpushini Avenue</div>
            </div>
            <h4>Follow Me</h4>
            <div className="follow">
              <div className="icon">
                <a href="https://www.facebook.com/jordan.langton.562" target="_blank" rel="noopener noreferrer">
                  <img src={require('../CSS/images/icons/facebook.png')} alt=""/>
                </a>
              </div>
              <div className="icon">
                <a href="https://www.instagram.com/__jordan.langton__/" target="_blank" rel="noopener noreferrer">
                  <img src={require('../CSS/images/icons/instagram.png')} alt=""/>
                </a>
              </div>
              <div className="icon">
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                  <img src={require('../CSS/images/icons/linked-in.png')} alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }else {
      return (
        <div className="Contact_me">
          <div className="contact_form">
            <h3>Contact Me</h3>
            <p>Send me an email with your enquiries!</p>
            <div className="form">
              <input onChange={this.onNameChange} type="text" placeholder="Name"/>
              <input onChange={this.onEmailChange} type="email" placeholder="Email"/>
              <textarea onChange={this.onEnquiryChange} rows="5" placeholder="Enquiries"></textarea>
              <div className="error">
                <div className="text">The email was unable to send</div>
              </div>
              <div className="buttons">
                <div className="btn">
                  <button onClick={this.onSubmitSend}>Send Email</button>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_info">
            <h3>Contact Info</h3>
            <div className="info">
              <div className="contact"><i className="fas fa-mobile"></i> 067 001 4872</div>
              <div className="contact"><i className="fas fa-phone-square"></i> 031 762 1258</div>
              <div className="contact"><i className="fas fa-envelope"></i> jglangton4@gmail.com</div>
              <div className="contact"><i className="fas fa-address-card"></i> 39 mpushini Avenue</div>
            </div>
            <h4>Follow Me</h4>
            <div className="follow">
              <div className="icon">
                <a href="https://www.facebook.com/jordan.langton.562" target="_blank" rel="noopener noreferrer">
                  <img src={require('../CSS/images/icons/facebook.png')} alt=""/>
                </a>
              </div>
              <div className="icon">
                <a href="https://www.instagram.com/__jordan.langton__/" target="_blank" rel="noopener noreferrer">
                  <img src={require('../CSS/images/icons/instagram.png')} alt=""/>
                </a>
              </div>
              <div className="icon">
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                  <img src={require('../CSS/images/icons/linked-in.png')} alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }
}

export default Contact_me;
