import React, { Component } from "react";
import { connect } from "react-redux";
import GalleryPic from "./GalleryPic";

class PhotoGallery extends Component {
	componentDidMount() {
		this.props.dispatch({type: "GET_GALLERY"});
	}

	render() {
		return (
			<table>
				<tbody>
					{this.props.reduxState.galleryReducer.map((smiles, i) => {
						return (<GalleryPic key={i} smiles={smiles} />);
					})}
				</tbody>
			</table>
		);
	}
}

const mapReduxStateToProps = (reduxState) => ({
	reduxState,
});

export default connect(mapReduxStateToProps)(PhotoGallery);
