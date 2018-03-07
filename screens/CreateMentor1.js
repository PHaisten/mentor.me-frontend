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
	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			password: ''
		};
	}

	createMentor() {
		fetch('http://localhost:3000/api/mentors/create', {
			method: 'post',
			body: JSON.stringify({
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				email: this.state.email,
				password: this.state.password
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then(res => {
				console.log(res);
			})
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
						<Label>First Name</Label>
						<Input
							ref={el => {
								this.firstname = el;
							}}
							onChangeText={firstname => {
								this.setState({ firstname });
								console.log(this.state.firstname);
							}}
							value={this.state.firstname}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Last Name</Label>
						<Input
							ref={el => {
								this.lastname = el;
							}}
							onChangeText={lastname => {
								this.setState({ lastname });
								console.log(this.state.lastname);
							}}
							value={this.state.lastname}
						/>
					</Item>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input
							ref={el => {
								this.email = el;
							}}
							keyboardType="email-address"
							onChangeText={email => {
								this.setState({ email });
								console.log(this.state.email);
							}}
							value={this.state.email}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Password</Label>
						<Input
							secureTextEntry
							ref={el => {
								this.password = el;
							}}
							secureTextEntry
							onChangeText={password => {
								this.setState({ password });
								console.log(this.state.password);
							}}
							value={this.state.password}
						/>
					</Item>
				</Form>
				<Button
					block
					info
					padding
					style={{ width: 250, alignSelf: 'center', marginTop: 10 }}
					onPress={() => this.createMentor()}
				>
					<Text>Next</Text>
				</Button>
			</Content>
		);
	}
}
