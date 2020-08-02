import React, { Component } from 'react';
import Country from './Country';

class CountryList extends Component {
	render() {
		console.log(this.props.searchValue);
		const renderCountry = this.props.countryData
			.filter(
				(country) =>
					this.props.searchValue == '' ||
					country.name
						.toLowerCase()
						.includes(this.props.searchValue.toLowerCase())
			)
			.map((country) => <Country key={country.alpha3Code} country={country} />);
		return <div className='country-list'>{renderCountry}</div>;
	}
}

export default CountryList;
