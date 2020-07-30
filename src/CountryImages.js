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
		client.photos.search({ query: name }).then((json) => {
			let image = json.photos;
			this.setState({ photoSearch: image });
			console.log(image);
		});
	}

	render() {
		return (
			<div>
				<button
					onClick={() => {
						this.setState({
							displayIndex: (this.state.displayIndex += 1),
						});
					}}>
					Next Photo
				</button>
				{this.state.photoSearch && (
					<img
						alt='country pic'
						src={this.state.photoSearch[this.state.displayIndex].src.medium}
					/>
				)}
			</div>
		);
	}
}

export default CountryImages;
