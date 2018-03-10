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
	Button,
	List,
	ListItem,
	Left,
	Right,
	Switch,
	Icon
} from 'native-base';

export default class CreateMentee2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
			bio: ''
		};
		this.id = this.props.navigation.state.params.id;
	}

	updateMentee() {
		const { navigate } = this.props.navigation;
		fetch(`http://localhost:3000/api/mentees/${this.id}`, {
			method: 'put',
			body: JSON.stringify({
				location: this.state.location,
				bio: this.state.bio
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then(res => {
				console.log(res);
			})
			.then(() => navigate('CreateMentee3', { id: this.id }))
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Content>
				<Form>
					<Item floatingLabel>
						<Label>City</Label>
						<Input
							ref={el => {
								this.location = el;
							}}
							onChangeText={location => {
								this.setState({ location });
								console.log(this.state.location);
							}}
							value={this.state.location}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Bio</Label>
						<Input
							ref={el => {
								this.bio = el;
							}}
							onChangeText={bio => {
								this.setState({ bio });
								console.log(this.state.bio);
							}}
							value={this.state.bio}
						/>
					</Item>
				</Form>
				<Button
					block
					info
					padding
					style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					onPress={() => this.updateMentee()}
				>
					<Text>Next</Text>
				</Button>
			</Content>
		);
	}
}
