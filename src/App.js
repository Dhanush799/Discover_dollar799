import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/products" component={Products} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
