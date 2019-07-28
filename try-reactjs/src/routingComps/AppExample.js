import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import StaticRouterExample from './StaticRouterExample'

class AppRoutingExample extends Component {
	render () {
		const loggedIn = true
		const supportsHistor = 'pushstate' in window.history

		return (
	    <div className='App' >
	        <nav className='navbar navbar-light bg-light'>
	          <a className='navbar-brand' href='/'>Navbar</a>
	        </nav>
	        <BrowserRouter forceRefresh={!supportsHistory}>
	          <Switch>
	            <Route exact path='/' component={StaticRouteComp} />
	            <Route exact path='/about' component={StaticRouteComp} />
	            <Route path='/posts/:slug' component={DynamicRouteComp} />
	            <Route component={NotFound} />

	            <Route exact path='/user' render={() => (
	              loggedIn === true ? (
	                <Redirect to='/posts/hello-there/' />
	              ) : (
	                <StaticRouteComp />
	              )
	            )} />

	          </Switch>
	        </BrowserRouter>
	      </div>
		)
	}
}

export default AppRoutingExample
