import { Component, PropTypes } from 'react';
import React from 'react';
import IngredientListItem from "./ingredient_list_item";

export default class Ingredients extends Component {
	render() {
		return <div className="ingredients-container">
			<h5 className="small-box-title">Ingredients</h5>
			<hr />
			<ul className="ingredients-list">
				{this.props.use_ingredients.map( ingredient =>
					<IngredientListItem
						key={ingredient.id}
						name={ingredient.ingredient}
						quantity={ingredient.quantity}
						unit_of_measure={ingredient.unit_of_measure}
						/>
				)}
			</ul>
		</div>
	}
}