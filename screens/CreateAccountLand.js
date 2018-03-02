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
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Content>
				<Card>
					<CardItem>
						<Body>
							<Text>Please specify if you are a Mentor or Mentee.</Text>
						</Body>
					</CardItem>
				</Card>
				<PickerCustom />
				<Form>
					<Item stackedLabel>
						<Label>Email</Label>
						<Input keyboardType="email-address" />
					</Item>
					<Item stackedLabel last>
						<Label>Password</Label>
						<Input secureTextEntry />
					</Item>
				</Form>

				<Button
					block
					info
					padding
					style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					onPress={() => navigate('CreateMentor1', { name: 'Mentor' })}
				>
					<Text>Submit</Text>
				</Button>
			</Content>
		);
	}
}
