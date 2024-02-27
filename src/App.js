import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import Login from './components/loginPage'

import Home from './components/Home'

import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
