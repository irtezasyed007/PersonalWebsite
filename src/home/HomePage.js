import React, { Component } from 'react';
import resume from './Syed_Irteza_Resume.pdf';
import './HomePage.css';

class HomePage extends Component {
	constructor(props){
		super(props);

		this.state = {};
	}
	render(){
		return (
			<a href={resume}>
				Click here to see my resume
			</a>
		)
	}
}

export default HomePage;
