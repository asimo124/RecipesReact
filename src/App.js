import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import RecipeList from './components/recipelist';
import RecipeDetails from './components/recipedetails';

class App extends Component {

	state = {
		first_recipe_id: 1,
		recipes: [
			{
				"id": "1",
				"recipe_name": "Chicken Noodle Soup",
				"ingredients": [
					{
						"recipe_id": "1",
						"ingredient_id": "1",
						"quantity": "1",
						"unit_of_measure": "Whole",
						"ingredient": "Chicken"
					},
					{
						"recipe_id": "1",
						"ingredient_id": "2",
						"quantity": "2",
						"unit_of_measure": "cup(s)",
						"ingredient": "Chicken Broth"
					},
					{
						"recipe_id": "1",
						"ingredient_id": "3",
						"quantity": "2",
						"unit_of_measure": null,
						"ingredient": "Carrots"
					},
					{
						"recipe_id": "1",
						"ingredient_id": "4",
						"quantity": "2",
						"unit_of_measure": "piece(s) of",
						"ingredient": "Sqaush"
					}
				],
				"steps": [
					{
						"id": "1",
						"recipe_id": "1",
						"step": "Boil Chicken",
						"display_order": "1"
					},
					{
						"id": "2",
						"recipe_id": "1",
						"step": "De-bone Chicken",
						"display_order": "2"
					},
					{
						"id": "3",
						"recipe_id": "1",
						"step": "Add Broth and Vegetables and cook for 20 minutes",
						"display_order": "3"
					}
				],
				"available_ingredients": [
					{
						"recipe_id": "1",
						"ingredient_id": "2",
						"ingredient": "Chicken Broth"
					},
					{
						"recipe_id": "1",
						"ingredient_id": "3",
						"ingredient": "Carrots"
					}
				]
			},
			{
				"id": "3",
				"recipe_name": "Chili",
				"ingredients": [
					{
						"recipe_id": "3",
						"ingredient_id": "5",
						"quantity": "1",
						"unit_of_measure": "pound of",
						"ingredient": "Ground Beef"
					},
					{
						"recipe_id": "3",
						"ingredient_id": "8",
						"quantity": "1",
						"unit_of_measure": null,
						"ingredient": "Onions"
					},
					{
						"recipe_id": "3",
						"ingredient_id": "9",
						"quantity": "1",
						"unit_of_measure": "can of",
						"ingredient": "Pinto Beans"
					}
				],
				"steps": [
					{
						"id": "7",
						"recipe_id": "3",
						"step": "Brown Meat",
						"display_order": "1"
					},
					{
						"id": "8",
						"recipe_id": "3",
						"step": "Add tomato sauce, onions, and pinto beans",
						"display_order": "2"
					},
					{
						"id": "9",
						"recipe_id": "3",
						"step": "Cook for 20 minutes",
						"display_order": "3"
					}
				],
				"available_ingredients": [
					{
						"recipe_id": "3",
						"ingredient_id": "5",
						"ingredient": "Ground Beef"
					},
					{
						"recipe_id": "3",
						"ingredient_id": "8",
						"ingredient": "Onions"
					},
					{
						"recipe_id": "3",
						"ingredient_id": "9",
						"ingredient": "Pinto Beans"
					}
				]
			},
			{
				"id": "2",
				"recipe_name": "Spaghetti with Meatballs",
				"ingredients": [
					{
						"recipe_id": "2",
						"ingredient_id": "5",
						"quantity": "1",
						"unit_of_measure": "pound of",
						"ingredient": "Ground Beef"
					},
					{
						"recipe_id": "2",
						"ingredient_id": "6",
						"quantity": "1",
						"unit_of_measure": "bag of",
						"ingredient": "Spaghetti Pasta"
					},
					{
						"recipe_id": "2",
						"ingredient_id": "7",
						"quantity": "1",
						"unit_of_measure": "can of",
						"ingredient": "Tomato Sauce"
					}
				],
				"steps": [
					{
						"id": "4",
						"recipe_id": "2",
						"step": "Brown meat",
						"display_order": "1"
					},
					{
						"id": "5",
						"recipe_id": "2",
						"step": "Add tomato sauce and vegetables and cook for 20 minutes",
						"display_order": "2"
					},
					{
						"id": "6",
						"recipe_id": "2",
						"step": "Cook pasta, server spaghetti sauce over pasta",
						"display_order": "3"
					}
				],
				"available_ingredients": [
					{
						"recipe_id": "2",
						"ingredient_id": "5",
						"ingredient": "Ground Beef"
					},
					{
						"recipe_id": "2",
						"ingredient_id": "7",
						"ingredient": "Tomato Sauce"
					}
				]
			}
		]
	};

	render() {
		return (
			<div className="container">
				<Grid>
					<h1>Alex's Recipes</h1>
					<Row >
						<RecipeList recipes={this.state.recipes} />
						<RecipeDetails recipe={this.state.recipes[this.state.first_recipe_id]}  />
					</Row>
				</Grid>
			</div>
		);
	}
}

export default App;
