import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Body, Card, CardItem, Button } from 'native-base';

export default class TopicsCard extends Component {
	render() {
		return (
			<Button
				onPress={() => {
					this.props.navigation.navigate(
						'MentorSkill',
						{
							topic: this.props.topic
						},
						{ mentor: this.props.mentor }
					);
				}}
				style={{ marginTop: 10, marginBottom: 10, alignSelf: 'center' }}
			>
				<Text style={{ alignSelf: 'center' }}>{this.props.name}</Text>
			</Button>
		);
	}
}
