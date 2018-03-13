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

export default class MentorbySkill extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mentors: []
		};
	}

	async componentDidMount() {
		let mentors = await this.fetchMentorBySkill();

		this.setState({ mentors });
	}

	async fetchMentorBySkill(id) {
		try {
			let result = await fetch({
				url: `http://localhost:3000/api/topics/mentors/${this.props.topic.id}`
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
		return <Text>Hai Bud</Text>;
	}
}
