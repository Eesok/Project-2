import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav>
				<Link to='/'>Home</Link>
				<Link to={'/country/' + this.props.country}>Images</Link>
				<Link to={'/about/' + this.props.country}>About</Link>
			</nav>
		);
	}
}

export default Header;
