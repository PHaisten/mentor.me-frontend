import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
	Button,
	Icon,
	Text,
	Right,
	Body,
	Left,
	Card,
	CardItem
} from 'native-base';
const Item = Picker.Item;
export default class PickerCustom extends Component {
	render() {
		return (
			<Card style={{ flex: 0 }}>
				<CardItem>
					<Left>
						<Body>
							<Text>NativeBase</Text>
							<Text note>April 15, 2016</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem>
					<Body>
						<Text>This is some sample text!</Text>
					</Body>
				</CardItem>
				<CardItem>
					<Left>
						<Button transparent textStyle={{ color: '#87838B' }}>
							<Icon name="logo-github" />
							<Text>1,926 stars</Text>
						</Button>
					</Left>
				</CardItem>
			</Card>
		);
	}
}
