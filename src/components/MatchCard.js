import React, { Component } from 'react';
// import { Platform } from 'react-native';
import { View } from 'react-native';
import {
	Button,
	Icon,
	Text,
	Right,
	Body,
	Left,
	Card,
	CardItem
} from 'native-base';

// let arr = this.props.mentor.topics.toString().length;

export default class MatchCard extends Component {
	// async componentDidMount() {
	// 	let score = await this.getTopicsLength();
	// }

	// async getTopicsLength() {
	// 	try {
	// 		let results = await this.props.mentor.topics.toString().length;
	// 		return results;
	// 		console.log(results);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }

	render() {
		return (
			<Card key={this.props.mentor.userid}>
				<CardItem>
					<Left>
						<Body>
							<Text note>Name</Text>
							<Text>
								{this.props.mentor.firstname} {this.props.mentor.lastname}
							</Text>
						</Body>
					</Left>
					{/* <Right>
						<Text note>Match Score:</Text>
						<Text>{this.results}</Text>
					</Right> */}
				</CardItem>
				<CardItem>
					<Body>
						<Text note>Bio:</Text>
						<Text style={{ marginBottom: 10 }}>{this.props.mentor.bio}</Text>
						<Text note>Qualifications:</Text>
						<Text style={{ marginBottom: 10 }}>
							{this.props.mentor.qualifications}
						</Text>
					</Body>
				</CardItem>
				<CardItem>
					<Left>
						<Button
							transparent
							textStyle={{ color: '#87838B' }}
							onPress={this.props.Navigate}
						>
							<Icon name="ios-contact" />
							<Text>View Profile</Text>
						</Button>
					</Left>
					<Right>
						<Text note>Member Since:</Text>
						<Text>{this.props.mentor.memberSince}</Text>
					</Right>
				</CardItem>
			</Card>
		);
	}
}
