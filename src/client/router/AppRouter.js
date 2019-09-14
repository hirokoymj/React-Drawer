import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import createHistory from 'history/createBrowserHistory';
import { HomePage } from '../components/Home';
import { DrawerView } from '../components/drawer/DrawerView';

// <BrowserRouter></BrowserRouter>

//export const history = createHistory();

const Footer = (props) =>{
	return (
		<div>
		this is footer
		</div>
	)
}

const NoMatch = () =>{
	return (
		<div>Page not found.</div>
	)
}

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/drawers" component={DrawerView} />
				<Route component={NoMatch}/>
			</Switch>
		</div>
	</BrowserRouter>
);
export default AppRouter;




