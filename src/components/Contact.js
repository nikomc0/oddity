import React, {Component} from 'react';
import logo from './../assets/oddity_full_logo.png';

class Contact extends Component {
	render (){
		return (
					<section className="container-fluid">
						<div id="contact" className="row">
							<div className="col">
								<h1>What We Do.</h1>
								<p>
								Tired of staring at the blank page and blinking cursor? We've all
								been there, and we understand it can be overwhelming.
								Let's brainstorm about your vision, goals, and what we can do to 
								facilitate your oddity!
								</p>
							</div>
							
							<div className="col">
								<h1>Let's Talk</h1>
								<p>
									<h3>(650) 524-5197</h3>
									<h3>innovation@createoddity.com</h3>
								</p>
							</div>
						</div>
					</section>
		);
	}
}

export default Contact;
