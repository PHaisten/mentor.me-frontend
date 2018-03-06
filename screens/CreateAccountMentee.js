import React from 'react';
import { View } from 'react-native';
import {
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

export default class CreateAccountMentee extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Content>
				<Form>
					<Item floatingLabel>
						<Label>First Name</Label>
						<Input />
					</Item>
					<Item floatingLabel>
						<Label>Last Name</Label>
						<Input />
					</Item>
					<Item floatingLabel last>
						<Label>Username</Label>
						<Input />
					</Item>
				</Form>
				<Button
					block
					info
					padding
					onPress={() => navigate('CreateMentee2', { name: 'Mentee' })}
				>
					<Text>Next</Text>
				</Button>
			</Content>
		);
	}
}
