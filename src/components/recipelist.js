import { Component, PropTypes } from 'react';
import React from "react";
import RecipeListItem from './recipe_list_item'

export default class RecipeList extends Component {

	render() {
		return <div className="recipe-list-container" >
			<ul className="recipe-list">
				{this.props.recipes.map( recipe =>
					<RecipeListItem name={recipe.name} key={recipe.id} />
				)}
			</ul>
		</div>
	}
}