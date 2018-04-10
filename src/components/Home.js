import React, {Component} from 'react';
import logo from './../assets/oddity_full_logo.png';

class Home extends Component {

	render (){
		return (
			<section className="container-fluid">
				<div>
					<img src={logo} style={{ width: 400 }} alt="Oddity logo"></img>
				</div>
				<div className="row mission">
					<div className="col"><h1>CREATE</h1></div>
					<div className="col"><h1>CAPTIVATE</h1></div>
					<div className="col"><h1>INSPIRE</h1></div>
				</div>
			</section>
		);
	}
}

export default Home;
