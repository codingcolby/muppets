import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import PhotoGallery from "../Pages/PhotoGallery";

class App extends Component {
	// Renders the entire app on the DOM
	render() {
		return (
			<div className="App">
				<Router>
					<header className="App-header">
						<h2>Wakah, Wakah - Say Cheese!</h2>
					</header>
					<Route path="/" component={PhotoGallery} />
				</Router>
			</div>
		);
	}
}

export default App;
