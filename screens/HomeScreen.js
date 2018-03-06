import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {
	Header,
	Title,
	Drawer,
	Card,
	CardItem,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Content
} from 'native-base';
import SideBar from '../src/components/SideBar';
import MentorCard from '../src/components/MentorCard';
export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { mentors: [] };
	}

	async componentDidMount() {
		let mentors = await this.fetchProfiles();

		this.setState({ mentors });
	}

	async fetchProfiles() {
		try {
			let result = await fetch({
				url: 'http://localhost:3000/api/mentors'
			});
			let mentors = await result.json();
			return mentors;
		} catch (e) {
			console.log(e);
			return;
		}
	}

	render() {
		closeDrawer = () => {
			this.drawer._root.close();
		};
		openDrawer = () => {
			this.drawer._root.open();
		};
		return (
			<Drawer
				ref={ref => {
					this.drawer = ref;
				}}
				content={<SideBar />}
				onClose={() => closeDrawer()}
			>
				<Header style={{ backgroundColor: '#C0C0C0' }}>
					<Left>
						<Button
							transparent
							onPress={() => {
								openDrawer();
							}}
						>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title style={{ color: '#FFF' }}>Mentor.Me</Title>
					</Body>
				</Header>
				<ScrollView>
					{this.state.mentors.map(mentor => {
						return <MentorCard key={mentor.id} mentor={mentor} />;
					})}
				</ScrollView>
			</Drawer>
		);
	}
}
