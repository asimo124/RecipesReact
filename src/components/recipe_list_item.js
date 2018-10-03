import { Component, PropTypes } from 'react';
import React from "react";

export default class RecipeListItem extends Component {

	clickRecipeLink = (id) => {
		let id2 = id.replace("recipe", "");
		this.props.doClickRecipe(id2)
	}

	render() {
		return <li><a onClick={ () => this.clickRecipeLink(this.props.id)}>{this.props.name}</a></li>
	}
}