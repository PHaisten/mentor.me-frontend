import React, { Component } from 'react';
import { View } from 'react-native';
import {
	Header,
	Content,
	Form,
	Item,
	Input,
	Label,
	Card,
	CardItem,
	Title,
	Body,
	Text,
	Button,
	InputGroup,
	Icon
} from 'native-base';

export default class ContactMentor extends Component {
	render() {
		return (
			<Content
				style={{
					backgroundColor: '#F0F8FF'
				}}
			>
				<Header
					style={{
						backgroundColor: '#1E90FF',
						padding: 10
					}}
				>
					<Title>Mentor.Me</Title>
				</Header>
				<Card>
					<CardItem
						style={{
							backgroundColor: '#F0F8FF'
						}}
					>
						<Body>
							<Text>
								Have a question or comment? Please email us, and we will get
								back to you as soon as possible!
							</Text>
						</Body>
					</CardItem>
				</Card>
				<Form>
					<Header
						style={{
							backgroundColor: '#1E90FF',
							padding: 10
						}}
					>
						<Title>Contact Us</Title>
					</Header>
					<Item fixedLabel>
						<Label>Comments or Concerns</Label>
						<InputGroup borderType="rounded">
							<Icon name="ios-mail" />
							<Input placeholder="Type your text here" />
						</InputGroup>
					</Item>
					<Button
						block
						info
						padding
						style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
						// onPress={() => navigate('Submit', { name: 'Mentor' })}
					>
						<Text>Submit</Text>
					</Button>
				</Form>
			</Content>
		);
	}
}
