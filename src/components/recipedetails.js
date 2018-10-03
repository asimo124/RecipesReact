import { Component, PropTypes } from 'react';
import {Col, Row} from "react-bootstrap";
import React from "react";
import Ingredients from './ingredients';
import AvailableIngredients from './available_ingredients';
import RecipeSteps from './recipe_steps';

export default class RecipeDetails extends Component {
	render() {
		return <div className="recipe-details-container" >
			<Row >
				<Col xs={12} md={4} >
					<Ingredients
						key={3000}
						use_ingredients={this.props.recipe.ingredients}
						/>
					<AvailableIngredients
						key={8000}
						use_available_ingredients={this.props.recipe.available_ingredients}
						/>
				</Col>
				<Col xs={12} md={8}>
					<RecipeSteps
						key={4000}
						use_steps={this.props.recipe.steps}
						/>
				</Col>
			</Row>
		</div>
	}
}