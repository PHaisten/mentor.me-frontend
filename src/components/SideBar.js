import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

export default class SideBar extends Component {
	render() {
		return (
			<ScrollView
				style={{ backgroundColor: '#fff', paddingTop: 30, paddingLeft: 15 }}
			>
				<Text style={{ fontSize: 20, marginBottom: 10 }}>Home</Text>
				<Text style={{ fontSize: 20, marginBottom: 10 }}>Profile</Text>
				<Text style={{ fontSize: 20, marginBottom: 10 }}>View Matches</Text>
				<Text style={{ fontSize: 20, marginBottom: 10 }}>About us</Text>
				<Text style={{ fontSize: 20, marginBottom: 10 }}>Logout</Text>
			</ScrollView>
		);
	}
}
