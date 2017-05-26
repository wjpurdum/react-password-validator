import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super(props);
    this.state= {value: ''}
    this.validateInput = this.validateInput.bind(this);
    this.state = {
      password_error: false,
      email_error: false,
      email: "",
      password: "",
      password_confirm: "",
      errorEmailMessage: "",
      errorPasswordMessage: ""
    }
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  handlePasswordConfirm(e) {
    this.setState({
      password_confirm: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.validateInput()
  }

  validateInput(){
    var email = this.state.email
    if (email.includes("@")){
      this.setState({
        email_error: false
      })
    } else {
      this.setState({
        email_error: true,
        errorEmailMessage: "You must enter a valid email!"
      })
    }

    if (this.state.password === this.state.password_confirm) {
      console.log("passwords match!")
    } else {
      console.log("passwords incorrect")
      this.setState({
        password_error: true,
        errorPasswordMessage: "Please make sure your passwords match."
      })
    }

  }

  render() {
    return (
      <div className="form">
      <p className="error message">{this.state.errorEmailMessage}</p>
      <p className="error message">{this.state.errorPasswordMessage}</p>
        <h1>Sign Up</h1>
          <input onChange={(e) => this.handleEmail(e)}type="text" placeholder="email" />
          <input onChange={(e)=> this.handlePassword(e)}type="password" placeholder="password" />
          <input onChange={(e)=> this.handlePasswordConfirm(e)}type="password" placeholder="confirm password" />
          <input onClick={(e)=> this.handleSubmit(e)}type="submit" value="Submit" />
      </div>
    )
  }
}

export default Validator;
