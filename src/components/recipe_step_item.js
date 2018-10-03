import { Component, PropTypes } from 'react';
import React from 'react';

export default class RecipeStepItem extends Component {
	render() {
		return <li><strong>Step {this.props.displayOrder}:</strong> {this.props.name}</li>
	}
}