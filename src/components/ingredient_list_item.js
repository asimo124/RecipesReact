import { Component, PropTypes } from 'react';
import React from 'react';

export default class IngredientListItem extends Component {
	render() {
		return <li >{this.props.quantity} {this.props.unit_of_measure} {this.props.name}</li>
	}
}