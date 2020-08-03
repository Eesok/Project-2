import './App.css';
// import Country from './Country';
import CountryList from './CountryList';
import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
// import { createClient } from 'pexels';
import Axios from 'axios';
import CountryImages from './CountryImages';
import Search from './Search';

// const client = createClient(
// 	'563492ad6f917000010000010dfc1943a0ad41d0a6d1e95c490aed47'
// );

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photoSearch: [],
			countryData: [],
			searchValue: '',
		};
	}

	eventHandler = (data) => {
		this.setState({ searchValue: data.searchValue });
	};
	componentDidMount() {
		Axios('https://restcountries.eu/rest/v2/all')
			.then((json) => {
				this.setState({
					countryData: json.data,
				});
				console.log(json);
			})
			.catch(console.error);
	}

	render() {
		console.log(this.state.countryData);
		return (
			<div className='App'>
				
				<main>
					<Route
						path='/'
						exact
						render={() => {
							return (
								<div>
									<Search onChange={this.eventHandler} />
									<CountryList
										searchValue={this.state.searchValue}
										countryData={this.state.countryData}
									/>
								</div>
							);
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
