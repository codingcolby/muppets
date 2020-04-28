import React, { Component } from "react";

// DO NOT MODIFY THIS FILE FOR BASE MODE!

class GalleryPic extends Component {
	// Renders all the photos in the DB
	render() {
		return (
			<tr>
				<td>{this.props.smiles.imagefile}</td>
			</tr>
		);
	}
}

export default GalleryPic;
