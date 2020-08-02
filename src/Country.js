import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Country extends Component {
	render() {
		return (
			<div className='country'>
				<h3>{this.props.country.name}</h3>
				<Link to={'/country/' + this.props.country.name}>
					<img alt='country-pic' src={this.props.country.flag} />
				</Link>
			</div>
		);
	}
}

export default Country;
