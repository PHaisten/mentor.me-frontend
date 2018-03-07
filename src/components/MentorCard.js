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

export default class MentorCard extends Component {
	render() {
		return (
			<Card key={this.props.mentor.userid}>
				<CardItem>
					<Left>
						<Body>
							<Text>
								{this.props.mentor.firstname} {this.props.mentor.lastname}
							</Text>
							<Text note>April 15, 2016</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem>
					<Body>
						<Text style={{ marginBottom: 10 }}>{this.props.mentor.bio}</Text>
						<Text style={{ marginBottom: 10 }}>
							{this.props.mentor.qualifications}
						</Text>
					</Body>
				</CardItem>
				<CardItem>
					<Left>
						<Button transparent textStyle={{ color: '#87838B' }}>
							<Icon name="logo-github" />
							<Text>1,926 stars</Text>
						</Button>
					</Left>
				</CardItem>
			</Card>
		);
	}
}
