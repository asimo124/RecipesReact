import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import RecipeList from './components/recipelist';
import RecipeDetails from './components/recipedetails';

class App extends Component {

	constructor() {
		super();
		this.state = {
			didLoad: false,
			current_recipe: {},
			recipes:  [],
		}
	};

	componentDidMount() {

		fetch('http://alexhawley.info/api/recipe_react/get_recipes.php')
			.then(response => response.json())
			.then(responseData => {
				this.setState({
					didLoad: true,
					recipes: responseData.data,
					current_recipe: responseData.data[0]
				});
			})
	};

	handleClickRecipeLink = (id) => {

		let cur_recipes = this.state.recipes.filter(function(item){
			return item.id == id;
		});

		if (cur_recipes.length > 0) {
			this.setState({
				current_recipe: cur_recipes[0]
			});
		}
	};

	render() {
		return (this.state.didLoad)
		? <div className="container">
				<Grid>
					<h1>Alex's Recipes</h1>
					<Row >
						<RecipeList
							key="recipe_list"
							recipes={this.state.recipes}
							clickRecipe={this.handleClickRecipeLink}/>
						<RecipeDetails
							key="recipe_details"
							recipe={this.state.current_recipe}
							/>
					</Row>
				</Grid>
			</div>
		: '';

	}
}

export default App;
