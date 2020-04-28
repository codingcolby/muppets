import React, { Component } from "react";
import { connect } from "react-redux";
import gallery from "../../index";

const mapStateToProps = (reduxState) => ({
	reduxState,
});

class List extends Component {
	componentDidMount() {
		this.props.dispatch({
			type: "SHOWME_GALLERY",
		});
	}

	render() {
		const smiles = this.props.reduxState.gallery.map((item, index) => (
			<div key={index}>
				<gallery item={item} />
			</div>
		));
		return (
			<div>
				<h3>Great Memories</h3>
				<pre>{gallery}</pre>
			</div>
		);
	}
}

export default connect(mapStateToProps)(List);
