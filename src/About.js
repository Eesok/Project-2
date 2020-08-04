import React, { Component } from 'react';
import Header from './Header';

class About extends Component {
	render() {
		const countryInfo = this.props.countryData.find(
			(arr) => arr.name === this.props.match.params.country
		);
		const languages = countryInfo.languages.map((langs) => {
			return <li>{langs.name}</li>;
		});
		console.log(countryInfo.name);
		return (
			<div>
				<header>
					<Header country={this.props.match.params.country} />
				</header>
				<h2>{countryInfo.name}</h2>
				<div className='country-data'>
					<p>
						<span>Capital: </span> {countryInfo.capital}
					</p>
					<p>
						<span>Population: </span>
						{countryInfo.population}
					</p>
					<p>
						<span>Currency: </span> {countryInfo.currencies[0].name}
					</p>
					<p>
						<span>Languages: </span> {languages}
					</p>
					<p>
						<span>Region: </span> {countryInfo.subregion}
					</p>
					<p>
						<span>Native Name: </span> {countryInfo.nativeName}
					</p>
				</div>
				<p>
					<span>Flag: </span>{' '}
				</p>
				<img className='flag' alt='flag-pic' src={countryInfo.flag} />
			</div>
		);
	}
}

export default About;
