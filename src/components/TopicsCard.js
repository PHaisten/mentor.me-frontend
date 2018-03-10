import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Body, Card, CardItem } from 'native-base';

export default class TopicsCard extends Component {
	render() {
		return (
			<Card
				style={{
					width: 150,
					height: 150,
					justifyContent: 'center'
				}}
			>
				<CardItem>
					<Body>
						<Text style={{}}>{this.props.name}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}
