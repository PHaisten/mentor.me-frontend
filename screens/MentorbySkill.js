import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import {
	Container,
	Header,
	Title,
	Left,
	Icon,
	Right,
	Button,
	Body,
	Content,
	Text,
	Card,
	CardItem,
	Item,
	Input,
	Drawer,
	View
} from 'native-base';
import MentorCard from '../src/components/MentorCard';

export default class MentorbySkill extends Component {
	navigate(mentor) {
		this.props.navigation.navigate('Profile', { mentor });
	}
	constructor(props) {
		super(props);

		this.state = {
			mentors: []
		};
		this.topic = this.props.navigation.state.params.topic;
	}

	async componentDidMount() {
		let mentors = await this.fetchMentorBySkill();

		this.setState({ mentors });
	}

	async fetchMentorBySkill(id) {
		try {
			let result = await fetch({
				url: `http://localhost:3000/api/topics/mentors/${this.topic.id}`
			});
			let mentors = await result.json();
			console.log(mentors);
			return mentors;
		} catch (e) {
			console.log(e);
			return;
		}
	}
	render() {
		return (
			<Container>
				<Header style={{ height: 80 }}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Text
						style={{
							marginTop: 15,
							fontSize: 16,
							textAlign: 'center'
						}}
					>
						Mentors Who Know: {this.topic.name}
					</Text>
				</Header>
				<ScrollView>
					{this.state.mentors.map((mentor, index) => {
						return (
							<MentorCard
								Navigate={() => this.navigate(mentor)}
								key={index}
								mentor={mentor}
							/>
						);
					})}
				</ScrollView>
			</Container>
		);
	}
}
