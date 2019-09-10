import React, { Component, Fragment } from "react";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import { Grid, Col, Row, Button } from 'react-bootstrap';

const RightDrawer = ({ children, onClose }) =>{
	return (
		<div className="right-drawer-container">
			<div className="right-drawer-inner">
				<button onClick={onClose}>close</button>
				{children}
			</div>
		</div>
	)
}

class DocumentInfoDrawer extends Component{
	state = {
		documentName: ""
	};		

	constructor(props){
		super(props);

		this.onClose = this.onClose.bind(this);
	}

  componentDidMount() {
    const url = new URL(window.location.href);
		const documentName = url.pathname.substring(url.pathname.lastIndexOf('/')+1);
		console.log(documentName);

		this.setState({
			documentName
		})
	}	
	
	onClose(){
		const { history } = this.props;
		history.push("/drawers");
	}

  buildDrawerComponent() {
		switch (this.state.documentName){
			case "html":
				return (
					<Fragment>
						<h1>HTML</h1>
					</Fragment>
				);
			case "css":
				return (
					<Fragment>
						<h1>CSS</h1>
					</Fragment>
				);
			case "js": 
				return (
					<Fragment>
						<h1>JS</h1>
					</Fragment>
				);
		}
  }
  render() {
    return (
			<RightDrawer onClose={this.onClose}>
				{this.buildDrawerComponent()}
			</RightDrawer>
		);
  }
}

export class DrawerView extends Component{
  render(){
    return(
			<div>
				<Switch>
					<Route
						path={`/drawers/html`}
						component={DocumentInfoDrawer}
					/>
					<Route
						path={`/drawers/css`}
						component={DocumentInfoDrawer}
					/>
					<Route
						path={`/drawers/js`}
						component={DocumentInfoDrawer}
					/>
				</Switch>
				<div className="flex-container">
					<Link to="/drawers/html">HTML</Link>
					<Link to="/drawers/css">CSS</Link>
					<Link to="/drawers/js">JS</Link>
				</div>					
			</div>
    )
  }
}