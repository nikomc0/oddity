import React, {Component} from 'react';
import logo from './../assets/oddity_full_logo.png';
import { Banner, Row, Flex, Column, Box, Card, Heading, Subhead, Measure, Text } from 'rebass';

class Contact extends Component {
	render (){
		return (
					<Flex wrap>
						<Box w={1/2}>
							<Text>
							Tired of staring at the blank page and blinking cursor? We've all
							been there, and we understand it can be overwhelming.
							Let's brainstorm about your vision, goals, and what we can do to 
							facilitate your oddity!
							</Text>
						</Box>
						
						<Box w={1/2}>
							<Text>
							<h3>(650) 524-5197</h3>
							<h3>innovation@createoddity.com</h3>
							</Text>
						</Box>
					</Flex>
		);
	}
}

export default Contact;