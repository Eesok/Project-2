import React, { Component } from 'react';

class Search extends Component {
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			if (this.props.onChange) {
				this.props.onChange(this.state);
			}
		});
	};
	render() {
		return (
			<form>
				<label htmlFor='search'>Search: </label>
				<input
					id='search'
					type='text'
					onChange={this.handleChange}
					name='searchValue'
				/>
			</form>
		);
	}
}

export default Search;
