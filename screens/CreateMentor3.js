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
						<Label>Sunday</Label>
						<Input />
					</Item>
					<Item floatingLabel>
						<Label>Monday</Label>
						<Input />
					</Item>
					<Item floatingLabel last>
						<Label>Tuesday</Label>
						<Input />
					</Item>
					<Item floatingLabel last>
						<Label>Wednesday</Label>
						<Input />
					</Item>
					<Item floatingLabel last>
						<Label>Thursday</Label>
						<Input />
					</Item>
					<Item floatingLabel last>
						<Label>Friday</Label>
						<Input />
					</Item>
					<Item floatingLabel last>
						<Label>Saturday</Label>
						<Input />
					</Item>
				</Form>
				<Button
					block
					info
					padding
					style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					onPress={() => navigate('CreateMentor4', { name: 'Mentor' })}
				>
					<Text>Next</Text>
				</Button>
			</Content>
		);
	}
}
