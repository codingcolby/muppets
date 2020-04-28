import React, { Component } from "react";

// DO NOT MODIFY THIS FILE FOR BASE MODE!

class GalleryPic extends Component {
	// Renders all the photos in the DB
	render() {
		const pictures = this.props.store.reduxState.imagefile
		return (
			<tr>
				<td>{this.props.smiles.imagefile}
				<img
            src={this.props.store.galleryReducer.imagefile}
            alt="some text goes here"
          />
				
				
				</td>
			</tr>
		);
	}
}

export default GalleryPic;
