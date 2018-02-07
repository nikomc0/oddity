import React, {Component} from 'react';
import logo from './../assets/oddity_full_logo.png';
import { Banner, Row, Flex, Column, Box, Card, Heading, Subhead, Measure, Text } from 'rebass';

class Contact extends Component {
	render (){
		return (
			<section>
				<Row width={1} mx={1/2}>
					<Column pt={120}>
						<Heading children='Contact Us' f={[30, 40, 50]}></Heading>
					</Column>
				</Row>
					<Flex wrap mx={5}>
						<Box w={[1,1/2]} px={1} pt={3}>
							<Measure f={[5, 10, 15]}>
							Tired of staring at the blank page and blinking cursor? We've all
							been there, and we understand it can be overwhelming.
							Let's brainstorm about your vision, goals, and what we can do to 
							facilitate your oddity!
							</Measure>
						</Box>
						
						<Box w={[1,1/2]} px={1}>
							<Text f={[5, 10, 15]}>
							<h3>(650) 524-5197</h3>
							<h3>innovation@createoddity.com</h3>
							</Text>
						</Box>
					</Flex>
			</section>
		);
	}
}

export default Contact;