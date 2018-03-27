import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, ScrollView, AsyncStorage, AlertIOS } from 'react-native';
import {
	Header,
	Content,
	Container,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Title,
	Right,
	Footer,
	Drawer,
	Form,
	Input,
	Item
} from 'native-base';
import SideBar from '../src/components/SideBar';
export default class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mentee: {
				bio: '',
				location: ''
			}
		};
	}
	async componentDidMount() {
		let mentee = await this.fetchMenteeProfile();
		this.setState(
			{ mentee: { bio: mentee.bio, location: mentee.location } },
			() => {
				console.log('the state is now', this.state.mentee);
			}
		);
	}
	updateMentee() {
		fetch(`http://localhost:3000/api/mentees/1811`, {
			method: 'PUT',
			body: JSON.stringify({
				location: this.state.mentee.location,
				bio: this.state.mentee.bio
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then(res => {
				console.log(res);
			})
			.catch(e => {
				return console.log(e);
			});
	}
	async fetchMenteeProfile() {
		try {
			let result = await fetch({
				url: `http://localhost:3000/api/mentees/2121`
			});
			let mentee = await result.json();
			return mentee[0];
			console.log(mentee[0]);
		} catch (e) {
			console.log(e);
			return;
		}
	}
	render() {
		return (
			<Container>
				<Header style={{ backgroundColor: '#03A6FF' }}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Right>
						<Body>
							<Title style={{ color: 'white' }}>Edit Profile</Title>
						</Body>
					</Right>
				</Header>

				<Content>
					<Form>
						<Item>
							<Input
								onChangeText={bio => {
									this.setState({
										mentee: { bio: bio, location: this.state.mentee.location }
									});
									console.log(this.state.mentee.bio);
								}}
								value={this.state.mentee.bio}
							/>
						</Item>
						<Item last>
							<Input
								onChangeText={value => {
									this.setState({
										mentee: { location: value, bio: this.state.mentee.bio }
									});
									console.log(this.state.mentee.location);
								}}
								value={this.state.mentee.location}
							/>
						</Item>
						<Button transparent onPress={() => this.updateMentee()}>
							<Text>Submit Changes</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
