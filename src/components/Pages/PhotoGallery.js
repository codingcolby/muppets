import React, { Component } from "react";
import { connect } from "react-redux";
import GalleryPic from "./GalleryPic";

class PhotoGallery extends Component {
	componentDidMount() {
		const action = { type: "GET_GALLERY" };
		this.props.dispatch(action);
	}

	render() {
		return (
			<div>
				<h3>Great Memories</h3>
				<table>
					<tbody>
						{this.props.reduxState.galleryReducer.map((smiles, i) => {
							return <GalleryPic key={i} smiles={smiles} />;
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState,
});

export default connect(mapReduxStateToProps)(PhotoGallery);
