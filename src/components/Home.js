import React, {Component} from 'react';
import logo from './../assets/oddity_full_logo.png';
import { Banner, Row, Column, Box, Card, Heading, Subhead } from 'rebass';

class Home extends Component {

	render (){
		return (
			<section>
				<Banner color='white' bg='white'>
					<img src={logo} style={{ width: 500 }}></img>
				</Banner>
			</section>
		);
	}
}

export default Home;