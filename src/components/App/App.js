import React, { Component } from "react";
import "./App.css";
import PhotoGallery from "../Pages/PhotoGallery";

class App extends Component {
	// Renders the entire app on the DOM
	render() {
		return (
			<div>
				<header>
					<h2>Our Cast of Characters</h2>
				</header>
				<PhotoGallery />
			</div>
		);
	}
}

export default App;
