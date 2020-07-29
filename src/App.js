import './App.css';
import Header from './Header';
import Country from './Country';
import CountryList from './CountryList';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import axios from 'axios';
import { createClient } from 'pexels';

const client = createClient(
	'563492ad6f917000010000010dfc1943a0ad41d0a6d1e95c490aed47'
);

// All requests made with the client will be authenticated

const url = 'https://api.pexels.com/v1';
// const key = '563492ad6f917000010000010dfc1943a0ad41d0a6d1e95c490aed47';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		axios(url, {
			header: {
				Authorization: `Basic ${client}`,
			},
		})
			.then((response) => {
        console.log(response);
      })
			.catch(console.error);
	}
	render() {
		return <div></div>;
	}
}

export default App;
