import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import RecipeList from './components/recipelist';
import RecipeDetails from './components/recipedetails';

class App extends Component {

	state = {
			recipes: [
				{
					id: 1,
					name: "Chicken Noodle Soup"
				},
				{
					id: 2,
					name: "Beef Stroganoff"
				},
				{
					id: 3,
					name: "Spaghetti Meatballs"
				},
			]
	};

	render() {
		return (
			<div className="container">
				<Grid>
					<h1>Alex's Recipes</h1>
					<Row >
						<RecipeList
							recipes={this.state.recipes}
						/>
						<RecipeDetails />
					</Row>
				</Grid>
			</div>
		);
	}
}

export default App;
