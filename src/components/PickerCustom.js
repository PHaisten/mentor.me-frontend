import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Text,
	Right,
	Body,
	Left,
	Picker,
	Form,
	Item as FormItem
} from 'native-base';
const Item = Picker.Item;
export default class PickerCustom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected2: 'placeholder'
		};
	}
	onValueChange2(value: string) {
		this.setState({
			selected2: value
		});
	}
	render() {
		return (
			<Picker
				mode="dropdown"
				placeholder="Select One"
				style={{ alignSelf: 'center' }}
				selectedValue={this.state.selected2}
				onValueChange={this.onValueChange2.bind(this)}
			>
				<Item label="Mentee" value="key0" />
				<Item label="Mentor" value="key1" />
			</Picker>
		);
	}
}
