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

export default class CreateMentor1 extends React.Component {
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
					style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					onPress={() => navigate('CreateMentor2', { name: 'Mentor' })}
				>
					<Text>Next</Text>
				</Button>
			</Content>
		);
	}
}
