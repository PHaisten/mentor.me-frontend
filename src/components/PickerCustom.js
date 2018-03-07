import React, { Component } from 'react';
import { View } from 'react-native';
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
import CreateAccountMentee from '../../screens/CreateAccountMentee';
import CreateMentor1 from '../../screens/CreateMentor1';
const Item = Picker.Item;
export default class PickerCustom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected1: false,
			selected2: false
		};
	}
	// onValueChange2(value: string) {
	// 	this.setState({
	// 		selected2: value
	// 	});
	// }
	render() {
		return (
			<View>
				{/* <Picker
					mode="dropdown"
					placeholder="Select One"
					style={{ alignSelf: 'center' }}
					selectedValue={this.state.selected2}
					onValueChange={this.onValueChange2.bind(this)}
				>
					<Item label="Mentee" value="key0" />
					<Item label="Mentor" value="key1" />
				</Picker> */}
				<Button
					primary
					block
					info
					padding
					style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					onPress={this.props.Picker1}
				>
					<Text style={{ color: 'white', fontSize: 18 }}>Mentor</Text>
				</Button>
				<Button
					primary
					block
					info
					padding
					style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					onPress={this.props.Picker2}
				>
					<Text style={{ color: 'white', fontSize: 18 }}>Mentee</Text>
				</Button>
			</View>
		);
	}
}
