import React, { Component } from 'react';
import { createClient } from 'pexels';

const client = createClient(
	'563492ad6f917000010000010dfc1943a0ad41d0a6d1e95c490aed47'
);

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
		client.photos.search({ query: name, per_page: 80 }).then((json) => {
			let image = json.photos;
			this.setState({ photoSearch: image });
			console.log(image);
		});
	}

	render() {
		return (
			<div className='country-images'>
				{this.state.photoSearch && (
					<img
						className='country-image'
						alt='country pic'
						src={this.state.photoSearch[this.state.displayIndex].src.landscape}
					/>
				)}
				<footer>
					<button
						onClick={() => {
							if (this.state.displayIndex < 0) {
								this.setState({
									displayIndex: this.state.photoSearch.length,
								});
							} else {
								this.setState({
									displayIndex: (this.state.displayIndex -= 1),
								});
							}
						}}>
						Previous Photo
					</button>
					<button
						onClick={() => {
							if (this.state.displayIndex < this.state.photoSearch.length) {
								this.setState({
									displayIndex: (this.state.displayIndex += 1),
								});
							} else {
								this.setState({
									displayIndex: 0,
								});
							}
						}}>
						Next Photo
					</button>
				</footer>
			</div>
		);
	}
}

export default CountryImages;
