import React, { Component } from 'react';
import {
	ScrollView,
	TextInput,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
	TouchableHighlight,
	Button
} from 'react-native';
import { Item, Icon } from 'native-base';

export default class LoginScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;

		return (
			<KeyboardAvoidingView
				behavior="padding"
				style={styles.container1}
				keyboardVerticalOffset={65}
			>
				<View style={styles.container1}>
					<Text style={styles.text}>Mentor.Me</Text>
				</View>
				<View style={styles.container2}>
					<TextInput
						placeholder="Email"
						style={styles.input}
						returnKeyType="next"
						onSubmitEditing={() => this.passwordInput.focus()}
						keyboardType="email-address"
					/>
					<TextInput
						placeholder="Password"
						style={styles.input}
						secureTextEntry
						returnKeyType="go"
						ref={input => (this.passwordInput = input)}
					/>
					<Button
						onPress={() => navigate('CreateAccountLand', { name: 'Account' })}
						title="New here? Create an Account"
					/>
				</View>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		marginBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: 'white'
	},
	container1: {
		flex: 1,
		padding: 15,
		alignContent: 'center',
		backgroundColor: '#00BCD4'
	},
	container2: {
		padding: 10,
		alignContent: 'center'
	},
	text: {
		textAlign: 'center',
		color: '#FFF',
		fontSize: 50,
		fontWeight: 'bold',
		fontFamily: 'Verdana',
		marginTop: 30
	},
	button: {
		backgroundColor: '#B2EBF2',
		paddingVertical: 10,
		marginBottom: 10
	},
	buttonText: {
		textAlign: 'center',
		padding: 2,
		fontWeight: 'bold',
		fontSize: 18
	},
	smallText: {
		justifyContent: 'center',
		color: 'white'
	}
});
