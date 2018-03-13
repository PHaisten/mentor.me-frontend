import React, { Component } from 'react';
import { Rating } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import { View, ScrollView, Linking } from 'react-native';
import {
	Header,
	Content,
	Container,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Title,
	Right,
	Footer
} from 'native-base';

export default class MentorProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			schedule: {}
		};

		this.mentor = this.props.navigation.state.params.mentor;
		console.log(this.mentor);
	}
	ratingCompleted(rating) {
		console.log('Rating is: ' + rating);
	}

	async componentDidMount() {
		let schedule = await this.fetchSchedule();

		this.setState({ schedule }, () => {
			console.log('the state is now', this.state.schedule);
		});
	}

	async fetchSchedule() {
		try {
			let result = await fetch({
				url: `http://localhost:3000/api/mentors/schedule/${this.mentor.id}`
			});
			let schedule = await result.json();
			return schedule[0];
			console.log(schedule[0]);
		} catch (e) {
			console.log(e);
			return;
		}
	}

	render() {
		return (
			<Container
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
				<Content>
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
										placeholderRating={5}
										ratingCount={5}
										intialRating={5}
										imageSize={30}
										showRating
										onFinishRating={this.ratingCompleted()}
										style={{ paddingVertical: 15 }}
									/>
									<Text note>Hourly Rate:</Text>
									<Text>${this.mentor.hourlyrate}/Hour</Text>
								</Body>
							</Right>
						</CardItem>
					</Card>
					<Card>
						<CardItem>
							<Left>
								<Body>
									<Text note>Schedule:</Text>
									<Text style={{ paddingVertical: 3 }}>
										{'\n'}
										Sunday: {this.state.schedule.sunday},
										{'\n'}
										{'\n'}
										Monday:{this.state.schedule.monday},
										{'\n'}
										{'\n'}
										Tuesday:{this.state.schedule.tuesday},
										{'\n'}
										{'\n'}
										Wednesday: {this.state.schedule.wednesday},
										{'\n'}
										{'\n'}
										Thursday: {this.state.schedule.thursday},
										{'\n'}
										{'\n'}
										Friday: {this.state.schedule.friday},
										{'\n'}
										{'\n'}
										Saturday: {this.state.schedule.saturday}
									</Text>
								</Body>
							</Left>
						</CardItem>
					</Card>
				</Content>
				<Footer>
					<Button info style={{ width: '35%', alignSelf: 'center' }}>
						<Icon name="ios-mail-outline" />
						<Text
							style={{ position: 'absolute', marginLeft: 35 }}
							onPress={() => Linking.openURL(`mailto:${this.mentor.contact}`)}
						>
							Contact
						</Text>
					</Button>
				</Footer>
			</Container>
		);
	}
}
