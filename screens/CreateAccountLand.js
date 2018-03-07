import React, { Component } from 'react';
import { View } from 'react-native';
import {
	Container,
	Content,
	Form,
	Input,
	Label,
	CardItem,
	Card,
	Text,
	Item,
	Body,
	Button
} from 'native-base';
import PickerCustom from '../src/components/PickerCustom';

export default class CreateAccountLand extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { profile: [] };
	// }

	// async componentDidMount() {
	// 	let profile = await this.fetchProfile();

	// 	this.setState({ profile });
	// }

	// async fetchProfile() {
	// 	try {
	// 		let result = await fetch({
	// 			url: 'https://qlsgrnwsbs.localtunnel.me/api/'
	// 		});
	// 		let profile = await result.json();
	// 		return profile;
	// 	} catch (e) {
	// 		console.log(e);
	// 		return;
	// 	}
	// }
	navigate1() {
		this.props.navigation.navigate('CreateMentee', { name: 'Mentee' });
	}
	navigate2() {
		this.props.navigation.navigate('CreateMentor1', { name: 'Mentor' });
	}

	render() {
		return (
			<Content>
				<Card>
					<CardItem>
						<Body>
							<Text>Please specify if you are a Mentor or Mentee.</Text>
						</Body>
					</CardItem>
				</Card>
				<PickerCustom
					Picker2={() => {
						this.navigate1();
					}}
					Picker1={() => {
						this.navigate2();
					}}
				/>
			</Content>
		);
	}
}
