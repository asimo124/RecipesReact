import { Component, PropTypes } from 'react';
import React from 'react';

export default class IngredientListItem extends Component {
	render() {
		return <li>{this.props.get_ingredient.ingredient}</li>
	}
}