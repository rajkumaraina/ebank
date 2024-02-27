import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Home extends Component {
  logoutButton = () => {
    const {history} = this.props
    history.replace('/ebank/login')
    Cookies.remove('jwt_token')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <div className="homeContainer">
        <nav className="homeNavbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <button type="button" onClick={this.logoutButton} className="button">
            Logout
          </button>
        </nav>
        <div className="insideContainer">
          <h1 className="homeHeading">Your Flexibility, Our Excellence</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
            className="card"
          />
        </div>
      </div>
    )
  }
}
export default Home
