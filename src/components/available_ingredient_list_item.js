import { Component, PropTypes } from 'react';
import React from 'react';

export default class AvailableIngredientListItem extends Component {
	render() {
		return <li>{this.props.name}</li>
	}
}