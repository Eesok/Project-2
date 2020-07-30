import React, { Component } from 'react';
import Country from './Country';
import { Link } from 'react-router-dom';

class CountryList extends Component {
	render() {
		const renderCountry = this.props.countryData.map((country) => {
			return <Country key={country.alpha3Code} country={country} />;
		});
		return <div className='country-list'>{renderCountry}</div>;
	}
}

export default CountryList;
