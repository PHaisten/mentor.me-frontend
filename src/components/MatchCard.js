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

export default class MatchCard extends Component {
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
					<Right>
						<Text note>Match Score:</Text>
						<Text>{this.props.mentor.topics}</Text>
					</Right>
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
