import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class CountryImages extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photoSearch: null,
			displayIndex: 0,
		};
	}
	componentDidMount() {
		const name = this.props.match.params.country;
		console.log(name);

		const key = '17685242-f265de5e7dde5a4462ae00735';
		Axios(`https://pixabay.com/api/?key=${key}&q=${name}&per_page=200`)
			.then((json) => {
				this.setState({
					photoSearch: json.data.hits,
				});
				console.log(json.data.hits);
			})
			.catch(console.error);
	}

	render() {
		return (
			<div className='country-images'>
				<div className='country-image'>
					{this.state.photoSearch && (
						<img
							alt='country pic'
							src={
								this.state.photoSearch[this.state.displayIndex].largeImageURL
							}
						/>
					)}
				</div>
				<div className='pixabay-logo'>
					<a href='https://pixabay.com/' target='_blank' >
						    
						<img
							src='https://pixabay.com/static/img/public/medium_rectangle_a.png'
							alt='Pixabay'
						/>
					</a>
				</div>
				<footer>
					<button
						onClick={() => {
							if (this.state.displayIndex > 0) {
								this.setState({
									displayIndex: (this.state.displayIndex -= 1),
								});
							} else {
								this.setState({
									displayIndex: this.state.photoSearch.length - 1,
								});
							}
						}}>
						Previous
					</button>
					<button
						onClick={() => {
							if (this.state.displayIndex < this.state.photoSearch.length - 1) {
								this.setState({
									displayIndex: (this.state.displayIndex += 1),
								});
							} else {
								this.setState({
									displayIndex: 0,
								});
							}
						}}>
						Next
					</button>
				</footer>
			</div>
		);
	}
}

export default CountryImages;
