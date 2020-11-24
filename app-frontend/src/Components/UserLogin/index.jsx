import React, { Component } from 'react'



export default class LoginRegisterForm extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      action: 'Login'
    }
  }

switchForm = () => {
  if(this.state.action === "Login") {
    this.setState({ action: "Register" })
  } else {
    this.setState({ action: "Login" })
  }
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = (event) => {
   event.preventDefault()
   console.log()
   console.log(`You are trying to ${this.state.action.toLowerCase()} with the following credentials`)
   console.log(this.state);
   if(this.state.action === "Register") {
      this.props.register(this.state)
    } else {
      this.props.login(this.state)
    }
 }




render() {
    return (
      <div>
        <h2>{this.state.action} here</h2>
        <form onSubmit={this.handleSubmit}>

        <label>Username:</label>
          <input
            type="username"
            name="username"
            placeholder="Enter a Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="Submit">
            { this.state.action === "Login" ? "Log in" : "Sign up"}
          </button>
        </form>
        {
          this.state.action === "Login"
          ?
          <p>
            Need an account? Sign up <button className="fake-link" onClick={this.switchForm}>here</button>
          </p>
          :
          <p>
            Already have an account? Log in <button className="fake-link" onClick={this.switchForm}>here</button>
          </p>

        }
      </div>
    )
  }
}
