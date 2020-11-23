import React, { Component } from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent'
import MerchContainer from './Components/MerchContainer'
import NavBar from './Components/NavComponent'
import Merch from './Components/Merch'
import UserLogin from './Components/UserLogin'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      loggedInUsername: ''
    }
  }


register = async (registerInfo) => {

  const url = 'http://localhost:8000/user/new'

  try {
      console.log(registerInfo)
      const registerResponse = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(registerInfo),
          headers: {
            'Content-Type': 'application/json'
          }
    })
    console.log("registerResponse", registerResponse);
    const registerJson = await registerResponse.json()
    console.log("registerJson", registerJson);

     if(registerResponse.status === 201) {
       this.setState({
         loggedIn: true,
         loggedInUsername: registerJson.data.username
       })
     }
  } catch(err) {
    console.error("Error trying to register with API")
    console.error(err)
  }
}

login = async (loginInfo) => {
  const url = 'http://localhost:8000/login/'

  try {
    const loginResponse = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(loginInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log("loginResponse", loginResponse);
    const loginJson = await loginResponse.json()
    console.log("loginJson", loginJson);

    if(loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUsername: loginJson.data.username
        })
      }
  } catch(error) {
    console.error("Error trying to log in")
    console.error(error)
  }
}

logout = async () => {
  try {
    const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout"

    const logoutResponse = await fetch(url, {
      credentials: 'include'
    })
    console.log("logoutResponse", logoutResponse);
    const logoutJson = await logoutResponse.json()
    console.log("logoutJson", logoutJson);

    if(logoutResponse.status === 200) {
      this.setState({
        loggedIn: false,
        loggedInUsername: ''
      })

    }

  } catch(error) {
    console.error("Error logging out")
    console.error(error)
  }
}

  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <React.Fragment>
            <NavBar email={this.state.loggedInUserEmail} logout={this.logout} />
            <HomeComponent />
            <MerchContainer />
          </React.Fragment>
          :
          <UserLogin
            login={this.login}
            register={this.register}
          />
        }
      </div>
    );
  }
}
