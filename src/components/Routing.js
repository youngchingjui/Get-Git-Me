import React from 'react'
import { Switch, Route } from 'react-router-dom'
import useSubdomain from '../hooks/useSubdomain'
import Auth from '../pages/Auth/Auth'
import Callback from '../pages/Auth/Callback'
import Dashboard from '../pages/Dashboard'

const Routing = () => {
  const { subdomain } = useSubdomain()
  return (
    <Switch>
      {subdomain === 'dashboard' && (
        <Route exact path="/">
          <Dashboard />
        </Route>
      )}
      {subdomain === 'auth' && (
        <>
          <Route exact path="/callback">
            <Callback />
          </Route>
          <Route exact path="/">
            <Auth />
          </Route>
        </>
      )}
    </Switch>
  )
}

export default Routing
