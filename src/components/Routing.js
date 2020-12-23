import React from 'react'
import { Switch, Route } from 'react-router-dom'
import useSubdomain from '../hooks/useSubdomain'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'
import Playground from '../pages/Playground'

const Routing = () => {
  const { subdomain } = useSubdomain()
  return (
    <Switch>
      {subdomain === 'dashboard' && (
        <>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/playground">
            <Playground />
          </Route>
        </>
      )}
      {subdomain === 'auth' && (
        <Route exact path="/">
          <Auth />
        </Route>
      )}
    </Switch>
  )
}

export default Routing
