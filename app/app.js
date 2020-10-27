import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './home'
import WorkoutsPage from './workouts'
import { HOME, WORKOUTS } from './routes'
import './index.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route strict path={`${HOME}/`}>
          <HomePage />
        </Route>
        <Route strict path={`${WORKOUTS}/`}>
          <WorkoutsPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
