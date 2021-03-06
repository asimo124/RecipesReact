import { Component, PropTypes } from 'react';
import React from 'react';
import RecipeStepItem from './recipe_step_item'

export default class RecipeSteps extends Component {
	render() {
		return <div className="recipe-steps-container">
			<h2 className="recipe-title">{this.props.recipe_name}</h2>
			<hr/>
			<ul className="recipe-steps-list">
				{this.props.use_steps.map( step =>
					<RecipeStepItem
						key={step.id}
						name={step.step}
						displayOrder={step.display_order}
					/>
				)}
			</ul>
			<div className="medlarge_clear" ></div>
			<img src={this.props.image_path} className="full-width-img" />
		</div>
	}
}