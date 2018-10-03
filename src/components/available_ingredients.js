import { Component, PropTypes } from 'react';
import React from 'react';
import AvailableIngredientListItem from './available_ingredient_list_item';

export default class AvailableIngredients extends Component {
	render() {
		return <div className="available-ingredients-container">
			<h5 className="small-box-title">In My Refrigerator</h5>
			<hr />
			<ul className="available-ingredients-list">
				{this.props.use_available_ingredients.map( ingredient =>
					<AvailableIngredientListItem
						key={ingredient.id}
						name={ingredient.ingredient} />
				)}
			</ul>
		</div>
	}
}