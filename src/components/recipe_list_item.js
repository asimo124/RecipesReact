import { Component, PropTypes } from 'react';
import React from "react";

export default class RecipeListItem extends Component {

	clickRecipeLink = (id) => {
		this.props.doClickRecipe(id)
	}

	render() {
		return <li><a href='# ' onClick={ () => this.clickRecipeLink(this.props.id)}>{this.props.name}</a></li>
	}
}