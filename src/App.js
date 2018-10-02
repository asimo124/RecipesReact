import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Grid>
					<h1>Alex's Recipes</h1>
					<Row >
						<div className="recipe-list-container" xs={12} md={4}>
							<ul className="recipe-list">
								<li><a href="#">Chicken Noodle Soup</a></li>
								<li><a href="#">Beef Fajitas</a></li>
								<li><a href="#">Chicken and Rice</a></li>
								<li><a href="#">Spaghetti Meatballs</a></li>
							</ul>
						</div>
						<div className="recipe-details-container" xs={12} md={8}>
							<Row >
								<Col xs={12} md={4} >
									<div className="ingredients-container">
										<h5>Ingredients</h5>
										<ul className="ingredients-list">
											<li>1 whole chicken</li>
											<li>2 cups chicken broth</li>
											<li>3 carrots, chopped</li>
											<li>2 sqaush, chopped</li>
										</ul>
									</div>
									<div className="available-ingredients-container">
										<h5>In My Refrigerator</h5>
										<ul className="available-ingredients-list">
											<li>1 whole chicken</li>
											<li>2 cups chicken broth</li>
											<li>3 carrots, chopped</li>
											<li>2 sqaush, chopped</li>
										</ul>
									</div>
								</Col>
								<Col xs={12} md={8}>
									<div className="recipe-steps-container">
										<h2 className="recipe-title">Chicken Noodle Soop</h2>
										<hr/>
										<ul className="recipe-steps-list">
											<li><strong>Step 1:</strong> Boil the chicken</li>
											<li><strong>Step 2:</strong> De-bone the chicken</li>
											<li><strong>Step 3:</strong> Place chicken, broth, and vegetables in large boiling pot</li>
										</ul>
									</div>
								</Col>
							</Row>
						</div>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default App;
