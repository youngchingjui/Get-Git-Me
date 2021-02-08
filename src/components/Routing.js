import React from 'react'
import { Switch, Route } from 'react-router-dom'
import useSubdomain from '../hooks/useSubdomain'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'
import Timeline from '../pages/Timeline'
import Playground from '../pages/Playground'

const Routing = () => {
  const { subdomain } = useSubdomain()
  return (
    <Switch>
      {subdomain === 'dashboard' && (
        <>
          <Route exact path="/playground">
            <Playground />
          </Route>
          <Route exact path="/timeline">
            <Timeline />
          </Route>
          <Route exact path="/">
            <Dashboard />
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
