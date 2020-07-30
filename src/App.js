import './App.css';
import Header from './Header';
// import Country from './Country';
import CountryList from './CountryList';
import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
// import { createClient } from 'pexels';
import Axios from 'axios';
import CountryImages from './CountryImages';

// const client = createClient(
// 	'563492ad6f917000010000010dfc1943a0ad41d0a6d1e95c490aed47'
// );

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photoSearch: [],
			countryData: [],
		};
	}

	componentDidMount() {
		Axios('https://restcountries.eu/rest/v2/all')
			.then((json) => {
				this.setState({
					countryData: json.data,
				});
				// console.log(json);
			})
			.catch(console.error);

		// client.photos
		// 	.search({ query: 'israel', per_page: 1, page: 5 })
		// 	.then((json) => {
		// 		this.setState({ photoSearch: json });
		// 	});
	}

	render() {
		console.log(this.state.countryData);
		return (
			<div className='App'>
				<header>
					<Header />
				</header>
				<main>
					<Route
						path='/'
						exact
						render={() => {
							return <CountryList countryData={this.state.countryData} />;
						}}
					/>
					<Route
						path='/country/:country'
						render={(routerProps) => {
							return (
								<CountryImages
									match={routerProps.match}
									photoSearch={this.state.photoSearch}
									countryData={this.state.countryData}
								/>
							);
						}}
					/>
					<Route
						path='*'
						render={() => {
							return <Redirect to='/' />;
						}}
					/>
				</main>
			</div>
		);
	}
}

export default App;
