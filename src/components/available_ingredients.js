import { Component, PropTypes } from 'react';
import React from 'react';

export default class AvailableIngredients extends Component {
	render() {
		return <div className="available-ingredients-container">
			<h5 className="small-box-title">In My Refrigerator</h5>
			<hr />
			<ul className="available-ingredients-list">
				<li>1 whole chicken</li>
				<li>2 cups chicken broth</li>
				<li>3 carrots, chopped</li>
				<li>2 sqaush, chopped</li>
			</ul>
		</div>
	}
}