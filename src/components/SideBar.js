import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

export default class SideBar extends Component {
	render() {
		return (
			<ScrollView
				style={{
					backgroundColor: '#03A6FF',
					paddingTop: 30,
					paddingLeft: 15
				}}
			>
				<Text
					style={{
						fontSize: 20,
						marginBottom: 10
					}}
					onPress={this.props.Navigate1}
				>
					Home
				</Text>
				<Text
					style={{
						fontSize: 20,
						marginBottom: 10
					}}
					onPress={this.props.Navigate2}
				>
					Search Subjects
				</Text>
				<Text
					style={{
						fontSize: 20,
						marginBottom: 10
					}}
					onPress={this.props.Navigate3}
				>
					View Mentor Profiles
				</Text>
				<Text
					style={{
						fontSize: 20,
						marginBottom: 10
					}}
					onPress={this.props.Navigate}
				>
					Contact
				</Text>
				<Text
					style={{
						fontSize: 20,
						marginBottom: 10
					}}
				>
					{/* onPress={this.props.Navigate4}> */}
					Logout
				</Text>
			</ScrollView>
		);
	}
}
