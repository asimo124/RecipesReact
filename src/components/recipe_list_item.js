import { Component, PropTypes } from 'react';
import React from "react";

export default class RecipeListItem extends Component {
	render() {
		return <li><a href="#">{this.props.name}</a></li>
	}
}