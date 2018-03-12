import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Body, Card, CardItem } from 'native-base';

export default class TopicsCard extends Component {
	render() {
		return (
			<Card
				style={{
					width: 140,
					height: 75,
					justifyContent: 'center'
				}}
			>
				<CardItem style={{}}>
					<Body>
						<Text style={{ alignSelf: 'center' }}>{this.props.name}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}
