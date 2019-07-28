import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import StaticRouterExample from './StaticRouterExample'
import DynamicRouteComp from './DynamicRoutingExample'
import NotFound from './NotFound'

class AppRoutingExample extends Component {
	render () {
		const loggedIn = true
		const supportsHistory = 'pushstate' in window.history

		// firefox works without => forceRefresh={!supportsHistory}

		return (
	    <div className='App' >
	        <nav className='navbar navbar-light bg-light'>
	          <a className='navbar-brand' href='/'>Navbar</a>
	        </nav>
	        <BrowserRouter forceRefresh={!supportsHistory}>
	          <Switch>
	            <Route exact path='/' component={StaticRouterExample} />
	            <Route exact path='/about' component={StaticRouterExample} />
	            <Route path='/posts/:slug' component={DynamicRouteComp} />
	            <Route component={NotFound} />

	            <Route exact path='/user' render={() => (
	              loggedIn === true ? (
	                <Redirect to='/posts/hello-there/' />
	              ) : (
	                <StaticRouterExample />
	              )
	            )} />

	          </Switch>
	        </BrowserRouter>
	      </div>
		)
	}
}

export default AppRoutingExample
