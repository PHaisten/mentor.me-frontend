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
	// navigate1() {
	// 	this.props.navigation.navigate('CreateMentee', { name: 'Mentee' });
	// }
	// navigate2() {
	// 	this.props.navigation.navigate('CreateMentor1', { name: 'Mentor' });
	// }

	render() {
		return (
			<Content style={{ marginTop: 30 }}>
				<Card>
					<CardItem>
						<Body>
							<Text>Please specify if you are a Mentor or Mentee.</Text>
						</Body>
					</CardItem>
				</Card>
				<PickerCustom
					Picker1={() => {
						this.props.screenProps.handleChoice('mentor');
					}}
					Picker2={() => {
						this.props.screenProps.handleChoice('mentee');
					}}
				/>
			</Content>
		);
	}
}
