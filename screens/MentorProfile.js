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
	ratingCompleted(rating) {
		console.log('Rating is: ' + rating);
	}

	render() {
		return (
			<Content
				style={{
					backgroundColor: '#FFFFF0'
				}}
			>
				<Header
					style={{
						backgroundColor: '#FFFFF0'
					}}
				>
					<Title>Example Profile of a Mentor</Title>
				</Header>
				<Card>
					<CardItem>
						<Left>
							<Body>
								<Text note>Name:</Text>
								<Text style={{ paddingVertical: 3 }}>John Durkee</Text>
								<Text note>Education:</Text>
								<Text style={{ paddingVertical: 3 }}>Covalence Bootcamp</Text>
								<Text style={{ paddingVertical: 3 }}>Graduated March 2018</Text>
								<Text note>About Me:</Text>
								<Text style={{ paddingVertical: 3 }}>
									Blah Blah Blah Im so interesting
								</Text>
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
								<Text>$45 an Hour</Text>
							</Body>
						</Right>
					</CardItem>
				</Card>
			</Content>
		);
	}
}
