import React, { Component } from 'react';
import { Rating } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import { View } from 'react-native';
import {
	Header,
	Content,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Title,
	Right
} from 'native-base';

export default class MentorProfile extends Component {
	constructor(props) {
		super(props);

		this.mentor = this.props.navigation.state.params.mentor;
	}
	ratingCompleted(rating) {
		console.log('Rating is: ' + rating);
	}

	render() {
		return (
			<Content
				style={{
					backgroundColor: '#fff'
				}}
			>
				<Header
					style={{
						backgroundColor: '#fff'
					}}
				>
					<Title style={{ marginTop: 20 }}>
						{this.mentor.firstname}'s Profile
					</Title>
				</Header>
				<Card>
					<CardItem>
						<Left>
							<Body>
								<Text note>Name:</Text>
								<Text style={{ paddingVertical: 3 }}>
									{this.mentor.firstname} {this.mentor.lastname}
								</Text>
								<Text note>Qualifications:</Text>
								<Text style={{ paddingVertical: 3 }}>
									{this.mentor.qualifications}
								</Text>
								<Text note>About Me:</Text>
								<Text style={{ paddingVertical: 3 }}>{this.mentor.bio}</Text>
							</Body>
						</Left>
						<Right>
							<Body>
								<Rating
									type="star"
									ratingCount={5}
									imageSize={30}
									showRating
									onFinishRating={this.ratingCompleted}
									style={{ paddingVertical: 15 }}
								/>
								<Text note>Hourly Rate:</Text>
								<Text>${this.mentor.hourlyrate} /Hour</Text>
							</Body>
						</Right>
					</CardItem>
				</Card>
				<Button iconLeft>
					<Icon name="ios-mail-outline" />
					<Text>Contact</Text>
				</Button>
			</Content>
		);
	}
}
