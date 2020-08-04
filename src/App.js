import './App.css';
import CountryList from './CountryList';
import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Axios from 'axios';
import CountryImages from './CountryImages';
import Search from './Search';
import About from './About';


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
				<p className='title' >The Nation Cave</p>
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
						path='/about/:country'
						exact
						render={(routerProps) => {
							return (
								<About
									match={routerProps.match}
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
