import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

export default class SideBar extends Component {
	goToHome() {
		this.props.navigation.navigate('Home');
	}

	goToContact() {
		this.props.navigation.navigate('Contact');
	}

	goToMentorSearch() {
		this.props.navigation.navigate('Search');
	}

	goToSearchBar() {
		this.props.navigation.navigate('Topics');
	}

	// goToLogout() {
	//   this.props.navigation.navigate("Logout")
	// }

	render() {
		return (
			<ScrollView
				style={{
					backgroundColor: '#fff',
					paddingTop: 30,
					paddingLeft: 15
				}}
				Navigate={() => {
					this.goToContact();
				}}
				Navigate1={() => {
					this.goToHome();
				}}
				Navigate2={() => {
					this.goToSearchBar();
				}}
				Navigate3={() => {
					this.goToMentorSearch();
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
