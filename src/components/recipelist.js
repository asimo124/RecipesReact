import { Component, PropTypes } from 'react';
import React from "react";
import RecipeListItem from './recipe_list_item'

export default class RecipeList extends Component {

	render() {
		return <div className="recipe-list-container" >
				<ul className="recipe-list">
					{this.props.recipes.map( recipe =>
						<RecipeListItem
							name={recipe.recipe_name}
							id={recipe.id}
							key={recipe.id}
							doClickRecipe={this.props.clickRecipe}
							/>
					)}
				</ul>
			</div>
	}
}