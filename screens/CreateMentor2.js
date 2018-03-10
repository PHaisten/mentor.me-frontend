import React, { Component } from 'react';
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

export default class CreateMentor1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			qualifications: '',
			hourlyrate: '',
			location: '',
			bio: ''
		};
		this.id = this.props.navigation.state.params.id;
	}
	updateMentor() {
		const { navigate } = this.props.navigation;
		fetch(`http://localhost:3000/api/mentors/${this.id}`, {
			method: 'put',
			body: JSON.stringify({
				qualifications: this.state.qualifications,
				hourlyrate: this.state.hourlyrate,
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
			.then(() => navigate('CreateMentor3', { id: this.id }))
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<Content>
				<Form>
					<Item floatingLabel>
						<Label>Hourly Rate</Label>
						<Input
							ref={el => {
								this.hourlyrate = el;
							}}
							onChangeText={hourlyrate => {
								this.setState({ hourlyrate });
								console.log(this.state.hourlyrate);
							}}
							value={this.state.hourlyrate}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Qualifications</Label>
						<Input
							ref={el => {
								this.qualifications = el;
							}}
							onChangeText={qualifications => {
								this.setState({ qualifications });
								console.log(this.state.qualifications);
							}}
							value={this.state.qualifications}
						/>
					</Item>
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
					onPress={() => this.updateMentor()}
				>
					<Text>Next</Text>
				</Button>
			</Content>
		);
	}
}
