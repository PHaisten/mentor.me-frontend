import React, { Component } from 'react';
import { View } from 'react-native';
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
export default class HomeScreen extends Component {
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
				<View style={{ padding: 10 }}>
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
				</View>
			</Drawer>
		);
	}
}
