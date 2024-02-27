import {Switch, Route} from 'react-router-dom'

import './App.css'

import Login from './components/loginPage'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default App
