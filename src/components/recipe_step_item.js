import { Component, PropTypes } from 'react';
import React from 'react';

export default class RecipeStepItem extends Component {
	render() {
		return <li><strong>Step {this.props.get_step.display_order}:</strong> {this.props.get_step.step}</li>
	}
}