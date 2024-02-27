import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {userId: '', pin: '', error: false, errorMsg: ''}

  submitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {user_id: userId, pin}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const jwtToken = data.jwt_token
      console.log(jwtToken)
      Cookies.set('jwtToken', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({error: true, errorMsg: response.error_msg})
    }
  }

  userIdChange = event => {
    this.setState({userId: event.target.value})
  }

  pinChange = event => {
    this.setState({pin: event.target.value})
  }

  render() {
    const {userId, pin, error, errorMsg} = this.state
    return (
      <div className="loginMainContainer">
        <div className="loginInsideContainer">
          <div className="imgContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="loginImg"
            />
          </div>
          <form className="formElement" onSubmit={this.submitForm}>
            <h1 className="loginHeading">Welcome Back!</h1>
            <label className="label" htmlFor="label1">
              User ID
            </label>
            <input
              type="text"
              id="label1"
              className="input"
              onChange={this.userIdChange}
              placeholder="Enter User ID"
            />
            <label className="label" htmlFor="label2">
              PIN
            </label>
            <input
              type="password"
              id="label2"
              className="input"
              onChange={this.pinChange}
              placeholder="Enter PIN"
            />
            <button type="submit" className="loginButton">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default Login
