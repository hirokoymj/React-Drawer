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

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/drawers" component={DrawerView} />
			</Switch>
		</div>
	</BrowserRouter>
);
export default AppRouter;

// <Router history={history}>
// <div>
// 	<Header />
// 	<Switch>
// 		<Route path="/" component={HomePage} exact={true} />
// 		<Route path="/drawers" component={DrawerView} />
// 	</Switch>
// </div>
// </Router>




// <BrowserRouter>
// <div>
// 	<Header />
// 	<Switch>
// 		<Route path="/" component={ExpenseDashboardPage} exact={true} />
// 		<Route path="/create" component={AddExpensePage} />
// 		<Route path="/edit" component={EditExpensePage} />
// 		<Route path="/help" component={HelpPage} />
// 		<Route component={NotFoundPage} />
// 	</Switch>
// </div>
// </BrowserRouter>


